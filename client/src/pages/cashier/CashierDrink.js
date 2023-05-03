import React, { useContext, useEffect, useState } from "react";
import { CashierHelper } from "../../hooks/CashierHelper";
import CashierHeader from "./CashierHeader";
import "../../css/Cashier.css";
import { CurOrderContext } from "../../hooks/CurOrderContext";
import CurOrderPopUp from "../../components/CurOrderPopUp";
import { HOST } from "../../host";

/*
* React component for the Cashier section of the app 
@returns {JSX.Element} Cashier Drink component JSX
*/
const CashierDrink = () => {
    const [menu, setMenu] = useState("");
    const { totalCost, setTotalCost, curItems, setCurItems } =
        useContext(CurOrderContext);

    const { handleClick, handleComplete, handleNewOrder, handleSubtract } =
        CashierHelper(curItems, menu, totalCost, setCurItems, setTotalCost);

    const [showPopUp, setShowPopUp] = useState(false);

    /**

    Toggles the visibility of the current order popup
    */
    const handlePopUp = () => {
        setShowPopUp(!showPopUp);
    };


    /**
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

    return (
        <div>
            {/* <h1>{JSON.stringify(menu, null, 2)}</h1> */}
            <CashierHeader />

            <div className="button-row-cashier">
                <button
                    className="btn-cashier"
                    id="milkchoc"
                    onClick={handleClick}
                >
                    <img
                        src="/resource/ChocolateMilkshake-1080.png"
                        alt="Hand-Spun Chocolate Milkshake"
                        className="btn-img-cashier"
                    />
                    <h1>Ch</h1>
                </button>
                <button
                    className="btn-cashier"
                    id="milkvan"
                    onClick={handleClick}
                >
                    <img
                        src="/resource/VanillaMilkshake-1080.png"
                        alt="Hand-Spun Vanilla Milkshake"
                        className="btn-img-cashier"
                    />
                    <h1>V</h1>
                </button>
                <button
                    className="btn-cashier"
                    id="milkstraw"
                    onClick={handleClick}
                >
                    <img
                        src="/resource/16oz_StrawberryMilkshake-1080.png"
                        alt="Hand-Spun Strawberry Milkshake"
                        className="btn-img-cashier"
                    />
                    <h1>S</h1>
                </button>
                <button
                    className="btn-cashier"
                    id="milkcook"
                    onClick={handleClick}
                >
                    <img
                        src="/resource/16oz_C&C_Milkshake-1080.png"
                        alt="Hand-Spun Cookies & Cream Milkshake"
                        className="btn-img-cashier"
                    />
                    <h1>CC</h1>
                </button>
                <button className="btn-cashier" id="lem" onClick={handleClick}>
                    <img
                        src="/resource/lemonade.png"
                        alt="Chick-Fil-A Lemondade"
                        className="btn-img-cashier"
                    />
                    <h1>M</h1>
                </button>
                <button
                    className="btn-cashier"
                    id="brown"
                    onClick={handleClick}
                >
                    <img
                        src="/resource/031717_FudgeChunkBrownie_PDP.png"
                        alt="Chocolate Fudge Cookie"
                        className="btn-img-cashier"
                    />
                    <h1>B</h1>
                </button>
            </div>

            <div className="button-row-cashier">
                <button
                    className="btn-cashier"
                    id="softm"
                    onClick={handleClick}
                >
                    <img
                        src="/resource/Drinks_Coca-cola.png"
                        alt="Soft Drink"
                        className="btn-img-cashier"
                    />
                    <h1>M</h1>
                </button>
                <button
                    className="btn-cashier"
                    id="softl"
                    onClick={handleClick}
                >
                    <img
                        src="/resource/Drinks_Coca-cola.png"
                        alt="Soft Drink"
                        className="btn-img-cashier"
                    />
                    <h1>L</h1>
                </button>
                <button className="btn-cashier" id="team" onClick={handleClick}>
                    <img
                        src="/resource/tea.png"
                        alt="Freshly-Brewed Iced Tea"
                        className="btn-img-cashier"
                    />
                    <h1>M</h1>
                </button>
                <button className="btn-cashier" id="teal" onClick={handleClick}>
                    <img
                        src="/resource/tea.png"
                        alt="Freshly-Brewed Iced Tea"
                        className="btn-img-cashier"
                    />
                    <h1>L</h1>
                </button>
                <button className="btn-cashier" id="leml" onClick={handleClick}>
                    <img
                        src="/resource/lemonade.png"
                        alt="Chick-Fil-A Lemondade"
                        className="btn-img-cashier"
                    />
                    <h1>L</h1>
                </button>
                <button
                    className="btn-cashier"
                    id="cookie"
                    onClick={handleClick}
                >
                    <img
                        src="/resource/CCCookie.png"
                        alt="Chocolate Chunk Cookie"
                        className="btn-img-cashier"
                    />
                    <h1>C</h1>
                </button>
            </div>

            <div className="button-row-cashier">
                <button
                    className="btn-cashier"
                    id="sunjoym"
                    onClick={handleClick}
                >
                    <img
                        src="/resource/sunjoy.png"
                        alt="Chick-Fil-A Sunjoy"
                        className="btn-img-cashier"
                    />
                    <h1>M</h1>
                </button>
                <button
                    className="btn-cashier"
                    id="sunjoyl"
                    onClick={handleClick}
                >
                    <img
                        src="/resource/sunjoy.png"
                        alt="Chick-Fil-A Sunjoy"
                        className="btn-img-cashier"
                    />
                    <h1>L</h1>
                </button>
                <button
                    className="btn-cashier"
                    id="cofice"
                    onClick={handleClick}
                >
                    <img
                        src="/resource/2022IcedCoffee.png"
                        alt="Cold Brew Iced Coffee"
                        className="btn-img-cashier"
                    />
                    <h1>CI</h1>
                </button>
                <button
                    className="btn-cashier"
                    id="lemfrost"
                    onClick={handleClick}
                >
                    <img
                        src="/resource/Frosted-Lemonade.png"
                        alt="Frosted Lemonade"
                        className="btn-img-cashier"
                    />
                    <h1>LF</h1>
                </button>
                <button
                    className="btn-cashier"
                    id="cofrost"
                    onClick={handleClick}
                >
                    <img
                        src="/resource/Frosted-Coffee.png"
                        alt="Frosted Coffee"
                        className="btn-img-cashier"
                    />
                    <h1>CF</h1>
                </button>

                <button className="btn-cashier" id="ic" onClick={handleClick}>
                    <img
                        src="/resource/Ice-Dream.png"
                        alt="Icedream Cone"
                        className="btn-img-cashier"
                    />
                    <h1>ICE</h1>
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

export default CashierDrink;
