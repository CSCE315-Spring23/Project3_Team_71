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



    return (
        <div>
            <nav>
                <ul className="nav">
                    <li className="nav-item">
                        <a onClick={handleMain}>Items</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={handleMeal}>Meals</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={handleDrink}>Drinks</a>
                    </li>


                </ul>
            </nav>
        </div>
    );
};

export default CashierHeader;
