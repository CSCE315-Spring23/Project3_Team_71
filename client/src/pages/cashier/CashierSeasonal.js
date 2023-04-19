import React, { useContext, useEffect, useState } from "react";
import { CashierHelper } from "../../hooks/CashierHelper";
import CashierHeader from "./CashierHeader";
import "../../css/Cashier.css";
import { CurOrderContext } from "../../hooks/CurOrderContext";
import CurOrderPopUp from "../../components/CurOrderPopUp";

const CashierSeasonal = () => {
    const [menu, setMenu] = useState({});
    const [seasonMenu, setSeasonMenu] = useState([]);
    const { totalCost, setTotalCost, curItems, setCurItems } =
        useContext(CurOrderContext);

    const { handleClickExtra, handleComplete, handleNewOrder, handleSubtract } =
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
        setSeasonMenu(
            Object.keys(menu)
                .slice(49)
                .map((key) => ({
                    menuID: key,
                    price: menu[key][0],
                    name: menu[key][1],
                }))
        );
    }, [menu]);

    return (
        <div>
            <CashierHeader />

            <div className="button-row-cashier">
                {seasonMenu.map((button, index) => (
                    <button
                        className="btn-cashier"
                        key={index}
                        id={button.menuID}
                        onClick={(event) => handleClickExtra(event, 5)}
                    >
                        {button.name}
                    </button>
                ))}
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
                    <button
                        className="edit-button-cashier"
                        onClick={handleComplete}
                    >
                        Finish Order
                    </button>

                    <button
                        className="edit-button-cashier"
                        onClick={handlePopUp}
                    >
                        CurOrder
                    </button>

                    <button
                        className="edit-button-cashier"
                        onClick={handleNewOrder}
                    >
                        New Order
                    </button>

                    <div className="price-cashier">
                        Price: ${totalCost.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CashierSeasonal;
