import React, { useContext, useEffect, useState } from "react";
import { CashierHelper } from "../../hooks/CashierHelper";
import CashierHeader from "./CustomerHeader";
import "../../css/Customer.css";
import { CurOrderContext } from "../../hooks/CurOrderContext";
import CurOrderPopUp from "../../components/CurOrderPopUp";
import { HOST } from "../../host";

/**

Represents a component for ordering drinks as a customer.

Uses state to keep track of the menu items and the total cost of the order.
*/
const CustomerDrink = () => {
    /**

    State to hold the menu items retrieved from the server.
    @type {[Object, function]} An array containing the menu items and a function to update the state.
    */
    const [menu, setMenu] = useState("");
    const { totalCost, setTotalCost, curItems, setCurItems } =
        useContext(CurOrderContext);

    const { handleClick, handleComplete, handleNewOrder, handleSubtract } =
        CashierHelper(curItems, menu, totalCost, setCurItems, setTotalCost);

        /**
    State to determine whether to display the order confirmation popup.
    @type {[boolean, function]} An array containing a boolean value for the state and a function to update it.
    */
    const [showPopUp, setShowPopUp] = useState(false);

    const handlePopUp = () => {
        setShowPopUp(!showPopUp);
    };

    /**
     * Fetches menu data from the server and sets the menu state.
     */
    useEffect(() => {
        /** 
        @async function to fetch menu data from the server and update the state.
        */
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
    Function to get the price of a menu item by its ID.
    @param {string} menuItemId - The ID of the menu item to get the price of.
    @param {Object} menu - The object containing the menu items and their prices.
    @returns {number | null} The price of the menu item with the given ID, or null if it is not found in the menu object.
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
        <div>
            {/* <h1>{JSON.stringify(menu, null, 2)}</h1> */}
            <CashierHeader />
            <div className="c1">
                <br></br>
                <h1>Drinks</h1>

                <div className="button-row-customer">
                    <div className="items-customer">
                        <img
                            src="/resource/Drinks_Coca-cola.png"
                            alt="Soft Drink"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Soft Drink</h1>
                        <span className="subtext-customer">
                            M: ${getMenuPrice(9, menu)} | L: $
                            {getMenuPrice(43, menu)}
                        </span>
                        <div className="btn-holder-customer">
                            <button
                                className="add-button-customer"
                                type="submit"
                                name="completed"
                                value=""
                                id="softm"
                                onClick={handleClick}
                            ></button>
                            <button
                                className="add-button-customer"
                                type="submit"
                                name="completed"
                                value=""
                                id="softl"
                                onClick={handleClick}
                            ></button>
                        </div>
                    </div>
                    <div className="items-customer">
                        <img
                            src="/resource/lemonade.png"
                            alt="Chick-Fil-A Lemondade"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Chick-Fil-A Lemondade</h1>
                        <span className="subtext-customer">
                            M: ${getMenuPrice(15, menu)} | L: $
                            {getMenuPrice(42, menu)}
                        </span>
                        <div className="btn-holder-customer">
                            <button
                                className="add-button-customer"
                                type="submit"
                                name="completed"
                                value=""
                                id="lem"
                                onClick={handleClick}
                            ></button>
                            <button
                                className="add-button-customer"
                                type="submit"
                                name="completed"
                                value=""
                                id="leml"
                                onClick={handleClick}
                            ></button>
                        </div>
                    </div>
                    <div className="items-customer">
                        <img
                            src="/resource/tea.png"
                            alt="Freshly-Brewed Iced Tea"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Freshly-Brewed Iced Tea</h1>
                        <span className="subtext-customer">
                            M: ${getMenuPrice(40, menu)} | L: $
                            {getMenuPrice(41, menu)}
                        </span>
                        <div className="btn-holder-customer">
                            <button
                                className="add-button-customer"
                                type="submit"
                                name="completed"
                                value=""
                                id="team"
                                onClick={handleClick}
                            ></button>
                            <button
                                className="add-button-customer"
                                type="submit"
                                name="completed"
                                value=""
                                id="teal"
                                onClick={handleClick}
                            ></button>
                        </div>
                    </div>
                    <div className="items-customer">
                        <img
                            src="/resource/sunjoy.png"
                            alt="Chick-Fil-A Sunjoy"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Chick-Fil-A Sunjoy</h1>
                        <span className="subtext-customer">
                            M: ${getMenuPrice(44, menu)} | L: $
                            {getMenuPrice(45, menu)}
                        </span>
                        <div className="btn-holder-customer">
                            <button
                                className="add-button-customer"
                                type="submit"
                                name="completed"
                                value=""
                                id="sunjoym"
                                onClick={handleClick}
                            ></button>
                            <button
                                className="add-button-customer"
                                type="submit"
                                name="completed"
                                value=""
                                id="sunjoyl"
                                onClick={handleClick}
                            ></button>
                        </div>
                    </div>
                </div>

                <div className="button-row-customer">
                    <div className="items-customer">
                        <img
                            src="/resource/ChocolateMilkshake-1080.png"
                            alt="Hand-Spun Chocolate Milkshake"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Hand-Spun Chocolate Milkshake</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(20, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="milkchoc"
                            onClick={handleClick}
                        ></button>
                    </div>
                    <div className="items-customer">
                        <img
                            src="/resource/VanillaMilkshake-1080.png"
                            alt="Hand-Spun Vanilla Milkshake"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Hand-Spun Vanilla Milkshake</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(21, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="milkvan"
                            onClick={handleClick}
                        ></button>
                    </div>
                    <div className="items-customer">
                        <img
                            src="/resource/16oz_StrawberryMilkshake-1080.png"
                            alt="Hand-Spun Strawberry Milkshake"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Hand-Spun Strawberry Milkshake</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(22, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="milkstraw"
                            onClick={handleClick}
                        ></button>
                    </div>
                    <div className="items-customer">
                        <img
                            src="/resource/16oz_C&C_Milkshake-1080.png"
                            alt="Hand-Spun Cookies & Cream Milkshake"
                            className="item-image-customer"
                        />
                        <h1 className="txt">
                            Hand-Spun Cookies & Cream Milkshake
                        </h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(23, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="milkcook"
                            onClick={handleClick}
                        ></button>
                    </div>
                </div>

                <div className="button-row-customer">
                    <div className="items-customer">
                        <img
                            src="/resource/2022IcedCoffee.png"
                            alt="Cold Brew Iced Coffee"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Cold Brew Iced Coffee</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(46, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="cofice"
                            onClick={handleClick}
                        ></button>
                    </div>
                    <div className="items-customer">
                        <img
                            src="/resource/Frosted-Lemonade.png"
                            alt="Frosted Lemonade"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Frosted Lemonade</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(47, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="lemfrost"
                            onClick={handleClick}
                        ></button>
                    </div>
                    <div className="items-customer">
                        <img
                            src="/resource/Frosted-Coffee.png"
                            alt="Frosted Coffee"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Frosted Coffee</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(48, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="cofrost"
                            onClick={handleClick}
                        ></button>
                    </div>
                </div>

                <br></br>
                <h1>Treats</h1>
                <br></br>

                <div className="button-row-customer">
                    <div className="items-customer">
                        <img
                            src="/resource/CCCookie.png"
                            alt="Chocolate Chunk Cookie"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Chocolate Chunk Cookie</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(24, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="cookie"
                            onClick={handleClick}
                        ></button>
                    </div>
                    <div className="items-customer">
                        <img
                            src="/resource/Ice-Dream.png"
                            alt="Icedream Cone"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Icedream Cone</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(49, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="ic"
                            onClick={handleClick}
                        ></button>
                    </div>

                    <div className="items-customer">
                        <img
                            src="/resource/031717_FudgeChunkBrownie_PDP.png"
                            alt="Chocolate Fudge Cookie"
                            className="item-image-customer"
                        />
                        <h1 className="txt">Chocolate Fudge Cookie</h1>
                        <span className="subtext-customer">
                            ${getMenuPrice(50, menu)}
                        </span>
                        <button
                            className="add-button-customer"
                            type="submit"
                            name="completed"
                            value=""
                            id="brown"
                            onClick={handleClick}
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
        </div>
    );
};

export default CustomerDrink;
