import React, { useEffect, useState, useContext } from "react";
import { CashierHelper } from "../../hooks/CashierHelper";
import CashierHeader from "./CashierHeader";
import "../../css/Cashier.css";
import { CurOrderContext } from "../../hooks/CurOrderContext";
import CurOrderPopUp from "../../components/CurOrderPopUp";
import { HOST } from "../../host";


/*
* React component for the Cashier section of the app 
@returns {JSX.Element} Cashier Sauce component JSX
*/
const CashierSauce = () => {
    const [menu, setMenu] = useState("");
    const { totalCost, setTotalCost, curItems, setCurItems } =
        useContext(CurOrderContext);

    const { handleClick, handleComplete, handleNewOrder, handleSubtract } =
        CashierHelper(curItems, menu, totalCost, setCurItems, setTotalCost);

    const [showPopUp, setShowPopUp] = useState(false);

    /*
    * Toggles the visibility of the current order popup
    */
    const handlePopUp = () => {
        setShowPopUp(!showPopUp);
    };

    /*
    *
    * Fetches the menu data from the server and saves it to state
    */
    useEffect(() => {
        const getMenu = async () => {
            const res = await fetch(`${HOST}/menu`);
            const data = await res.json();

            const newObj = {};
            for (const key in data) {
                const { menu_item_id, menu_item_price, menu_item_name } =
                    data[key];
                newObj[menu_item_id] = [menu_item_price, menu_item_name];
            }

            setMenu(newObj);
        };
        getMenu();
    }, []);
    return (
        <>
            <div className="btn-wrap">
                <CashierHeader />
                <div className="button-row-cashier">
                    <button
                        className="btn-cashier"
                        id="cfaS"
                        onClick={handleClick}
                    >
                        <img
                            src="/resource/Sauce_CFA-Sauce_Desk.png"
                            alt="Chick-Fil-A Sauce"
                            className="btn-img-cashier-sauce"
                        />
                        <h1>CFAS</h1>
                    </button>
                    <button
                        className="btn-cashier"
                        id="pS"
                        onClick={handleClick}
                    >
                        <img
                            src="/resource/Sauce_Polynesian_Desk.png"
                            alt="Polynesian Sauce"
                            className="btn-img-cashier-sauce"
                        />
                        <h1>PS</h1>
                    </button>
                    <button
                        className="btn-cashier"
                        id="hmS"
                        onClick={handleClick}
                    >
                        <img
                            src="/resource/Sauce_Honey-Mustard_Desk.png"
                            alt="Honey Mustard Sauce"
                            className="btn-img-cashier-sauce"
                        />
                        <h1>HMS</h1>
                    </button>
                    <button
                        className="btn-cashier"
                        id="ghrS"
                        onClick={handleClick}
                    >
                        <img
                            src="/resource/Sauce_Garden-Herb-Ranch_Desk.png"
                            alt="Garden Herb Ranch Sauce"
                            className="btn-img-cashier-sauce"
                        />
                        <h1>GHRS</h1>
                    </button>
                </div>
                <div className="button-row-cashier">
                    <button
                        className="btn-cashier"
                        id="bqS"
                        onClick={handleClick}
                    >
                        <img
                            src="/resource/Sauce_Barbeque_Desk.png"
                            alt="Barbeque Sauce"
                            className="btn-img-cashier-sauce"
                        />
                        <h1>BQS</h1>
                    </button>
                    <button
                        className="btn-cashier"
                        id="zbS"
                        onClick={handleClick}
                    >
                        <img
                            src="/resource/Sauce_Zesty-Buffalo_Desk.png"
                            alt="Zesty Buffalo Sauce"
                            className="btn-img-cashier-sauce"
                        />
                        <h1>ZBS</h1>
                    </button>
                    <button
                        className="btn-cashier"
                        id="srS"
                        onClick={handleClick}
                    >
                        <img
                            src="/resource/Sauce_Sweet-and-Spicy-Sriracha_Desk.png"
                            alt="Sweet and Spicy Sriracha Sauce"
                            className="btn-img-cashier-sauce"
                        />
                        <h1>SRS</h1>
                    </button>
                    <button
                        className="btn-cashier"
                        id="hbqS"
                        onClick={handleClick}
                    >
                        <img
                            src="/resource/Honey-Roasted-BBQ.png"
                            alt="Honey Roasted BBQ Sauce"
                            className="btn-img-cashier-sauce"
                        />
                        <h1>HBQS</h1>
                    </button>
                </div>
                <div>
                    {showPopUp && (
                        <CurOrderPopUp
                            curItems={curItems}
                            handleSubtract={handleSubtract}
                            menu={menu}
                        />
                    )}
                </div>
                <div className="edit-row-cashier">
                    <button
                        className="edit-button-cashier"
                        onClick={handlePopUp}
                    >
                        Edit
                    </button>

                    <button
                        className="edit-button-cashier bigger"
                        onClick={handleComplete}
                    >
                        <div>Checkout:</div>
                        <div className="price-cashier">
                            ${Math.abs(totalCost).toFixed(2)}
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
};

export default CashierSauce;
