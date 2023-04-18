//import React, { useEffect, useState, useTable } from "react";
//import {useTable} from "react-table";
import "./../../css/sales.css"
import * as React from "react";
import { useTable } from "react-table";
import { useEffect, useState } from "react";

const columns = [
  {
    Header: "Item Name",
    accessor: "item_name",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Minimum Amount",
    accessor: "min_amount",
  }
];

const RestockReport = () => {
  const [restock, setRes] = useState([]);
  const [quantity, setQuantity] = useState('');
  const [min_amount, setMinAmnt] = useState('Profits: ');

  useEffect(() => {
    const getRestock= async ()=> {
      const res = await fetch ("http://localhost:3001/restock");
      const data= await res.json();
      setRes(data);
    }
    getRestock();
  }, [])

  const tableInstance = useTable({ columns, data: restock });
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

export default RestockReport;