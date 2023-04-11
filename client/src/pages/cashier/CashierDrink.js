import React, { useContext, useEffect, useState } from "react";
import { CashierHelper } from "../../hooks/CashierHelper";
import CashierHeader from "./CashierHeader";
import "../../css/Cashier.css";
import { CurOrderContext } from "../../hooks/CurOrderContext";
import CurOrderPopUp from "../../components/CurOrderPopUp";

const CashierDrink = () => {
    const [menu, setMenu] = useState("");
    const { totalCost, setTotalCost, curItems, setCurItems } =
        useContext(CurOrderContext);

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
                <button className= "btn" id="milkchoc" onClick={handleClick}>
                    milkchoc
                </button>
                <button className= "btn" id="milkvan" onClick={handleClick}>
                    mlkvan
                </button>
                <button className= "btn" id="milkstraw" onClick={handleClick}>
                    milkstraw
                </button>
                <button className= "btn" id="milkcook" onClick={handleClick}>
                    milkcook
                </button>
                <button className= "btn" id="lem" onClick={handleClick}>
                    lemoade m
                </button>
            </div>

            <div className="button-row">
                <button className= "btn" id="softm" onClick={handleClick}>
                    soda m
                </button>
                <button className= "btn" id="softl" onClick={handleClick}>
                    soda lar
                </button>
                <button className= "btn" id="team" onClick={handleClick}>
                    tea med
                </button>
                <button className= "btn" id="teal" onClick={handleClick}>
                    teal large
                </button>
                <button className= "btn" id="leml" onClick={handleClick}>
                    lemonade large
                </button>
            </div>

            <div className="button-row">
                <button className= "btn" id="sunjoym" onClick={handleClick}>
                    sunjoy m
                </button>
                <button className= "btn" id="sunjoyl" onClick={handleClick}>
                    sunjoy l
                </button>
                <button className= "btn" id="cofice" onClick={handleClick}>
                    coffee ice
                </button>
                <button className= "btn" id="lemfrost" onClick={handleClick}>
                    lemonade frost
                </button>
                <button className= "btn" id="cofrost" onClick={handleClick}>
                    coffee frost
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

export default CashierDrink;
