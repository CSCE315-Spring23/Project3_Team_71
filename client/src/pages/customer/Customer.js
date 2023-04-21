import React, { useEffect, useState, useContext } from "react";
import { CashierHelper } from "../../hooks/CashierHelper";
import "../../css/Customer.css";
import { CurOrderContext } from "../../hooks/CurOrderContext";
import CustomerHeader from "./CustomerHeader";
import CurOrderPopUp from "../../components/CurOrderPopUp";

const Customer = () => {
    const { totalCost, setTotalCost, curItems, setCurItems } =
        useContext(CurOrderContext);
    const [menu, setMenu] = useState("");
    const { handleClick, handleComplete, handleNewOrder, handleSubtract } =
        CashierHelper(curItems, menu, totalCost, setCurItems, setTotalCost);

    const [showPopUp, setShowPopUp] = useState(false);

    const handlePopUp = () => {
        setShowPopUp(!showPopUp);
    };
    useEffect(() => {

        const getMenu = async () => {
            const res = await fetch("http://localhost:3001/menu");
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
                            onClick={handleClick}
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
                            onClick={handleClick}
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
                            id="scs"
                            onClick={handleClick}
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
                            onClick={handleClick}
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
                                id="n8"
                                onClick={handleClick}
                            ></button>
                            <button
                                className="add-button-customer"
                                type="submit"
                                name="completed"
                                value=""
                                id="n12"
                                onClick={handleClick}
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
                                id="ng8"
                                onClick={handleClick}
                            ></button>
                            <button
                                className="add-button-customer"
                                type="submit"
                                name="completed"
                                value=""
                                id="ng12"
                                onClick={handleClick}
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
                            onClick={handleClick}
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
                            onClick={handleClick}
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
                            onClick={handleClick}
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

            <button className="complete-customer" onClick={handleComplete}>
                Finish Order
            </button>

            <button className="edit-button-customer" onClick={handlePopUp}>
                CurOrder
            </button>

            <button className="new-customer" onClick={handleNewOrder}>
                New Order
            </button>

            <div className="price-customer">Price: ${totalCost.toFixed(2)}</div>
        </>
    );
};
export default Customer;
