import React, { useEffect, useState } from "react";
import "../../css/AddMenuItem.css";
import { HOST } from "../../host";
/**

@function handleSubmit
@description A functional component that changes menu items
@returns {<void>}
*/
const ChangeMenu = () => {
    const [id, setId] = useState("");
    const [price, setPrice] = useState("");
    const [name, setName] = useState("");
 
    /**

@function handleSubmit
@description Handles submitting the changes for the menu based on the current values of 'id', 'price' and 'name'. Sends the updated values to the server to change the price and name of the menu.
@returns {Promise<void>}
*/
    const handleSubmit = async () => {
        if (price !== "") {
            console.log("/changeMenuPrice/" + id + "/" + price);
            const response_quantity = await fetch(
                `${HOST}/changeMenuPrice/${id}/${price}`
            );
        }
        if (name !== "") {
            console.log("/changeMenuName/" + id + "/" + name);
            const response_name = await fetch(
                `${HOST}/changeMenuName/${id}/${name}`
            );
        }
    };
/**

@function handleIdChange
@description Handles changing the value of 'id' based on the input event.
@param {Object} event - The input event object.
@returns {void}
*/
    const handleIdChange = (event) => {
        setId(event.target.value);
    };
/**

@function handlePriceChange
@description Handles changing the value of 'price' based on the input event.
@param {Object} event - The input event object.
@returns {void}
*/
    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };
/**

@function handleNameChange
@description Handles changing the value of 'name' based on the input event.
@param {Object} event - The input event object.
@returns {void}
*/
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    return (
        <div id="menuadder">
            <h3>Change a Menu Item</h3>
            <form id="menuadder-form">
                <input
                    type="text"
                    id="menuID"
                    name="Menu ID"
                    required="required"
                    placeholder="Enter Menu ID"
                    value={id}
                    onChange={handleIdChange}
                />
                <input
                    type="text"
                    id="price"
                    name="Price"
                    placeholder="Enter New Price"
                    value={price}
                    onChange={handlePriceChange}
                />
                <input
                    type="text"
                    id="name"
                    name="Name"
                    placeholder="Enter New Name"
                    value={name}
                    onChange={handleNameChange}
                />
                <button type="button" onClick={handleSubmit}>
                    Change Menu Item
                </button>
            </form>
        </div>
    );
};

export default ChangeMenu;
