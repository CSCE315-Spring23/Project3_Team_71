import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Cashier.css";

const CashierHeader = () => {
    let navigate = useNavigate();

    const handleMeal = () => {
        navigate("/cashier/meal");
    };

    const handleMain = () => {
        navigate("/cashier");
    };

    const handleDrink = () => {
        navigate("/cashier/drink");
    };

    const handleSauce = () => {
        navigate("/cashier/sauce");
    };

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
                            <h3>Items</h3>
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
                            onClick={handleSauce}
                        >
                            <h3>Sauce</h3>
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
