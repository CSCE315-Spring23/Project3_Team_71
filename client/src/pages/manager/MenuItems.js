import React, { useEffect, useState } from "react";

const MenuItems = () => {
  const [items, setMenu] = useState([]);

  //*FIXME* No way to display a boolean value in table
  useEffect(() => {
    const getMenu= async ()=> {
      const res = await fetch ("http://localhost:3001/menu");
      const getdata= await res.json();
      setMenu(getdata);
      }
      getMenu();
  }, []);

  return (
    <div>
      <h2>Menu</h2>

    <table className="table table-bordered text-white">
      <thead>
        <tr>
          <th>menu_item_id</th>
          <th>menu_item_name</th>
          <th>menu_item_price</th>
          <th>menu_item_size</th>
          <th>menu_item_is_meal</th>         
        </tr>
      </thead>
      <tbody>
          {items.map((menu_list) =>(
            <tr>
              <td>{menu_list.menu_item_id}</td>
              <td>{menu_list.menu_item_name}</td>
              <td>{menu_list.menu_item_price}</td>
              <td>{menu_list.size}</td>
            </tr>
          ))}
      </tbody>
    </table>
    </div>
  );
}

export default MenuItems
