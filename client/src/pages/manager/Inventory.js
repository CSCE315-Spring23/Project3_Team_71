import React, { useEffect, useState } from "react";

const Inventory = () => {

  const [items, setInventory] = useState([]);

  useEffect(() => {
    const getInventory= async ()=> {
      const res = await fetch ("http://localhost:3001/inventory");
      const getdata= await res.json();
      setInventory(getdata);
      console.log(getdata);
      }
      getInventory();
  }, []);
  return (
    <div>
      <h2>Menu</h2>
      <table className="table table-bordered text-white">
        <thead>
          <tr>
            <th>item_id</th>
            <th>quantity</th>
            <th>item_name</th>      
          </tr>
        </thead>
        <tbody>
            {items.map((inventory_list) =>(
              <tr>
                <td>{inventory_list.item_id}</td>
                <td>{inventory_list.quantity}</td>
                <td>{inventory_list.item_name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Inventory