import React, { useEffect, useState } from "react";

//YYYY-MM-DD FORMAT

const Orders = () => {
  const [items, setOrders] = useState([]);

  const [beginning, setBeginningDate] = useState('');
  const [end, setEndDate] = useState ('');

  const handleBeginningChange = (event) => {
    setBeginningDate(event.target.value);
  };

  const handleEndChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = async () => {

    //console.log("/changeIngredient/:"+id+"/:"+quantity+"/:"+name);
    const res = await fetch("http://localhost:3001/orders/" + beginning + "/" + end);
    const getdata= await res.json();
    setOrders(getdata);
    console.log(getdata);
  };
  return (
    <div>
      <h2>Orders</h2>

      <p>To use, enter the beginning and end dates in a YYYY-MM-DD Format</p>

      <form>
        <input 
        type = "text"
        id = "beginningdate" 
        name ="Beginning Date"
        required = "required"
        placeholder="Enter Beginning Date"
        value = {beginning}
        onChange = {handleBeginningChange}
        />
        <input 
        type = "text" 
        id = "enddate"
        name ="End Date"
        placeholder="Enter End Date"
        required = "required"
        value = {end}
        onChange = {handleEndChange}
        />
        <button type ="button" onClick ={handleSubmit}>Output Orders</button>
      </form>

      <table className="table table-bordered text-white">
      <thead>
        <tr>
          <th>order_id</th>
          <th>price</th>
          <th>is_paid</th>
          <th>order_time</th>        
        </tr>
      </thead>
      <tbody>
          {items.map((order_list) =>(
            <tr>
              <td>{order_list.order_id}</td>
              <td>{order_list.price}</td>
              <td>{order_list.is_paid ? "true" : "false"}</td>
              <td>{order_list.order_time}</td>
            </tr>
          ))}
      </tbody>
    </table>
    </div>
  )
}

export default Orders