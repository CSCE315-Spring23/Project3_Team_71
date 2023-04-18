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
  const [zDate, setZDate] = useState('');
  const [xprofit, setxprofit] = useState('Profits: ');
  const [xtax, setxtax] = useState('Tax: ');

  const handleZReport = async () => {
    const res = await fetch("http://localhost:3001/zreport");
    const data= await res.json();
    setZDate(data);
  };

  const handleXReport = async () => {
    console.log("zDate: "+ zDate);

      const res1 = await fetch("http://localhost:3001/xreportdefault");
      const data = await res1.json();
      console.log(data);
      const tax = data * 0.0825;
      const profit = data - tax;
      setxprofit('Profits: $' + profit.toFixed(2));
      setxtax('Taxes: $' + tax.toFixed(2));
    
    /*else{
      const res2 = await fetch("http://localhost:3001/xreport/"+zDate);
      const data = await res2.json();
      
      const tax = data * 0.0825;
      const profit = data - tax;
      setxprofit('Profits: $' + profit.toFixed(2));
      setxtax('Taxes: $' + tax.toFixed(2));
    }*/



  };



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
      <button type ="button" onClick ={handleZReport}>Create Z Report</button>

      <button type ="button" onClick ={handleXReport}>Create X Report</button>
      <p>{xprofit}</p>
      <p>{xtax}</p>

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