import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Customer.css";

const CustomerHeader = () => {

    let navigate = useNavigate();

    const handleMeal = () => {
        navigate('/customer/meal');
        
    }

    const handleMain = () => {
        navigate('/customer');
    }

    const handleDrink = () => {
        navigate('/customer/drink');
    }



    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a onClick={handleMain}>Entrees & Sides</a>
                    </li>
                    <li>
                        <a onClick={handleMeal}>Meals</a>
                    </li>
                    <li>
                        <a onClick={handleDrink}>Drinks & Treats</a>
                    </li>


                </ul>
            </nav>
        </div>
    );
};

export default CustomerHeader;
