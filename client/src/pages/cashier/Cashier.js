import React, { useEffect, useState, useContext } from "react";
import { CashierHelper } from "../../hooks/CashierHelper";
import CashierHeader from "./CashierHeader";
import "../../css/Cashier.css";
import { CurOrderContext } from "../../hooks/CurOrderContext";
import CurOrderPopUp from "../../components/CurOrderPopUp";

const Cashier = () => {
    const { totalCost, setTotalCost, curItems, setCurItems } =
        useContext(CurOrderContext);
    const [menu, setMenu] = useState("");
    const { handleClick, handleComplete, handleNewOrder, handleSubtract } = CashierHelper(
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
            const res = await fetch("http://localhost:3001/menu");
            const data = await res.json();

            const newObj = {};
            for (const key in data) {
                const { menu_item_id, menu_item_price, menu_item_name } = data[key];
                newObj[menu_item_id] = [menu_item_price, menu_item_name];
            }

            setMenu(newObj);
        };
        getMenu();
    }, []);


    return (
        <div>
            {/* <h1>{JSON.stringify(menu, null, 2)}</h1> */}
            <CashierHeader />

            <div className="button-row">
                <button className="btn" id="cs" onClick={handleClick}>
                    Chicken Sandwich
                </button>
                <button className="btn" id="csd" onClick={handleClick}>
                    Chicken Sandwich Deluxe
                </button>
                <button className="btn" id="scs" onClick={handleClick}>
                    Spicy Sandwich
                </button>
                <button className="btn" id="scsd" onClick={handleClick}>
                    Spicy Sandwich Deluxe
                </button>
            </div>

            <div className="button-row">
                <button className="btn" id="n8" onClick={handleClick}>
                    Nugget8
                </button>
                <button className="btn" id="n12" onClick={handleClick}>
                    Nugget12
                </button>
                <button className="btn" id="ng8" onClick={handleClick}>
                    Grilled8
                </button>
                <button className="btn" id="ng12" onClick={handleClick}>
                    Grilled12
                </button>
                <button className="btn" id="csg" onClick={handleClick}>
                    Sandwich Grilled
                </button>
                <button className="btn" id="csgc" onClick={handleClick}>
                    Grilled Club
                </button>
            </div>

            <div className="button-row">
                <button className="btn" id="ccwg" onClick={handleClick}>
                    Wrap Grilled
                </button>
                <button className="btn" id="sm" onClick={handleClick}>
                    Salad Market
                </button>
                <button className="btn" id="sss" onClick={handleClick}>
                    Salad Southwest
                </button>
                <button className="btn" id="sc" onClick={handleClick}>
                    Salad Cobb
                </button>
            </div>

            <div className="button-row">
                <button className="btn" id="cookie" onClick={handleClick}>
                    Cookie
                </button>
                <button className="btn" id="ic" onClick={handleClick}>
                    Icedream
                </button>
                <button className="btn" id="brown" onClick={handleClick}>
                    Brownie
                </button>
                <button className="btn" id="fc" onClick={handleClick}>
                    Fruit
                </button>
                <button className="btn" id="side" onClick={handleClick}>
                    Side
                </button>
            </div>

            <div className="button-row">
                <button className="btn" id="wfm" onClick={handleClick}>
                    FriesM
                </button>
                <button className="btn" id="wfl" onClick={handleClick}>
                    FriesL
                </button>
                <button className="btn" id="wc" onClick={handleClick}>
                    Chip
                </button>
            </div>
            <div>{showPopUp && <CurOrderPopUp curItems={curItems} handleSubtract={handleSubtract} menu={menu} />}</div>

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

export default Cashier;
