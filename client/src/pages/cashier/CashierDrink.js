import React, { useContext, useEffect, useState } from "react";
import { CashierHelper } from "../../hooks/CashierHelper";
import CashierHeader from "./CashierHeader";
import "../../css/Cashier.css";
import { CurOrderContext } from "../../hooks/CurOrderContext";

const CashierDrink = () => {
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
                <button id="milkchoc" onClick={handleClick}>
                    milkchoc
                </button>
                <button id="milkvan" onClick={handleClick}>
                    mlkvan
                </button>
                <button id="milkstraw" onClick={handleClick}>
                    milkstraw
                </button>
                <button id="milkcook" onClick={handleClick}>
                    milkcook
                </button>
                <button id="lem" onClick={handleClick}>
                    lemoade m
                </button>
            </div>

            <div className="button-row">
                <button id="softm" onClick={handleClick}>
                    soda m
                </button>
                <button id="softl" onClick={handleClick}>
                    soda lar
                </button>
                <button id="team" onClick={handleClick}>
                    tea med
                </button>
                <button id="teal" onClick={handleClick}>
                    teal large
                </button>
                <button id="leml" onClick={handleClick}>
                    lemonade large
                </button>
            </div>

            <div>
                <button id="sunjoym" onClick={handleClick}>
                    sunjoy m
                </button>
                <button id="sunjoyl" onClick={handleClick}>
                    sunjoy l
                </button>
                <button id="cofice" onClick={handleClick}>
                    coffee ice
                </button>
                <button id="lemfrost" onClick={handleClick}>
                    lemonade frost
                </button>
                <button id="cofrost" onClick={handleClick}>
                    coffee frost
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

export default CashierDrink;
