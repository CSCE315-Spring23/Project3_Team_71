import React, { useEffect, useState } from "react";
import Orders from "./Orders";
import MenuItems from "./MenuItems";
import Ingredients from "./Ingredients";
import SalesReports from "./SalesReports";
import ChangeMenu from "./ChangeMenu";
import ChangeIngredient from "./ChangeIngredient";
import AddMenuItem from "./AddMenuItem";

const Manager = () => {

    const [weather, setWeather] = useState("");

    useEffect(() => {
        const getWeather = async () => {
            const res = await fetch("http://localhost:3001/weather/30.6280/-96.3344");
            const data = await res.json();

            setWeather(data);
        };


        getWeather();
    }, []);

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
                <button onClick={() => handleManagerFunction('orderFunction')}>
                    {activeFunction === 'orderFunction' ? 'Hide Orders' : 'Orders'} 
                </button>
                <button onClick={() => handleManagerFunction('menuItemsFunction')}>
                    {activeFunction === 'menuItemsFunction' ? 'Hide MenuItems' : 'MenuItems'} 
                </button>
                <button onClick={() => handleManagerFunction('ingredientsFunction')}>
                    {activeFunction === 'ingredientsFunction' ? 'Hide Ingredients Items' : 'Ingredients Items'} 
                </button>
                <button onClick={() => handleManagerFunction('salesReportsFunction')}>
                    {activeFunction === 'salesReportsFunction' ? 'Hide Sales Report' : 'Sales Report'} 
                </button>
            </div>

            <div className="button-row-2">
                <button onClick={() => handleManagerFunction('changeMenuFunction')}>
                    {activeFunction === 'changeMenyFunction' ? 'Hide Change Menu Item' : 'Change Menu Item'} 
                </button>
                <button onClick={() => handleManagerFunction('changeIngredientFunction')}>
                    {activeFunction === 'changeIngredientFunction' ? 'Hide Change Ingredient Item' : 'Change Ingredient Item'} 
                </button>
                <button onClick={() => handleManagerFunction('addMenuItemFunction')}>
                    {activeFunction === 'addMenuItemFunction' ? 'Hide Add Menu Item' : 'Change Add Menu Item'} 
                </button>
                <button>Add Ingredient</button>
            </div>

            {activeFunction === 'orderFunction' && <Orders />}
            {activeFunction === 'menuItemsFunction' && <MenuItems />}
            {activeFunction === 'ingredientsFunction' && <Ingredients />}
            {activeFunction === 'salesReportsFunction' && <SalesReports />}
            {activeFunction === 'changeMenuFunction' && <ChangeMenu />}
            {activeFunction === 'changeIngredientFunction' && <ChangeIngredient />}
            {activeFunction === 'addMenuItemFunction' && <AddMenuItem />}
        </div>
    );
};

export default Manager;
