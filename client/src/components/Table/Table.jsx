import React, { useMemo, useEffect, useState } from "react";
import { useTable, useSortBy, useFilters, useGlobalFilter } from "react-table";
import { COLUMNS } from "../../utilities/columns";
import CountryService from "../../services/CountryService";
import "./table.css";
import { GlobalFilter } from "././../GlobalFilter/GlobalFilter";

export const Table = () => {
  const columns = useMemo(() => COLUMNS, []);

  const [data, setData] = useState([]); // use an empty array as initial value

  useEffect(() => {
    let countryService = new CountryService();
    countryService
      .getAll(
        "https://restcountries-api-yenilikci.herokuapp.com/api/v1/countries"
      )
      .then((res) => {
        setData(res.data.data); // set the state
      })
      .catch((err) => {
        console.log("err");
      });
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );
  const { globalFilter } = state;

  return (
    <>
      <div className="flex-row d-flex justify-content-center">
        <div className="w-50 mx-5">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
      </div>
      <table {...getTableProps()} className="table table-striped shadow">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
