import React, { useEffect, useState } from "react";
import { HOST } from "../../host";
import "../../css/changeIngredient2.css";

const Delete = () => {

    const [id, setId] = useState("");

    const handleDeleteMenu = async () => {
            console.log();
            //const response_name = await fetch(`${HOST}/changeIngredientName/${id}/${name}`);
    };

    const handleIdChange = (event) => {
        setId(event.target.value);
    };

    return (
        <div id = "menuadder2">
            <h3>Change a Menu Item</h3>
            <form id = "menuadder-form2">
                <input
                    type="text"
                    id="menuID"
                    name="Menu ID"
                    required="required"
                    placeholder="Enter Menu ID"
                    value={id}
                    onChange={handleIdChange}
                />
                <button type="button" onClick={handleDeleteMenu}>
                    Delete Menu Item
                </button>
            </form>
        </div>
    );
};

export default Delete;