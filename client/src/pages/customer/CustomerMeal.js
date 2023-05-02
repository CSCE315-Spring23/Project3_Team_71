import React, { useContext, useEffect, useState } from "react";
import { CashierHelper } from "../../hooks/CashierHelper";
import CashierHeader from "./CustomerHeader";
import "../../css/Customer.css";
import { CurOrderContext } from "../../hooks/CurOrderContext";
import CurOrderPopUp from "../../components/CurOrderPopUp";
import { HOST } from "../../host";
import AdPopUp from "../../components/AdPopUp";

const CustomerMeal = () => {
    const [menu, setMenu] = useState("");
    const { totalCost, setTotalCost, curItems, setCurItems } =
        useContext(CurOrderContext);

    const [stringID, setStringID] = useState("");

    const {
        handleClick,
        handleComplete,
        handleNewOrder,
        handleSubtract,
        handleClickExtra,
    } = CashierHelper(curItems, menu, totalCost, setCurItems, setTotalCost);

    const [showPopUp, setShowPopUp] = useState(false);

    const [showAdPopUp, setAdPopUp] = useState(false);

    const [showAd, setAd] = useState(true);

    const handlePopupNoAd = (event) => {
        setAdPopUp(true);
        setAd(false);
        handleClick(event);
    };

    const handlePopUp = () => {
        setShowPopUp(!showPopUp);
    };

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
