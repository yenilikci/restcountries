import React, { useState, useEffect } from "react";
import CountryService from "../../services/countryService";
import "./capitalFilter.css";

const CapitalFilter = (props) => {
  const [capitalNameFiltered, setCapitalNameFiltered] = useState("");

  useEffect(() => {
    let countryService = new CountryService();
    countryService
      .getByCapitalName(capitalNameFiltered)
      .then((res) => props.set(res.data.data));
  }, [capitalNameFiltered]);

  return (
    <div className="input-group mb-3">
      <span className="input-group-text text-white capital-filter">
        CapitalName Search:{" "}
      </span>
      <input
        className="form-control capital-input"
        placeholder="for capital name"
        onChange={(e) => setCapitalNameFiltered(e.target.value)}
      />
    </div>
  );
};

export default CapitalFilter;
