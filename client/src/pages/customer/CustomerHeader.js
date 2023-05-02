import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Customer.css";

const CustomerHeader = () => {
    let navigate = useNavigate();

    const handleMeal = () => {
        navigate("/customer/meal");
    };

    const handleMain = () => {
        navigate("/customer");
    };

    const handleDrink = () => {
        navigate("/customer/drink");
    };

    const handleSeasonal = () => {
        navigate("/customer/seasonal");
    };

    return (
        <div className="btn-header-row-cashier">
            <nav>
                <ul>
                    <li>
                        <button
                            className="btn-header-cashier"
                            onClick={handleMain}
                        >
                            <h3>Entrees</h3>
                        </button>
                    </li>
                    <li>
                        <button
                            className="btn-header-cashier"
                            onClick={handleMeal}
                        >
                            <h3>Meals</h3>
                        </button>
                    </li>
                    <li>
                        <button
                            className="btn-header-cashier"
                            onClick={handleDrink}
                        >
                            <h3>Drinks</h3>
                        </button>
                    </li>
                    <li>
                        <button
                            className="btn-header-cashier"
                            onClick={handleSeasonal}
                        >
                            <h3>Seasonal</h3>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default CustomerHeader;
