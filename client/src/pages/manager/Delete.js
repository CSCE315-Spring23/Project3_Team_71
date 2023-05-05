import React, { useEffect, useState } from "react";
import { HOST } from "../../host";
import "../../css/changeIngredient2.css";

const Delete = () => {

    const [idMenu, setIdMenu] = useState("");
    const [idIngredient, setIngredient] = useState("");

    const handleDeleteMenu = async () => {
            console.log();
            const response_name = await fetch(`${HOST}/deleteMenuItem/${idMenu}`);
    };

    const handleDeleteIngredient = async () => {
        console.log();
        const response_name = await fetch(`${HOST}/deleteIngredient/${idIngredient}`);
    };
    const handleIdMenuChange = (event) => {
        setIdMenu(event.target.value);
    };

    const handleIdIngredientChange = (event) => {
        setIngredient(event.target.value);
    };
    return (
        <div id = "menuadder2">
            <h3>Delete item</h3>
            <form id = "menuadder-form2">
                <input
                    type="text"
                    id="menuID"
                    name="Menu ID"
                    required="required"
                    placeholder="Enter Menu ID"
                    value={idMenu}
                    onChange={handleIdMenuChange}
                />
                <button type="button" onClick={handleDeleteMenu}>
                    Delete Menu Item
                </button>

                <input
                    type="text"
                    id="ingredientID"
                    name="Ingredient ID"
                    required="required"
                    placeholder="Enter Ingredient ID"
                    value={idIngredient}
                    onChange={handleIdIngredientChange}
                />
                <button type="button" onClick={handleDeleteIngredient}>
                    Delete Ingredient Item
                </button>
            </form>
        </div>
    );
};

export default Delete;