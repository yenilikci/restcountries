import React, { useMemo, useEffect, useState } from "react";
import { useTable, useSortBy, useFilters, useGlobalFilter } from "react-table";
import { COLUMNS } from "../../utilities/columns";
import CountryService from "../../services/countryService";
import { GlobalFilter } from "././../GlobalFilter/GlobalFilter";
import LazyLoad from "react-lazyload";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import { toast } from "react-toastify";
import CapitalFilter from "../CapitalFilter/CapitalFilter";
import "./table.css";

export const Table = () => {
  const columns = useMemo(() => COLUMNS, []);

  // use an empty array as initial value
  const [data, setData] = useState([]);

  useEffect(() => {
    let countryService = new CountryService();
    countryService
      .getAll(
        "https://restcountries-api-yenilikci.herokuapp.com/api/v1/countries"
      )
      .then((res) => {
        // set the state
        setData(res.data.data);
        toast(`🎌 ${res.data.message}`);
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
      <div className="modal-content shadow my-2 border-0 filtering-modal">
        <div className="modal-header border-bottom-0">
          <h5 className="modal-title filtering-panel-text">Filtering Panel</h5>
        </div>
        <div className="row p-4">
          <div className="col-sm-6 filter">
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          </div>
          <div className="col-sm-6 filter">
            <CapitalFilter data={data} set={setData} />
          </div>
        </div>
      </div>

      {rows.length !== 0 ? (
        <table
          {...getTableProps()}
          className="table shadow table-responsive w-100 d-block d-md-table"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className="table-head"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            className="bi bi-sort-down mx-2 text-maize"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            className="bi bi-sort-up-alt mx-2 text-maize"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.5 13.5a.5.5 0 0 1-1 0V4.707L1.354 5.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 4.707V13.5zm4-9.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z" />
                          </svg>
                        )
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          className="bi bi-funnel-fill mx-2 text-maize"
                          viewBox="0 0 16 16"
                        >
                          <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
                        </svg>
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.length > 10
              ? rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr className="table-row" {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            <LazyLoad
                              placeholder={<SkeletonLoader />}
                              key={data.flag}
                            >
                              {cell.render("Cell")}
                            </LazyLoad>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })
              : rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr className="table-row" {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
          </tbody>
        </table>
      ) : (
        <div className="alert-modal">
          <div className="modal-content">
            <div className="modal-header bg-danger">
              <h5 className="modal-title text-white">Warning!</h5>
            </div>
            <div className="modal-body">
              <p>
                <span className="alert-modal-face">🙄</span> No data found
                matching your search parameters
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
