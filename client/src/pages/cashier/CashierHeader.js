import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Cashier.css";


const CashierHeader = () => {

    let navigate = useNavigate();

    const handleMeal = () => {
        navigate('/cashier/meal');
        
    }

    const handleMain = () => {
        navigate('/cashier');
    }

    const handleDrink = () => {
        navigate('/cashier/drink');
    }

    const handleSeasonal = () => {
        navigate('/cashier/seasonal');
    }


    return (
        <div>
            <nav>
                <ul >
                    <li >
                        <button onClick={handleMain}>Items</button>
                    </li>
                    <li >
                        <button onClick={handleMeal}>Meals</button>
                    </li>
                    <li >
                        <button onClick={handleDrink}>Drinks</button>
                    </li>
                    <li >
                        <button onClick={handleSeasonal}>Seasonal</button>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default CashierHeader;
