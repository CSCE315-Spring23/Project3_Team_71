import React, { useState } from "react";
import Orders from "./Orders";
import MenuItems from "./MenuItems";
import Inventory from "./Inventory";
import SalesReports from "./SalesReports";
import ChangeMenu from "./ChangeMenu";
import ChangeIngredient from "./ChangeIngredient";
import AddMenuItem from "./AddMenuItem";
import AddIngredient from "./AddIngredient";
import ExcessReport from "./ExcessReport";
import RestockReport from "./RestockReport";
import Delete from "./Delete";
import AddIngredientItem from "./AddIngredientItem";

import "../../css/managerButtons.css";
/**

Renders the Manager component.

@returns {JSX.Element} The rendered component.
*/
const Manager = () => {
    /*

The state representing the currently active function.
@type {[string|null, function]} An array containing the state value and the function to update it.
*/
    const [activeFunction, setFunction] = useState(null);
/**

Handles a click on a manager function button by updating the active function state.
@param {string} functionName - The name of the clicked function button.
@returns {JSX.Element} The function Name.
*/

    const handleManagerFunction = (functionName) => {
        setFunction((prevFunction) => {
            // If the clicked button is already active, deactivate it
            if (prevFunction === functionName) {
                return null;
            }
            // Otherwise, deactivate the current active button (if any)
            // and activate the clicked button
            return functionName;
        });
    };
    return (
        <div>
            <img
                src="/resource/manager_right.png"
                alt="backdrop"
                className="backdrop-img"
            />
        <div className = "navbar">

                <button
                    className="m-btn"
                    onClick={() => handleManagerFunction("orderFunction")}
                >
                    {activeFunction === "orderFunction"
                        ? "Hide Orders"
                        : "Orders"}
                </button>
                <button
                    className="m-btn"
                    onClick={() => handleManagerFunction("menuItemsFunction")}
                >
                    {activeFunction === "menuItemsFunction"
                        ? "Hide MenuItems"
                        : "MenuItems"}
                </button>
                <button
                    className="m-btn"
                    onClick={() => handleManagerFunction("inventoryFunction")}
                >
                    {activeFunction === "inventoryFunction"
                        ? "Hide Inventory"
                        : "Inventory"}
                </button>
                <button
                    className="m-btn"
                    onClick={() =>
                        handleManagerFunction("salesReportsFunction")
                    }
                >
                    {activeFunction === "salesReportsFunction"
                        ? "Hide Sales Report"
                        : "Sales Report"}
                </button>

        
                <button
                    className="m-btn"
                    onClick={() =>
                        handleManagerFunction("changeIngredientFunction")
                    }
                >
                    {activeFunction === "changeIngredientFunction"
                        ? "Hide Change Ingredient Item"
                        : "Change Ingredient/Menu Item"}
                </button>
                <button
                    className="m-btn"
                    onClick={() => handleManagerFunction("addMenuItemFunction")}
                >
                    {activeFunction === "addMenuItemFunction"
                        ? "Hide Add Menu Item"
                        : "Add Menu Item"}
                </button>
                {/* <button
                    className="m-btn"
                    onClick={() =>
                        handleManagerFunction("addIngredientFunction")
                    }
                >
                    {activeFunction === "addIngredientFunction"
                        ? "Hide Add Ingredient"
                        : "Add Ingredient"}
                </button> */}

                <button
                    className="m-btn"
                    onClick={() => handleManagerFunction("AddIngredientItem")}
                >
                    {activeFunction === "Delete"
                        ? "Hide Add Ingredient Item"
                        : "Add Ingredient Item"}
                </button>



                <button
                    className="m-btn"
                    onClick={() => handleManagerFunction("excessReport")}
                >
                    {activeFunction === "excessReport"
                        ? "Hide Excess Report"
                        : "Excess Report"}
                </button>

                <button
                    className="m-btn"
                    onClick={() => handleManagerFunction("RestockReport")}
                >
                    {activeFunction === "RestockReport"
                        ? "Hide Restock Report"
                        : "Restock Report"}
                </button>

                <button
                    className="m-btn"
                    onClick={() => handleManagerFunction("Delete")}
                >
                    {activeFunction === "Delete"
                        ? "Hide Delete Item"
                        : "Delete Item"}
                </button>
                </div>

            {activeFunction === "orderFunction" && <Orders />}
            {activeFunction === "menuItemsFunction" && <MenuItems />}
            {activeFunction === "inventoryFunction" && <Inventory />}
            {activeFunction === "salesReportsFunction" && <SalesReports />}

            {activeFunction === "changeIngredientFunction" && (
                <ChangeIngredient />
            )}
            {activeFunction === "addMenuItemFunction" && <AddMenuItem />}
            {activeFunction === "AddIngredientItem" && <AddIngredientItem />}
            {activeFunction === "excessReport" && <ExcessReport />}
            {activeFunction === "RestockReport" && <RestockReport />}
            {activeFunction === "Delete" && <Delete />}
        </div>
    );
};

export default Manager;
