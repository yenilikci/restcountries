import React, { useState, useEffect } from "react";
import CountryService from "../../services/CountryService";

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
      <span className="input-group-text bg-info text-white">
        CapitalName Search:{" "}
      </span>
      <input
        className="form-control"
        onChange={(e) => setCapitalNameFiltered(e.target.value)}
      />
    </div>
  );
};

export default CapitalFilter;
