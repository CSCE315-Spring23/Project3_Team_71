import React, { useContext, useEffect, useState } from "react";
import { CashierHelper } from "../../hooks/CashierHelper";
import CashierHeader from "./CashierHeader";
import "../../css/Cashier.css";
import { CurOrderContext } from "../../hooks/CurOrderContext";
import CurOrderPopUp from "../../components/CurOrderPopUp";

const CashierMeal = () => {
    const [menu, setMenu] = useState("");
    const { totalCost, setTotalCost, curItems, setCurItems } =
        useContext(CurOrderContext);

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

    useEffect(() => {
        console.log(curItems);
    }, [curItems]);
    return (
        <div>
            <CashierHeader />

            <div className="button-row-cashier">
                <button
                    className="btn-cashier"
                    id="8nmeal"
                    onClick={handleClick}
                >
                    <img
                        src="/resource/nuggets_8ct.png"
                        alt="Chick-Fil-A Nuggets"
                        className="btn-img-cashier"
                    />
                    <h1>NM8</h1>
                </button>
                <button
                    className="btn-cashier"
                    id="12nmeal"
                    onClick={handleClick}
                >
                    <img
                        src="/resource/nuggets_8ct.png"
                        alt="Chick-Fil-A Nuggets"
                        className="btn-img-cashier"
                    />
                    <h1>NM12</h1>
                </button>
                <button
                    className="btn-cashier"
                    id="8ngmeal"
                    onClick={handleClick}
                >
                    <img
                        src="/resource/grilledNuggets_8ct.png"
                        alt="Chick-Fil-A Nuggets"
                        className="btn-img-cashier"
                    />
                    <h1>GM8</h1>
                </button>
                <button
                    className="btn-cashier"
                    id="12ngmeal"
                    onClick={handleClick}
                >
                    <img
                        src="/resource/grilledNuggets_8ct.png"
                        alt="Chick-Fil-A Nuggets"
                        className="btn-img-cashier"
                    />
                    <h1>GM12</h1>
                </button>
                <button
                    className="btn-cashier"
                    id="csmeal"
                    onClick={handleClick}
                >
                    <img
                        src="/resource/CFASandwich.png"
                        alt="Chick-Fil-A Sandwich"
                        className="btn-img-cashier"
                    />
                    <h1>SM</h1>
                </button>
            </div>

            <div className="button-row-cashier">
                <button
                    className="btn-cashier"
                    id="csdmeal"
                    onClick={handleClick}
                >
                    <img
                        src="/resource/DeluxeSandwich.png"
                        alt="Chick-Fil-A Deluxe"
                        className="btn-img-cashier"
                    />
                    <h1>SDM</h1>
                </button>
                <button
                    className="btn-cashier"
                    id="cssmeal"
                    onClick={handleClick}
                >
                    <img
                        src="/resource/CFASpicySandwich.png"
                        alt="Chick-Fil-A Nuggets"
                        className="btn-img-cashier"
                    />
                    <h1>SSM</h1>
                </button>
                <button
                    className="btn-cashier"
                    id="cssdmeal"
                    onClick={handleClick}
                >
                    <img
                        src="/resource/Spicy-Deluxe-Sandwich.png"
                        alt="Chick-Fil-A Nuggets"
                        className="btn-img-cashier"
                    />
                    <h1>SSDM</h1>
                </button>
                <button
                    className="btn-cashier"
                    id="csgmeal"
                    onClick={handleClick}
                >
                    <img
                        src="/resource/Grilled-Deluxe-Sandwich_1085.png"
                        alt="Chick-Fil-A Nuggets"
                        className="btn-img-cashier"
                    />
                    <h1>GSM</h1>
                </button>
                <button
                    className="btn-cashier"
                    id="csgdmeal"
                    onClick={handleClick}
                >
                    <img
                        src="/resource/grilledClub_colbyJack.png"
                        alt="Chick-Fil-A Nuggets"
                        className="btn-img-cashier"
                    />
                    <h1>GSMD</h1>
                </button>
            </div>

            <div className="button-row-cashier">
                <button
                    className="btn-cashier"
                    id="wrpmeal"
                    onClick={handleClick}
                >
                    <img
                        src="/resource/wrap.png"
                        alt="Grilled Chicken Cool Wrap"
                        className="btn-img-cashier"
                    />
                    <h1>WM</h1>
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

            <button className="complete" onClick={handleComplete}>
                Finish Order
            </button>

            <button className="popup" onClick={handlePopUp}>
                CurOrder
            </button>

            <button className="new" onClick={handleNewOrder}>
                New Order
            </button>

            <div className="price">Price: ${totalCost.toFixed(2)}</div>
        </div>
    );
};

export default CashierMeal;
