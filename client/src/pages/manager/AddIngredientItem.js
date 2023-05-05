import React, { useEffect, useState } from "react";
import { HOST } from "../../host";
import "../../css/changeIngredient2.css";

const AddIngredientItem = () => {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleAddIngredientItem = async () => {
            console.log("hi");
            const response_name = await fetch(`${HOST}/addIngredientItem/${name}/${quantity}`);
    };

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handleQuantity = (event) => {
        setQuantity(event.target.value);
    };

    return (
        <div id = "menuadder2">
            <h3>Add Ingredient Item</h3>
            <form id = "menuadder-form2">
                <input
                    type="text"
                    id="name"
                    name="Item Name"
                    required="required"
                    placeholder="Enter Ingredient Name"
                    value={name}
                    onChange={handleName}
                />
                <input
                    type="text"
                    id="quantity"
                    name="Quantity"
                    required="required"
                    placeholder="Enter Ingredient Quantity"
                    value={quantity}
                    onChange={handleQuantity}
                />
                <button type="button" onClick={handleAddIngredientItem}>
                    Add Ingredient Item
                </button>
            </form>
        </div>
    );
};

export default AddIngredientItem;