import "./../../css/sales.css"
import * as React from "react";
import { useTable } from "react-table";
import { useEffect, useState } from "react";
import { HOST } from "../../host";
/**

A functional component that displays an excess report of items for a given date range.
@returns {JSX.Element} ExcessReport component JSX code
*/
const ExcessReport = () => {
    const [items, setExcessReport] = useState([]);

    const [beginning, setBeginningDate] = useState('');
/**

Event handler that updates the beginning date for the excess report.
@param {Object} event - The event object from the input field
*/
    const handleBeginningChange = (event) => {
        setBeginningDate(event.target.value);
      };
/**

Event handler that fetches the excess report data and sets the state to display it.
@async
*/
  const handleSubmit = async () => {

    const res = await fetch(`${HOST}/excessReport/${beginning}`);
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