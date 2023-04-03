import React, { useEffect, useState, useContext } from "react";
import { CashierHelper } from "../../hooks/CashierHelper";
import CashierHeader from "./CashierHeader";
import "../../css/Cashier.css";
import { CurOrderContext } from "../../hooks/CurOrderContext";

const Cashier = () => {

    const { totalCost, setTotalCost, curItems, setCurItems } = useContext(CurOrderContext);
    const [menu, setMenu] = useState("");
    const { handleClick, handleComplete, handleNewOrder } = CashierHelper(curItems, menu, totalCost, setCurItems, setTotalCost);

    useEffect(() => {
        const getMenu = async () => {
            const res = await fetch("http://localhost:3001/menu");
            const data = await res.json();

            const newObj = {};
            for (const key in data) {
                const { menu_item_id, menu_item_price } = data[key];
                newObj[menu_item_id] = menu_item_price;
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
            {/* <h1>{JSON.stringify(menu, null, 2)}</h1> */}
            <CashierHeader />

            <div className="button-row">
                <button id="cs" onClick={handleClick}>Chicken Sandwich</button>
                <button id="csd" onClick={handleClick}>Chicken Sandwich Deluxe</button>
                <button id="scs" onClick={handleClick}>Spicy Sandwich</button>
                <button id="scsd" onClick={handleClick}>Spicy Sandwich Deluxe</button>
                <button id="n8" onClick={handleClick}>Nugget8</button>
            </div>

            <div className="button-row">
                <button id="n12" onClick={handleClick}>Nugget12</button>
                <button id="wfm" onClick={handleClick}>FriesM</button>
                <button id="ng8" onClick={handleClick}>Grilled8</button>
                <button id="ng12" onClick={handleClick}>Grilled12</button>
                <button id="csg" onClick={handleClick}>Sandwich Grilled</button>
            </div>

            <div className="button-row">
                <button id="sm" onClick={handleClick}>Salad Market</button>
                <button id="cookie" onClick={handleClick}>Cookie</button>
                <button id="csgc" onClick={handleClick}>Grilled Club</button>
                <button id="ccwg" onClick={handleClick}>Wrap Grilled</button>
                <button id="sc" onClick={handleClick}>Salad Cobb</button>
            </div>

            <div className="button-row">
                <button id="sss" onClick={handleClick}>Salad Southwest</button>
                <button id="ic" onClick={handleClick}>Icedream</button>
                <button id="brown" onClick={handleClick}>Brownie</button>
                <button id="wfl" onClick={handleClick}>FriesL</button>
                <button id="wc" onClick={handleClick}>Chip</button>
            </div>

            <div className="button-row">
                <button id="fc" onClick={handleClick}>Fruit</button>
                <button id="side" onClick={handleClick}>Side</button>
            </div>

            <button className="complete" onClick={handleComplete}>
                Finish Order
            </button>

            <button className="new" onClick={handleNewOrder}>
                New Order
            </button>

            <div className="price">
                Price: ${totalCost.toFixed(2)}
            </div>
        </div>
    );
};

export default Cashier;
