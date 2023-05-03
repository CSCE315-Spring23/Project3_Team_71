import React, { useEffect, useState } from "react";
import { HOST } from "../../host";
/**

React component for displaying the inventory.
@returns {JSX.Element} JSX element of the inventory component.
*/
const Inventory = () => {
    const [items, setInventory] = useState([]);

    useEffect(() => {
        /**

Fetches the inventory data from the server and updates the state with it.
@function
@returns {void}
*/
        const getInventory = async () => {
            const res = await fetch(`${HOST}/inventory`);
            const getdata = await res.json();
            setInventory(getdata);
            console.log(getdata);
        };
        getInventory();
    }, []);
    return (
        <div className="container">
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
                    {items.map((inventory_list) => (
                        <tr>
                            <td>{inventory_list.item_id}</td>
                            <td>{inventory_list.quantity}</td>
                            <td>{inventory_list.item_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Inventory;
