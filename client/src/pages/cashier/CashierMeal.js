import React, { useContext, useEffect, useState } from "react";
import { CashierHelper } from "../../hooks/CashierHelper";
import CashierHeader from "./CashierHeader";
import "../../css/Cashier.css";
import { CurOrderContext } from "../../hooks/CurOrderContext";

const CashierMeal = () => {
    const [menu, setMenu] = useState("");
    const { totalCost, setTotalCost, curItems, setCurItems } =
        useContext(CurOrderContext);

    const { handleClick, handleComplete, handleNewOrder } = CashierHelper(
        curItems,
        menu,
        totalCost,
        setCurItems,
        setTotalCost
    );

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
                <button class= "btn" id="8nmeal" onClick={handleClick}>
                    ng8
                </button>
                <button class= "btn" id="12nmeal" onClick={handleClick}>
                    ng12
                </button>
                <button class= "btn" id="8ngmeal" onClick={handleClick}>
                    gril8
                </button>
                <button class= "btn" id="12ngmeal" onClick={handleClick}>
                    gril12
                </button>
                <button class= "btn" id="csmeal" onClick={handleClick}>
                    sandwich
                </button>
            </div>

            <div className="button-row">
                <button class= "btn" id="csdmeal" onClick={handleClick}>
                    sandwichD
                </button>
                <button class= "btn" id="cssmeal" onClick={handleClick}>
                    spicy
                </button>
                <button class= "btn" id="cssdmeal" onClick={handleClick}>
                    spicyD
                </button>
                <button class= "btn" id="csgmeal" onClick={handleClick}>
                    sandwichG
                </button>
                <button class= "btn" id="csgdmeal" onClick={handleClick}>
                    Sandwich Grilled De
                </button>
            </div>

            <div className="button-row">
                <button class= "btn" id="wrpmeal" onClick={handleClick}>
                    wrap
                </button>
            </div>

            <button className="complete" onClick={handleComplete}>
                Finish Order
            </button>

            <button className="new" onClick={handleNewOrder}>
                New Order
            </button>

            <div className="price">Price: ${totalCost.toFixed(2)}</div>
        </div>
    );
};

export default CashierMeal;
