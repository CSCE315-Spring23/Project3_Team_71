import React, { useContext, useEffect, useState } from "react";
import { CashierHelper } from "../../hooks/CashierHelper";
import CashierHeader from "./CustomerHeader";
import "../../css/Customer.css";
import { CurOrderContext } from "../../hooks/CurOrderContext";
import CurOrderPopUp from "../../components/CurOrderPopUp";
import { HOST } from "../../host";

function CustomerNew() {
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

    useEffect(() => {
        setSeasonMenu(
            Object.keys(menu)
                .slice(57)
                .map((key) => ({
                    menuID: key,
                    price: menu[key][0],
                    name: menu[key][1],
                }))
        );

        console.log(menu);
    }, [menu]);

    useEffect(() => {
        console.log(menu);
    }, [menu]);

    useEffect(() => {
        console.log(curItems);
    }, [curItems]);

    return (
        <>
            <CashierHeader />
            <div className="new-btn-container">
                {seasonMenu.map((button, index) => (
                    <div className="new-btn-div">
                        <button
                            className="btn-new"
                            key={index}
                            id={button.menuID}
                            onClick={(event) => handleClickExtra(event)}
                        >
                            {button.name}
                        </button>
                    </div>
                ))}
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
            ;
            <div className="edit-row-customer">
                <button className="edit-button-customer" onClick={handlePopUp}>
                    Edit
                </button>
                <button
                    className="edit-button-customer bigger"
                    onClick={handleComplete}
                >
                    <div>Checkout:</div>
                    <div className="price-customer">
                        ${Math.abs(totalCost).toFixed(2)}
                    </div>
                </button>
            </div>
        </>
    );
}

export default CustomerNew;
