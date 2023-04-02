//import React, { useEffect, useState, useTable } from "react";
//import {useTable} from "react-table";
import "./../../css/sales.css"
import * as React from "react";
import { useTable } from "react-table";
import { useEffect, useState } from "react";

const columns = [
  {
    Header: "Sales ID",
    accessor: "sales_id",
  },
  {
    Header: "Sales Date",
    accessor: "sales_date",
  },
  {
    Header: "Total Sales",
    accessor: "total_sales",
  },
  {
    Header: "Total Tax",
    accessor: "total_tax",
  },
];

const SalesReports = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getSales= async ()=> {
      const res = await fetch ("http://localhost:3001/sales");
      const data= await res.json();
      setSales(data);
    }
    getSales();
  }, [])

  const tableInstance = useTable({ columns, data: sales });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <div className="container">
      <table {...getTableProps()}>
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
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SalesReports;