import React, { useEffect, useState } from "react";
import COLUMNS from "../../utilities/columns";
import CountryService from "../../services/countryService";
import { toast } from "react-toastify";
import LazyLoad from "react-lazyload";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import NewsAboutModal from "../NewsAboutModal/NewsAboutModal";
import AlertModal from "../AlertModal/AlertModal";
import "../GlobalFilter/globalfilter.css";
import "../CapitalFilter/capitalFilter.css";
import "./table.css";

const Table = () => {
  //state definitions
  const [countries, setCountries] = useState([]);
  const [globalParam, setGlobalParam] = useState("");
  const [capitalParam, setCapitalParam] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [sortIsAscGlobal, setSortIsAscGlobal] = useState(true);
  const [sortIsAscCapital, setSortIsAscCapital] = useState(true);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const sort = (data, sortIsAsc) => {
    if (sortIsAsc) {
      data.sort((first, second) => {
        if (first.name < second.name) {
          return -1;
        } else if (first.name > second.name) {
          return 1;
        } else {
          return 0;
        }
      });
      return data;
    } else {
      data.sort((first, second) => {
        if (first.name > second.name) {
          return -1;
        } else if (first.name < second.name) {
          return 1;
        } else {
          return 0;
        }
      });
      return data;
    }
  };

  const sortMessage = (sortIsAsc, param) => {
    param ? (param = ` with param ${param}`) : "";
    if (sortIsAsc) {
      toast(`🎌 data sorted "A->Z"` + param);
    } else {
      toast(`🎌 data sorted "Z->A"` + param);
    }
  };

  //first side effect
  useEffect(() => {
    let countryService = new CountryService();
    countryService.getAll().then((res) => {
      sort(res.data.data, true);
      setCountries(res.data.data);
      toast(`🎌 ${res.data.message}`);
    });
  }, []);

  //capitalParam update effect
  useEffect(() => {
    let countryService = new CountryService();
    countryService.getByCapitalName(capitalParam).then((res) => {
      setGlobalParam("");
      sort(res.data.data, sortIsAscCapital);
      if (capitalParam.length != 0) {
        sortMessage(sortIsAscCapital, capitalParam);
      }
      setCountries(res.data.data);
    });
  }, [capitalParam, sortIsAscCapital]);

  //globalParam update effect
  useEffect(() => {
    if (globalParam.length != 0) {
      let countryService = new CountryService();
      countryService.getAll().then((res) => {
        const array = [];
        setCapitalParam("");
        res.data.data.forEach((country) => {
          let localizedData = JSON.stringify(country).toLocaleLowerCase("tr");
          localizedData.includes(globalParam.toLocaleLowerCase("tr"))
            ? array.push(country)
            : null;
          console.log(array);
        });
        sort(array, sortIsAscGlobal);
        sortMessage(sortIsAscGlobal, globalParam);
        setCountries(array);
      });
    } else {
      let countryService = new CountryService();
      countryService.getAll().then((res) => {
        sort(res.data.data, sortIsAscGlobal);
        sortMessage(sortIsAscGlobal, globalParam);
        setCountries(res.data.data);
      });
    }
  }, [globalParam, sortIsAscGlobal]);

  return (
    <div>
      <div className="modal-content shadow my-2 border-0 filtering-modal">
        <div className="modal-header border-bottom-0">
          <h5 className="modal-title filtering-panel-text">Filtering Panel</h5>
        </div>
        <div className="row p-4">
          <div className="col-sm-6 filter">
            <div className="input-group mb-3">
              <span className="input-group-text global-filter text-white">
                Global Search:
              </span>
              <input
                className="form-control global-input"
                placeholder="for all fields"
                onChange={(e) => setGlobalParam(e.target.value.trim())}
                value={globalParam}
              />
              <button
                className="btn-custom"
                onClick={() => setSortIsAscGlobal(!sortIsAscGlobal)}
              >
                {sortIsAscGlobal ? (
                  <i className="fas fa-sort-alpha-down"></i>
                ) : (
                  <i className="fas fa-sort-alpha-down-alt"></i>
                )}
              </button>
            </div>
          </div>
          <div className="col-sm-6 filter">
            <div className="input-group mb-3">
              <span className="input-group-text text-white capital-filter">
                Capital Search:{" "}
              </span>
              <input
                className="form-control capital-input"
                placeholder="for capital name"
                onChange={(e) => setCapitalParam(e.target.value.trim())}
                value={capitalParam}
              />
              <button
                className="btn-custom"
                onClick={() => setSortIsAscCapital(!sortIsAscCapital)}
              >
                {sortIsAscCapital ? (
                  <i className="fas fa-sort-alpha-down"></i>
                ) : (
                  <i className="fas fa-sort-alpha-down-alt"></i>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="card panel shadow p-2">
          <NewsAboutModal toggleModal={toggleModal} modalIsOpen={modalIsOpen} />
        </div>
      </div>

      <table className="table shadow table-responsive w-100 d-block d-md-table">
        <thead>
          <tr>
            {COLUMNS.map((column) => (
              <th className="table-head" scope="col" key={column.accessor}>
                {column.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <tr className="table-row" key={country.numericCode}>
              {/* if there is a lot of data */}
              {countries.length > 100 && index > 10 ? (
                <>
                  <td>
                    <LazyLoad
                      placeholder={<SkeletonLoader />}
                      key={country.numericCode}
                    >
                      {country.name}
                    </LazyLoad>
                  </td>

                  <td>
                    <LazyLoad
                      placeholder={<SkeletonLoader />}
                      key={country.numericCode}
                    >
                      {country.capital}
                    </LazyLoad>
                  </td>

                  <td>
                    <LazyLoad
                      placeholder={<SkeletonLoader />}
                      key={country.numericCode}
                    >
                      {country.region}
                    </LazyLoad>
                  </td>

                  <td>
                    <LazyLoad
                      placeholder={<SkeletonLoader />}
                      key={country.numericCode}
                    >
                      <img src={country.flag} style={{ width: 70 }} />
                    </LazyLoad>
                  </td>
                </>
              ) : (
                <>
                  <td>{country.name}</td>
                  <td>{country.capital}</td>
                  <td>{country.region}</td>
                  <td>
                    <img src={country.flag} style={{ width: 70 }} />
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {countries.length == 0 ? <AlertModal /> : null}
    </div>
  );
};

export default Table;
