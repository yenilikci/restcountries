import React, { useEffect, useState } from "react";
import CountryService from "../../services/countryService";
import { COLUMNS } from "../../utilities/columns";

const Table = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    let countryService = new CountryService();
    countryService.getAll().then((res) => {
      setCountries(res.data.data);
    });
  }, []);

  return (
    <div>
      <div className="card">
        <table class="table table-striped table-hover shadow">
          <thead>
            <tr>
              {COLUMNS.map((column) => (
                <th key={column.accesor}>{column.Header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => (
              <tr>
                <td>{country.name}</td>
                <td>{country.capital}</td>
                <td>{country.name}</td>
                <td className="w-25">
                  <img
                    src={country.flag}
                    className="img-fluid img-thumbnail"
                    alt={country.name}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
