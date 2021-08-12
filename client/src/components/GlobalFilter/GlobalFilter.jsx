import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import "./globalfilter.css";

export const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 500);
  return (
    <div className="input-group mb-3">
      <span className="input-group-text global-filter text-white">
        Global Search:{" "}
      </span>
      <input
        className="form-control global-input"
        placeholder="for all fields"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
  );
};
