import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Customer.css";

const CustomerHeader = () => {
    let navigate = useNavigate();

    /**
     Handles the click event for the meal button and navigates to the customer meal page.
     *
     *@returns {void} 
     */
    const handleMeal = () => {
        navigate("/customer/meal");
    };
    /**
     *Handles the click event for the main button and navigates to the customer main page.
     *
     *@returns {void}
     */
    const handleMain = () => {
        navigate("/customer");
    };
    /**
     * Handles the click event for the drink button and navigates to the customer drink page.
     *
     * @returns {void}
     */
    const handleDrink = () => {
        navigate("/customer/drink");
    };
    /**
     * Handles the click event for the seasonal button and navigates to the customer seasonal page.
     *
     * @returns {void}
     */
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
                            <h3>Drinks & Treats</h3>
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
