import React, { useEffect, useState, useContext } from "react";
import { CashierHelper } from "../../hooks/CashierHelper";
import CashierHeader from "./CashierHeader";
import "../../css/Cashier.css";
import { CurOrderContext } from "../../hooks/CurOrderContext";
import CurOrderPopUp from "../../components/CurOrderPopUp";
import { HOST } from "../../host";

const Cashier = () => {
    const { totalCost, setTotalCost, curItems, setCurItems } =
        useContext(CurOrderContext);
    const [menu, setMenu] = useState("");
    const { handleClick, handleComplete, handleSubtract } = CashierHelper(
        curItems,
        menu,
        totalCost,
        setCurItems,
        setTotalCost
    );
    const [showPopUp, setShowPopUp] = useState(false);

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

    return (
        <div className="btn-wrap">
            <CashierHeader />

            <div className="button-row-cashier">
                <button className="btn-cashier" id="cs" onClick={handleClick}>
                    <img
                        src="/resource/CFASandwich.png"
                        alt="Chick-Fil-A Sandwich"
                        className="btn-img-cashier"
                    />
                    <h1>CS</h1>
                </button>
                <button className="btn-cashier" id="csd" onClick={handleClick}>
                    <img
                        src="/resource/DeluxeSandwich.png"
                        alt="Chick-Fil-A Deluxe"
                        className="btn-img-cashier"
                    />
                    <h1>CSD</h1>
                </button>
                <button className="btn-cashier" id="css" onClick={handleClick}>
                    <img
                        src="/resource/CFASpicySandwich.png"
                        alt="Chick-Fil-A Nuggets"
                        className="btn-img-cashier"
                    />
                    <h1>SS</h1>
                </button>
                <button className="btn-cashier" id="scsd" onClick={handleClick}>
                    <img
                        src="/resource/Spicy-Deluxe-Sandwich.png"
                        alt="Chick-Fil-A Nuggets"
                        className="btn-img-cashier"
                    />
                    <h1>SSD</h1>
                </button>
                <button className="btn-cashier" id="8n" onClick={handleClick}>
                    <img
                        src="/resource/nuggets_8ct.png"
                        alt="Chick-Fil-A Nuggets"
                        className="btn-img-cashier"
                    />
                    <h1>N8</h1>
                </button>
            </div>

            <div className="button-row-cashier">
                <button className="btn-cashier" id="12n" onClick={handleClick}>
                    <img
                        src="/resource/nuggets_8ct.png"
                        alt="Chick-Fil-A Nuggets"
                        className="btn-img-cashier"
                    />
                    <h1>N12</h1>
                </button>
                <button className="btn-cashier" id="8ng" onClick={handleClick}>
                    <img
                        src="/resource/grilledNuggets_8ct.png"
                        alt="Chick-Fil-A Nuggets"
                        className="btn-img-cashier"
                    />
                    <h1>G8</h1>
                </button>
                <button className="btn-cashier" id="12ng" onClick={handleClick}>
                    <img
                        src="/resource/grilledNuggets_8ct.png"
                        alt="Chick-Fil-A Nuggets"
                        className="btn-img-cashier"
                    />
                    <h1>G12</h1>
                </button>
                <button className="btn-cashier" id="csg" onClick={handleClick}>
                    <img
                        src="/resource/Grilled-Deluxe-Sandwich_1085.png"
                        alt="Chick-Fil-A Nuggets"
                        className="btn-img-cashier"
                    />

                    <h1>GS</h1>
                </button>
                <button className="btn-cashier" id="csgc" onClick={handleClick}>
                    <img
                        src="/resource/grilledClub_colbyJack.png"
                        alt="Chick-Fil-A Nuggets"
                        className="btn-img-cashier"
                    />
                    <h1>GC</h1>
                </button>
            </div>

            <div className="button-row-cashier">
                <button className="btn-cashier" id="ccwg" onClick={handleClick}>
                    <img
                        src="/resource/wrap.png"
                        alt="Grilled Chicken Cool Wrap"
                        className="btn-img-cashier"
                    />
                    <h1>WG</h1>
                </button>
                <button className="btn-cashier" id="sm" onClick={handleClick}>
                    <img
                        src="/resource/marketSalad.png"
                        alt="Market Salad"
                        className="btn-img-cashier"
                    />
                    <h1>SM</h1>
                </button>
                <button className="btn-cashier" id="sss" onClick={handleClick}>
                    <img
                        src="/resource/sswSalad.png"
                        alt="Spicy Southwest Salad"
                        className="btn-img-cashier"
                    />
                    <h1>SS</h1>
                </button>
                <button className="btn-cashier" id="sc" onClick={handleClick}>
                    <img
                        src="/resource/cobbSalad.png"
                        alt="Cobb Salad"
                        className="btn-img-cashier"
                    />
                    <h1>SC</h1>
                </button>
                <button className="btn-cashier" id="side" onClick={handleClick}>
                    <img
                        src="/resource/sideSalad.png"
                        alt="Side Salad"
                        className="btn-img-cashier"
                    />
                    <h1>Salad</h1>
                </button>
            </div>

            <div className="button-row-cashier">
                <button className="btn-cashier" id="fc" onClick={handleClick}>
                    <img
                        src="/resource/Fruit-Cup.png"
                        alt="Fruit Cup"
                        className="btn-img-cashier"
                    />
                    <h1>Fruit</h1>
                </button>

                <button className="btn-cashier" id="wfm" onClick={handleClick}>
                    <img
                        src="/resource/waffleFry.png"
                        alt="Waffle Fries"
                        className="btn-img-cashier"
                    />
                    <h1>M</h1>
                </button>
                <button className="btn-cashier" id="wfl" onClick={handleClick}>
                    <img
                        src="/resource/waffleFry.png"
                        alt="Waffle Fries"
                        className="btn-img-cashier"
                    />
                    <h1>L</h1>
                </button>
                <button className="btn-cashier" id="wc" onClick={handleClick}>
                    <img
                        src="/resource/chips.png"
                        alt="Chips"
                        className="btn-img-cashier"
                    />
                    <h1>Chip</h1>
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
                <button className="edit-button-cashier" onClick={handlePopUp}>
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
    );
};

export default Cashier;
