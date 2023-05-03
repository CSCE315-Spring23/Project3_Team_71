import React, { useContext, useEffect, useState } from "react";
import { CashierHelper } from "../../hooks/CashierHelper";
import CashierHeader from "./CustomerHeader";
import "../../css/Customer.css";
import { CurOrderContext } from "../../hooks/CurOrderContext";
import CurOrderPopUp from "../../components/CurOrderPopUp";
import { HOST } from "../../host";

function CustomerNew() {

    /**
     * State hook to store the menu object.
     * @type {object}
     */
    const [menu, setMenu] = useState({});

    /**
     * State hook to store the seasonal menu array.
     * @type {Array}
     */
    const [seasonMenu, setSeasonMenu] = useState([]);

    /**
     * Context hook to access current order context data.
     * @type {object}
     */
    const { totalCost, setTotalCost, curItems, setCurItems } =
        useContext(CurOrderContext);

    /**
     * Object with functions to handle Cashier actions.
     * @type {object}
     */
    const { handleClickExtra, handleComplete, handleNewOrder, handleSubtract } =
        CashierHelper(curItems, menu, totalCost, setCurItems, setTotalCost);

    /**
     * State hook to toggle the display of a pop-up.
     * @type {boolean}
     */
    const [showPopUp, setShowPopUp] = useState(false);

    /**
     * Function to toggle the pop-up display.
     * 
     * @returns {void}
     */
    const handlePopUp = () => {
        setShowPopUp(!showPopUp);
    };

    
    /**
     * Effect hook to fetch the menu data from the server and update the menu state.
     * 
     * @returns {void}
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

    /**
    * Effect hook to update the seasonal menu when the menu state changes.
    * 
    * @returns {void}
    */
    useEffect(() => {
        setSeasonMenu(
            Object.keys(menu)
                .slice(57)
                .map((key) => ({
                    menuID: key,
                    price: menu[key][0],
                    name: menu[key][1],
                }))
        );

        console.log(menu);
    }, [menu]);

    /**
    * Effect hook to log the menu state when it changes.
    * 
    * @returns {void}
    */
    useEffect(() => {
        console.log(menu);
    }, [menu]);

    /**
     * Effect hook to log the current order context data when it changes.
     * 
     * @returns {void}
     */
    useEffect(() => {
        console.log(curItems);
    }, [curItems]);

    return (
        <>
            <CashierHeader />
            <div className="new-btn-container">
                {seasonMenu.map((button, index) => (
                    <div className="new-btn-div">
                        <button
                            className="btn-new"
                            key={index}
                            id={button.menuID}
                            onClick={(event) => handleClickExtra(event)}
                        >
                            {button.name}
                        </button>
                    </div>
                ))}
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
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>

            <div className="edit-row-customer">
                <button className="edit-button-customer" onClick={handlePopUp}>
                    Edit
                </button>
                <button
                    className="edit-button-customer bigger"
                    onClick={handleComplete}
                >
                    <div>Checkout:</div>
                    <div className="price-customer">
                        ${Math.abs(totalCost).toFixed(2)}
                    </div>
                </button>
            </div>
        </>
    );
}

export default CustomerNew;
