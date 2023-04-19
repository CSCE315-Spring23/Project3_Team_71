import React, { useEffect, useState } from "react";
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

import "../../css/Manager.css";

const Manager = () => {


    const [activeFunction, setFunction] = useState(null);


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
    }
    return (
        <div>
            <div className="button-row-1">
                <button className="m-btn" onClick={() => handleManagerFunction('orderFunction')}>
                    {activeFunction === 'orderFunction' ? 'Hide Orders' : 'Orders'} 
                </button>
                <button className="m-btn" onClick={() => handleManagerFunction('menuItemsFunction')}>
                    {activeFunction === 'menuItemsFunction' ? 'Hide MenuItems' : 'MenuItems'} 
                </button>
                <button className="m-btn" onClick={() => handleManagerFunction('inventoryFunction')}>
                    {activeFunction === 'inventoryFunction' ? 'Hide Inventory' : 'Inventory'} 
                </button>
                <button className="m-btn" onClick={() => handleManagerFunction('salesReportsFunction')}>
                    {activeFunction === 'salesReportsFunction' ? 'Hide Sales Report' : 'Sales Report'} 
                </button>
            </div>

            <div className="button-row-2">
                <button className="m-btn" onClick={() => handleManagerFunction('changeMenuFunction')}>
                    {activeFunction === 'changeMenyFunction' ? 'Hide Change Menu Item' : 'Change Menu Item'} 
                </button>
                <button className="m-btn" onClick={() => handleManagerFunction('changeIngredientFunction')}>
                    {activeFunction === 'changeIngredientFunction' ? 'Hide Change Ingredient Item' : 'Change Ingredient Item'} 
                </button>
                <button className="m-btn" onClick={() => handleManagerFunction('addMenuItemFunction')}>
                    {activeFunction === 'addMenuItemFunction' ? 'Hide Add Menu Item' : 'Change Add Menu Item'} 
                </button>
                <button className="m-btn" onClick={() => handleManagerFunction('addIngredientFunction')}>
                    {activeFunction === 'addIngredientFunction' ? 'Hide Add Ingredient' : 'Change Add Ingredient'} 
                </button>
            </div>

            <div className ="button-row-3">
            <button className="m-btn" onClick={() => handleManagerFunction('excessReport')}>
                    {activeFunction === 'excessReport' ? 'Hide Excess Report' : 'Excess Report'} 
                </button>

                <button className="m-btn" onClick={() => handleManagerFunction('RestockReport')}>
                    {activeFunction === 'RestockReport' ? 'Hide Excess Report' : 'Restock Report'} 
                </button>
            </div>

            {activeFunction === 'orderFunction' && <Orders />}
            {activeFunction === 'menuItemsFunction' && <MenuItems />}
            {activeFunction === 'inventoryFunction' && <Inventory />}
            {activeFunction === 'salesReportsFunction' && <SalesReports />}
            {activeFunction === 'changeMenuFunction' && <ChangeMenu />}
            {activeFunction === 'changeIngredientFunction' && <ChangeIngredient />}
            {activeFunction === 'addMenuItemFunction' && <AddMenuItem />}
            {activeFunction === 'addIngredientFunction' && <AddIngredient />}
            {activeFunction === 'excessReport' && <ExcessReport />}
            {activeFunction === 'RestockReport' && <RestockReport />}
        </div>
    );
};

export default Manager;
