import "./../../css/sales.css"
import * as React from "react";
import { useTable } from "react-table";
import { useEffect, useState } from "react";

const ExcessReport = () => {
    const [items, setExcessReport] = useState([]);

    const [beginning, setBeginningDate] = useState('');

    const handleBeginningChange = (event) => {
        setBeginningDate(event.target.value);
      };

  const handleSubmit = async () => {

    const res = await fetch("http://localhost:3001/excessReport/" + beginning);
    const getdata= await res.json();
    setExcessReport(getdata);
    console.log(getdata);
  };

    return (
    <div className="container">
      <h2>Excess Report</h2>
      <form>

        <input 
        type = "date"
        id = "beginningdate" 
        name ="Beginning Date"
        required = "required"
        placeholder="Enter Beginning Date"
        value = {beginning}
        onChange = {handleBeginningChange}
        />
        <button type ="button" onClick ={handleSubmit}>Output Excess Report</button>
      </form>
      
    <table className="table table-bordered text-white">
      <thead>
        <tr>
          <th>item_name</th>
          <th>qty</th>
          <th>quantity</th>  
        </tr>
      </thead>
      <tbody>
          {items.map((excess) =>(
            <tr>
              <td>{excess.item_name}</td>
              <td>{excess.qty}</td>
              <td>{excess.quantity}</td>
            </tr>
          ))}
      </tbody>
    </table>
    </div>

    );
};

export default ExcessReport;