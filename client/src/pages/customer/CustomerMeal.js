import React, { useContext, useEffect, useState } from "react";
import { CashierHelper } from "../../hooks/CashierHelper";
import CashierHeader from "./CustomerHeader";
import "../../css/Customer.css";
import { CurOrderContext } from "../../hooks/CurOrderContext";
import CurOrderPopUp from "../../components/CurOrderPopUp";
import { HOST } from "../../host";
import AdPopUp from "../../components/AdPopUp";

const CustomerMeal = () => {
    /**
     * State hook that manages the menu object.
     *
     * @type {Object}
     */
    const [menu, setMenu] = useState("");

    /**
     * Context hook that provides access to the current order information.
     *
     * @type {Object}
     */
    const { totalCost, setTotalCost, curItems, setCurItems } =
        useContext(CurOrderContext);
    /**
     * State hook that manages the string ID used for the current order.
     *
     * @type {string}
     */
    const [stringID, setStringID] = useState("");

    /**
     * Custom hook that returns functions for handling the current order and updating the menu.
     *
     * @type {Object}
     */
    const {
        handleClick,
        handleComplete,
        handleNewOrder,
        handleSubtract,
        handleClickExtra,
    } = CashierHelper(curItems, menu, totalCost, setCurItems, setTotalCost);

    /**
     * State hook that manages the visibility of the order confirmation popup.
     *
     * @type {boolean}
     */
    const [showPopUp, setShowPopUp] = useState(false);

    /**
     * State hook that manages the visibility of the advertisement popup.
     *
     * @type {boolean}
     */
    const [showAdPopUp, setAdPopUp] = useState(false);

    /**
     * State hook that manages the visibility of the advertisement.
     *
     * @type {boolean}
     */
    const [showAd, setAd] = useState(true);

    /**
     * Event handler function for the "No, thanks" button in the advertisement popup.
     *
     * @param {Event} event - The click event.
     * @returns {void}
     */
    const handlePopupNoAd = (event) => {
        setAdPopUp(true);
        setAd(false);
        handleClick(event);
    };

    /**
     * Event handler function for the order confirmation popup.
     *
     * @returns {void}
     */
    const handlePopUp = () => {
        setShowPopUp(!showPopUp);
    };

    /**
     * Effect hook that retrieves the menu data from the server and updates the menu state hook.
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
    *
    * Returns the price of a menu item based on its ID
    * @param {number} menuItemId - The ID of the menu item to retrieve the price for
    * @param {Object} menu - The menu object containing all menu items with their respective prices
    * @returns {number|null} The price of the menu item if it exists, or null if it does not
    */
    const getMenuPrice = (menuItemId, menu) => {
        if (menu.hasOwnProperty(menuItemId)) {
            return menu[menuItemId][0];
        }
        return null;
    };

    /**
    *
    * Logs the current items in the order whenever there is a change to curItems
    */
    useEffect(() => {
        console.log(curItems);
    }, [curItems]);

    return (
        <div>
            {/* <h1>{JSON.stringify(menu, null, 2)}</h1> */}
            <CashierHeader />
            <div className="c1">
                <br></br>
                <h1>Meals</h1>
                <div className="button-row-customer">
                    <div className="items-customer">
                        <img
                            src="/resource/CFASandwich.png"
                            alt="Chick-Fil-A Sandwich Meal"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Chick-Fil-A Sandwich Meal</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(25, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="csmeal"
                            onClick={handlePopupNoAd}
                        ></button>
                    </div>
                    <div className="items-customer">
                        <img
                            src="/resource/DeluxeSandwich.png"
                            alt="Chick-Fil-A Deluxe Meal"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Chick-Fil-A Deluxe Meal</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(26, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="csdmeal"
                            onClick={handlePopupNoAd}
                        ></button>
                    </div>
                    <div className="items-customer">
                        <img
                            src="/resource/CFASpicySandwich.png"
                            alt="Spicy Chicken Meal"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Spicy Chicken Sandwich Meal</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(27, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="cssmeal"
                            onClick={handlePopupNoAd}
                        ></button>
                    </div>
                    <div className="items-customer">
                        <img
                            src="/resource/Spicy-Deluxe-Sandwich.png"
                            alt="Spicy Deluxe Sandwich Meal"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Spicy Deluxe Sandwich Meal</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(28, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="scsdmeal"
                            onClick={handlePopupNoAd}
                        ></button>
                    </div>
                </div>
                <div className="button-row-customer">
                    <div className="items-customer">
                        <img
                            src="/resource/nuggets_8ct.png"
                            alt="Chick-Fil-A Nuggets Meal"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Chick-Fil-A Nuggets Meal</h1>
                        <span className="subtext-customer">
                            8ct. meal: ${getMenuPrice(30, menu)} | 12ct. meal: $
                            {getMenuPrice(31, menu)}{" "}
                        </span>
                        <div className="btn-holder-customer">
                            <button
                                className="add-button-customer"
                                type="submit"
                                name="completed"
                                value=""
                                id="8nmeal"
                                onClick={handlePopupNoAd}
                            ></button>
                            <button
                                className="add-button-customer"
                                type="submit"
                                name="completed"
                                value=""
                                id="12nmeal"
                                onClick={handlePopupNoAd}
                            ></button>
                        </div>
                    </div>
                    <div className="items-customer">
                        <img
                            src="/resource/grilledNuggets_8ct.png"
                            alt="Grilled Nuggets Meal"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Grilled Nuggets Meal</h1>
                        <span className="subtext-customer">
                            8ct. meal: ${getMenuPrice(32, menu)} | 12ct. meal: $
                            {getMenuPrice(33, menu)}
                        </span>
                        <div className="btn-holder-customer">
                            <button
                                className="add-button-customer"
                                type="submit"
                                name="completed"
                                value=""
                                id="8ngmeal"
                                onClick={handlePopupNoAd}
                            ></button>
                            <button
                                className="add-button-customer"
                                type="submit"
                                name="completed"
                                value=""
                                id="12ngmeal"
                                onClick={handlePopupNoAd}
                            ></button>
                        </div>
                    </div>
                    <div className="items-customer">
                        <img
                            src="/resource/Grilled-Deluxe-Sandwich_1085.png"
                            alt="Grilled Chicken Sandwich Meal"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Grilled Chicken Sandwich Meal</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(29, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="csgmeal"
                            onClick={handleClick}
                        ></button>
                    </div>

                    <div className="items-customer">
                        <img
                            src="/resource/grilledClub_colbyJack.png"
                            alt="Grilled Chicken Club Meal"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Grilled Chicken Club Meal</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(35, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="csgcmeal"
                            onClick={handlePopupNoAd}
                        ></button>
                    </div>
                </div>
                <div className="button-row-customer">
                    <div className="items-customer">
                        <img
                            src="/resource/wrap.png"
                            alt="Grilled Chicken Cool Wrap Meal"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Grilled Chicken Cool Wrap Meal</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(36, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="ccwgmeal"
                            onClick={handlePopupNoAd}
                        ></button>
                    </div>
                </div>
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <div>
                {showPopUp && (
                    <CurOrderPopUp
                        curItems={curItems}
                        handleSubtract={handleSubtract}
                        menu={menu}
                    />
                )}
            </div>
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
            <div>
                {showAdPopUp && (
                    <AdPopUp
                        stringID={stringID}
                        handleClick={handleClick}
                        setAdPopUp={setAdPopUp}
                        menu={menu}
                        handleClickExtra={handleClickExtra}
                        showAd={showAd}
                    />
                )}
            </div>
        </div>
    );
};

export default CustomerMeal;
