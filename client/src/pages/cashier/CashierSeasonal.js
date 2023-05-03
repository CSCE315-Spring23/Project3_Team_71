import React, { useContext, useEffect, useState } from "react";
import { CashierHelper } from "../../hooks/CashierHelper";
import CashierHeader from "./CashierHeader";
import "../../css/Cashier.css";
import { CurOrderContext } from "../../hooks/CurOrderContext";
import CurOrderPopUp from "../../components/CurOrderPopUp";
import { HOST } from "../../host";

const CashierSeasonal = () => {
    const [menu, setMenu] = useState({});
    const [seasonMenu, setSeasonMenu] = useState([]);
    const { totalCost, setTotalCost, curItems, setCurItems } =
        useContext(CurOrderContext);

    const { handleClickExtra, handleComplete, handleSubtract } = CashierHelper(
        curItems,
        menu,
        totalCost,
        setCurItems,
        setTotalCost
    );

    const [showPopUp, setShowPopUp] = useState(false);

    /*
    * Toggles the visibility of the current order popup
    */
    const handlePopUp = () => {
        setShowPopUp(!showPopUp);
    };

    /*
    *
    * Fetches the menu data from the server and saves it to state
    */
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
                        onClick={(event) => handleClickExtra(event)}
                    >
                        <h2>{button.name}</h2>
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
                        onClick={handlePopUp}
                    >
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
        </div>
    );
};

export default CashierSeasonal;
