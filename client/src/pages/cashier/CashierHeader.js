import React from "react";
import { useNavigate } from "react-router-dom";

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
                <ul className="nav">
                    <li className="nav-item">
                        <button onClick={handleMain}>Items</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={handleMeal}>Meals</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={handleDrink}>Drinks</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={handleSeasonal}>Seasonal</button>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default CashierHeader;
