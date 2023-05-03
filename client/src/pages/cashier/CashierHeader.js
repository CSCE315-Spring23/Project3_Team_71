import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Cashier.css";


/**
 * Component representing the header for the cashier section of the app.
 * Contains buttons for navigating between different cashier menu categories.
 */

const CashierHeader = () => {
    let navigate = useNavigate();

    /**
     * Handler function for clicking the "Meal" button in the cashier header.
     * Navigates to the main cashier menu.
     */
    const handleMeal = () => {
        navigate("/cashier/meal");
    };

    /**
     * Handler function for clicking the "Entrees" button in the cashier header.
     * Navigates to the main cashier menu.
     */
    const handleMain = () => {
        navigate("/cashier");
    };

    /**
     * Handler function for clicking the "Drink" button in the cashier header.
     * Navigates to the main cashier menu.
     */
    const handleDrink = () => {
        navigate("/cashier/drink");
    };

    /**
     * Handler function for clicking the "Sauce" button in the cashier header.
     * Navigates to the main cashier menu.
     */
    const handleSauce = () => {
        navigate("/cashier/sauce");
    };

    /**
     * Handler function for clicking the "Seasonal" button in the cashier header.
     * Navigates to the main cashier menu.
     */
    const handleSeasonal = () => {
        navigate("/cashier/seasonal");
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
                            <h3>Drinks/Treats</h3>
                        </button>
                    </li>
                    <li>
                        <button
                            className="btn-header-cashier"
                            onClick={handleSauce}
                        >
                            <h3>Sauces</h3>
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

export default CashierHeader;
