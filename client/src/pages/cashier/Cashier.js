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
                <button class= "btn" id="cs" onClick={handleClick}>Chicken Sandwich</button>
                <button class= "btn" id="csd" onClick={handleClick}>Chicken Sandwich Deluxe</button>
                <button class= "btn" id="scs" onClick={handleClick}>Spicy Sandwich</button>
                <button class= "btn" id="scsd" onClick={handleClick}>Spicy Sandwich Deluxe</button>
                
            </div>

            <div className="button-row">
                <button class= "btn" id="n8" onClick={handleClick}>Nugget8</button>
                <button class= "btn" id="n12" onClick={handleClick}>Nugget12</button>
                <button class= "btn" id="ng8" onClick={handleClick}>Grilled8</button>
                <button class= "btn" id="ng12" onClick={handleClick}>Grilled12</button>
                <button class= "btn" id="csg" onClick={handleClick}>Sandwich Grilled</button>
                <button class= "btn" id="csgc" onClick={handleClick}>Grilled Club</button>
            </div>

            <div className="button-row">
                <button class= "btn" id="ccwg" onClick={handleClick}>Wrap Grilled</button>
                <button class= "btn" id="sm" onClick={handleClick}>Salad Market</button>
                <button class= "btn" id="sss" onClick={handleClick}>Salad Southwest</button>    
                <button class= "btn" id="sc" onClick={handleClick}>Salad Cobb</button>
            </div>

            <div className="button-row">
                <button class= "btn" id="cookie" onClick={handleClick}>Cookie</button>
                <button class= "btn" id="ic" onClick={handleClick}>Icedream</button>
                <button class= "btn" id="brown" onClick={handleClick}>Brownie</button>
                <button class= "btn" id="fc" onClick={handleClick}>Fruit</button>
                <button class= "btn" id="side" onClick={handleClick}>Side</button>
                
            </div>

            <div className="button-row">
                
                <button class= "btn" id="wfm" onClick={handleClick}>FriesM</button>
                <button class= "btn" id="wfl" onClick={handleClick}>FriesL</button>
                <button class= "btn" id="wc" onClick={handleClick}>Chip</button>
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
