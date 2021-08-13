import React, { useState, useEffect } from "react";
import { useAsyncDebounce } from "react-table";
import { convertCh } from "../../helpers/trChar";
import "./globalfilter.css";

export const GlobalFilter = ({ filter, setFilter, setCapital }) => {
  const [value, setValue] = useState(filter);

  useEffect(() => {
    setCapital("");
  }, [value]);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 500);

  return (
    <div className="input-group mb-3">
      <span className="input-group-text global-filter text-white">
        Global Search:
      </span>
      <input
        className="form-control global-input"
        placeholder="for all fields"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(convertCh(e.target.value));
        }}
      />
    </div>
  );
};
