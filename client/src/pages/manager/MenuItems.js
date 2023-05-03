import React, { useEffect, useState } from "react";
import { HOST } from "../../host";
/**

MenuItems Component - displays a list of menu items

@returns {JSX.Element} - JSX element representing the MenuItems component
*/
const MenuItems = () => {
    const [items, setMenu] = useState([]);
/**
* Asynchronously retrieves the menu items data from the server and sets it in the state.
*
* @async
* @function
*/
    useEffect(() => {
        /**

Represents a functional component that retrieves and displays a list of menu items.
@returns {JSX.Element} The rendered component.
*/
        const getMenu = async () => {
            const res = await fetch(`${HOST}/menu`);
            const getdata = await res.json();
            setMenu(getdata);
            console.log(getdata);
        };
        getMenu();
    }, []);

    return (
        <div className="container">
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
                    {items.map((menu_list) => (
                        <tr>
                            <td>{menu_list.menu_item_id}</td>
                            <td>{menu_list.menu_item_name}</td>
                            <td>{menu_list.menu_item_price}</td>
                            <td>{menu_list.size}</td>
                            <td>{menu_list.is_meal ? "true" : "false"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MenuItems;
