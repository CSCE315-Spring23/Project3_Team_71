import React, { useEffect, useState, useContext } from "react";
import { CashierHelper } from "../../hooks/CashierHelper";
import "../../css/Customer.css";
import { CurOrderContext } from "../../hooks/CurOrderContext";
import CustomerHeader from "./CustomerHeader";

import AdPopUp from "../../components/AdPopUp";
import WeatherPop from "../../components/weatherPop";
import CurOrderPopUp from "../../components/CurOrderPopUp";
import { HOST } from "../../host";

const apiKey = "60ea3e0d4ae18a97f73bdcd78fc41e8d";

/**

A functional component that represents a customer page in a restaurant.
@returns {JSX.Element} The JSX representation of the customer component.
*/
const Customer = () => {
    const [temp, setTemp] = useState("");
    const { totalCost, setTotalCost, curItems, setCurItems } =
        useContext(CurOrderContext);
    const [menu, setMenu] = useState("");

    const [stringID, setStringID] = useState("");
    const { handleClick, handleComplete, handleSubtract, handleClickExtra } =
        CashierHelper(curItems, menu, totalCost, setCurItems, setTotalCost);

    const [showPopUp, setShowPopUp] = useState(false);

    const [showAdPopUp, setAdPopUp] = useState(false);

    const [showAd, setAd] = useState(true);

    const [showWeatherPop, setWeatherPop] = useState(false);

    /**
Handles click event for popup button
@param {Event} event - The event object
*/
    const handlePopUpClick = (event) => {
        const bID = event.target.closest("button").id;
        console.log(bID);
        setStringID(bID);
        handlePopUpState();
    };

    /**
    Handles weather popup based on current temperature
    */
    const handleWeatherPopup = () => {
        if (temp > 53) {
            console.log("temper: ", temp);
            handleWeatherPopupState();
        } else {
            handleComplete();
        }
    };

    /**
Sets the weather popup state to true.
*/
    const handleWeatherPopupState = () => {
        setWeatherPop(true);
    };

    /**

    Handles the popup when the user chooses not to watch an advertisement by setting the advertisement popup state to true and the advertisement state to false.
    */
    const handlePopupNoAd = () => {
        setAdPopUp(true);
        setAd(false);
    };

    /**

Handles the popup state when the user clicks a button by setting the advertisement popup state to true and the advertisement state to true.
*/
    const handlePopUpState = () => {
        setAdPopUp(true);
        setAd(true);
    };

    /**

Toggles the show popup state to show or hide the popup.
*/
    const handlePopUp = () => {
        setShowPopUp(!showPopUp);
    };

    /**

Fetches weather data from OpenWeatherMap API and sets the temperature state.
Fetches the menu from the server and sets the menu state.
@async
@function useEffect
@param {string} apiKey - API key for OpenWeatherMap API.
@param {string} HOST - URL for the server to fetch menu from.
@param {function} setTemp - State setter function for temperature.
@param {function} setMenu - State setter function for menu.
@returns {void}
*/
    useEffect(() => {
        const weather = async () => {
            console.log("apikey: ", apiKey);
            await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=30.621&lon=-96.34&units=imperial&appid=${apiKey}`
            )
                .then((res) => res.json())
                .then((result) => {
                    setTemp(result.main.temp);
                });
        };

        
        const getMenu = async () => {
            const res = await fetch(`${HOST}/menu`);
            const data = await res.json();

            console.log(res);
            const newObj = {};
            for (const key in data) {
                const { menu_item_id, menu_item_price, menu_item_name } =
                    data[key];
                newObj[menu_item_id] = [menu_item_price, menu_item_name];
            }

            setMenu(newObj);
        };
        getMenu();
        weather();
    }, []);

    /**
        Gets the price of a menu item given its ID.
        @function getMenuPrice
        @param {number} menuItemId - ID of the menu item to get the price for.
        @param {object} menu - Object containing menu items and their prices.
        @returns {number|null} The price of the menu item or null if it doesn't exist in the menu object.
        */
    const getMenuPrice = (menuItemId, menu) => {
        if (menu.hasOwnProperty(menuItemId)) {
            return menu[menuItemId][0];
        }
        return null;
    };

    useEffect(() => {
        console.log(curItems);
    }, [curItems]);

    return (
        <>
            <CustomerHeader />
            <div className="c1">
                <br></br>

                <h1>Entrees</h1>

                <div className="button-row-customer">
                    <div className="items-customer">
                        <img
                            src="/resource/CFASandwich.png"
                            alt="Chick-Fil-A Sandwich"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Chick-Fil-A Sandwich</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(1, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            onClick={handlePopUpClick}
                            id="cs"
                        ></button>
                    </div>
                    <div className="items-customer">
                        <img
                            src="/resource/DeluxeSandwich.png"
                            alt="Chick-Fil-A Nuggets"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Chicken Sandwich Deluxe</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(2, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="csd"
                            onClick={handlePopUpClick}
                        ></button>
                    </div>
                    <div className="items-customer">
                        <img
                            src="/resource/CFASpicySandwich.png"
                            alt="Chick-Fil-A Nuggets"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Spicy Sandwich</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(3, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="css"
                            onClick={handlePopUpClick}
                        ></button>
                    </div>
                    <div className="items-customer">
                        <img
                            src="/resource/Spicy-Deluxe-Sandwich.png"
                            alt="Chick-Fil-A Nuggets"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Spicy Sandwich Deluxe</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(4, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="scsd"
                            onClick={handlePopUpClick}
                        ></button>
                    </div>
                </div>

                <div className="button-row-customer">
                    <div className="items-customer">
                        <img
                            src="/resource/nuggets_8ct.png"
                            alt="Chick-Fil-A Nuggets"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Chick-Fil-A Nuggets</h1>
                        <span className="subtext-customer">
                            8ct. ${getMenuPrice(6, menu)} | 12ct. $
                            {getMenuPrice(7, menu)}
                        </span>
                        <div className="btn-holder-customer">
                            <button
                                className="add-button-customer"
                                type="submit"
                                name="completed"
                                value=""
                                id="8n"
                                onClick={handlePopUpClick}
                            ></button>
                            <button
                                className="add-button-customer"
                                type="submit"
                                name="completed"
                                value=""
                                id="12n"
                                onClick={handlePopUpClick}
                            ></button>
                        </div>
                    </div>
                    <div className="items-customer">
                        <img
                            src="/resource/grilledNuggets_8ct.png"
                            alt="Chick-Fil-A Nuggets"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Chick-Fil-A Nuggets</h1>
                        <span className="subtext-customer">
                            8ct. ${getMenuPrice(16, menu)} | 12ct. $
                            {getMenuPrice(17, menu)}
                        </span>
                        <div className="btn-holder-customer">
                            <button
                                className="add-button-customer"
                                type="submit"
                                name="completed"
                                value=""
                                id="8ng"
                                onClick={handlePopUpClick}
                            ></button>
                            <button
                                className="add-button-customer"
                                type="submit"
                                name="completed"
                                value=""
                                id="12ng"
                                onClick={handlePopUpClick}
                            ></button>
                        </div>
                    </div>
                    <div className="items-customer">
                        <img
                            src="/resource/Grilled-Deluxe-Sandwich_1085.png"
                            alt="Chick-Fil-A Nuggets"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Sandwich Grilled</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(18, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="csg"
                            onClick={handlePopUpClick}
                        ></button>
                    </div>
                    <div className="items-customer">
                        <img
                            src="/resource/grilledClub_colbyJack.png"
                            alt="Chick-Fil-A Nuggets"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Grilled Club</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(34, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="csgc"
                            onClick={handlePopUpClick}
                        ></button>
                    </div>
                </div>

                <div className="button-row-customer">
                    <div className="items-customer">
                        <img
                            src="/resource/wrap.png"
                            alt="Grilled Chicken Cool Wrap"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Grilled Chicken Cool Wrap</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(37, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="ccwg"
                            onClick={handlePopUpClick}
                        ></button>
                    </div>
                    <div className="items-customer">
                        <img
                            src="/resource/marketSalad.png"
                            alt="Market Salad"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Market Salad</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(19, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="sm"
                            onClick={handleClick}
                        ></button>
                    </div>
                    <div className="items-customer">
                        <img
                            src="/resource/sswSalad.png"
                            alt="Spicy Southwest Salad"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Spicy Southwest Salad</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(39, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="sss"
                            onClick={handleClick}
                        ></button>
                    </div>
                    <div className="items-customer">
                        <img
                            src="/resource/cobbSalad.png"
                            alt="Cobb Salad"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Cobb Salad</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(38, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="sc"
                            onClick={handleClick}
                        ></button>
                    </div>
                </div>

                <h1>Sides</h1>

                <div className="button-row-customer">
                    <div className="items-customer">
                        <img
                            src="/resource/Fruit-Cup.png"
                            alt="Fruit Cup"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Fruit Cup</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(54, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="fc"
                            onClick={handleClick}
                        ></button>
                    </div>
                    <div className="items-customer">
                        <img
                            src="/resource/sideSalad.png"
                            alt="Side Salad"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Side Salad</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(55, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="side"
                            onClick={handleClick}
                        ></button>
                    </div>
                    <div className="items-customer">
                        <img
                            src="/resource/waffleFry.png"
                            alt="Waffle Fries"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Waffle Fries</h1>
                        <span className="subtext-customer">
                            M: ${getMenuPrice(12, menu)} | L: $
                            {getMenuPrice(52, menu)}
                        </span>
                        <div className="btn-holder-customer">
                            <button
                                className="add-button-customer"
                                type="submit"
                                name="completed"
                                value=""
                                id="wfm"
                                onClick={handleClick}
                            ></button>
                            <button
                                className="add-button-customer"
                                type="submit"
                                name="completed"
                                value=""
                                id="wfl"
                                onClick={handleClick}
                            ></button>
                        </div>
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
                    <div className="items-customer">
                        <img
                            src="/resource/chips.png"
                            alt="Chips"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Chips</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(53, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="wc"
                            onClick={handleClick}
                        ></button>
                    </div>
                </div>
            </div>

            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>

            <div className="edit-row-customer">
                <button className="edit-button-customer" onClick={handlePopUp}>
                    Edit
                </button>

                <button
                    className="edit-button-customer bigger"
                    onClick={handleWeatherPopup}
                >
                    <div>Checkout:</div>
                    <div className="price-customer">
                        ${Math.abs(totalCost).toFixed(2)}
                    </div>
                </button>
            </div>
            <div>
                {showWeatherPop && (
                    <WeatherPop
                        stringID={stringID}
                        handleClick={handleClick}
                        setWeatherPop={setWeatherPop}
                        menu={menu}
                        handleClickExtra={handleClickExtra}
                        handleComplete={handleComplete}
                    />
                )}
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
        </>
    );
};
export default Customer;
