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
                <ul>
                    <li>
                        <a onClick={handleMain}>Items</a>
                    </li>
                    <li>
                        <a onClick={handleMeal}>Meals</a>
                    </li>
                    <li>
                        <a onClick={handleDrink}>Drinks</a>
                    </li>


                </ul>
            </nav>
        </div>
    );
};

export default CashierHeader;
