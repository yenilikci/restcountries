import React, { useEffect } from "react";
import { convertCh } from "../../helpers/trChar";
import CountryService from "../../services/countryService";
import "./capitalFilter.css";

const CapitalFilter = (props) => {
  useEffect(() => {
    let countryService = new CountryService();
    countryService
      .getByCapitalName(props.data)
      .then((res) => props.set(res.data.data));
  }, [props.data]);

  return (
    <div className="input-group mb-3">
      <span className="input-group-text text-white capital-filter">
        CapitalName Search:{" "}
      </span>
      <input
        className="form-control capital-input"
        placeholder="for capital name"
        onChange={(e) => {
          props.datas(convertCh(e.target.value));
        }}
        value={props.data}
      />
    </div>
  );
};

export default CapitalFilter;
