import React, { useEffect, useState } from "react";
import "./../../css/sales.css"
const SalesReports = () => {
  const [sales, setSales] = useState([]);
  useEffect(() => {
    const getSales= async ()=> {
      const res = await fetch ("http://localhost:3001/sales");
      const getdata= await res.json();
      setSales(getdata);
      console.log(getdata);
      }
      getSales();
  }, [])


  return (
    <div>
      <h2>Sales Reports</h2>
    <div className="container">
    <table className="table table-bordered text-white">
      <thead>
        <tr>
          <th>sales_id</th>
          <th>sales date</th>
          <th>total sales</th>
          <th>total tax</th>

        </tr>
      </thead>
      <tbody>
          {sales.map((sales_list) =>(
            <tr>
              <td>{sales_list.sales_id}</td>
              <td>{sales_list.sales_date}</td>
              <td>{sales_list.total_sales}</td>
              <td>{sales_list.total_tax}</td>
            </tr>
          ))}
      </tbody>
    </table>
    </div>
    </div>
  );
}

export default SalesReports