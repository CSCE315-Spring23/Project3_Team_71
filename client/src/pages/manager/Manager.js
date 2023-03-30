import React, { useEffect, useState } from "react";
import Orders from "./Orders";

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

    const [showOtherComponent, setShowOtherComponent] = useState(false);

    const handleClick = async () => {
      setShowOtherComponent(!showOtherComponent);
    };

    return (
        <div>
            <div className="button-row-1">
                <div>
                    <button onClick={handleClick}>
                    {showOtherComponent ? 'Hide Other Component' : 'Show Other Component'}
                    </button>
                    {showOtherComponent && <Orders />}
                </div>
                <button>Orders</button>
                <button>Menu Items</button>
                <button>Ingredient Items</button>
                <button>Sales Reports</button>
            </div>

            <div className="button-row-2">
                <button>Change Menu Items</button>
                <button>Change Ingredient</button>
                <button>Add Ingredient</button>
                <button>Add Menu Item</button>
            </div>
        </div>
    );
};

export default Manager;
