import React, { useContext, useEffect, useState } from "react";
import { CashierHelper } from "../../hooks/CashierHelper";
import CashierHeader from "./CustomerHeader";
import "../../css/Customer.css";
import { CurOrderContext } from "../../hooks/CurOrderContext";

const CustomerMeal = () => {
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

    const getMenuPrice = (menuItemId, menu) => {
        return menu[menuItemId];
    };

    useEffect(() => {
        console.log(curItems);
    }, [curItems]);
    return (
        <div>
            {/* <h1>{JSON.stringify(menu, null, 2)}</h1> */}
            <CashierHeader />
            <div className="c1">
                <br></br>
                <h1>Meals</h1>
                <h1>...</h1>
                <div className="button-row-C">
                    <div className="items">
                        <img
                            src="/resource/CFASandwich.png"
                            alt="Chick-Fil-A Sandwich Meal"
                            class="hi"
                        />
                        <h1 class="txt" >Chick-Fil-A Sandwich Meal</h1>
                        <span class="subtext" >${getMenuPrice(25, menu)}</span>
                        <button class="add-button" id="csmeal" onClick={handleClick}>
                            Add
                        </button>
                    </div>
                    <div className="items">
                        <img
                            src="/resource/DeluxeSandwich.png"
                            alt="Chick-Fil-A Deluxe Meal"
                            class="hi"
                        />
                        <h1 class="txt" >Chick-Fil-A Deluxe Meal</h1>
                        <span class="subtext" >${getMenuPrice(26, menu)}</span>
                        <button class="add-button" id="csdmeal" onClick={handleClick}>
                            Add
                        </button>
                    </div>
                    <div className="items">
                        <img
                            src="/resource/CFASpicySandwich.png"
                            alt="Spicy Chicken Meal"
                            class="hi"
                        />
                        <h1 class="txt" >Spicy Chicken Sandwich Meal</h1>
                        <span class="subtext" >${getMenuPrice(27, menu)}</span>
                        <button class="add-button" id="cssmeal" onClick={handleClick}>
                            add
                        </button>
                    </div>
                    <div className="items">
                        <img
                            src="/resource/Spicy-Deluxe-Sandwich.png"
                            alt="Spicy Deluxe Sandwich Meal"
                            class="hi"
                        />
                        <h1 class="txt" >Spicy Deluxe Sandwich Meal</h1>
                        <span class="subtext" >${getMenuPrice(28, menu)}</span>
                        <button class="add-button" id="cssdmeal" onClick={handleClick}>
                            Add
                        </button>
                    </div>
                </div>
                <div className="button-row-C">
                    <div className="items">
                        <img
                            src="/resource/nuggets_8ct.png"
                            alt="Chick-Fil-A Nuggets Meal"
                            class="hi"
                        />
                        <h1 class="txt" >Chick-Fil-A Nuggets Meal</h1>
                        <span class="subtext" >8ct. meal: ${getMenuPrice(30, menu)} | 12ct. meal: ${getMenuPrice(31, menu)} </span>
                        <div class="btn-holder">
                            <button class="add-button" id="8nmeal" onClick={handleClick}>
                                ng8
                            </button>
                            <button class="add-button" id="12nmeal" onClick={handleClick}>
                                ng12
                            </button>
                        </div>

                    </div>
                    <div className="items">
                        <img
                            src="/resource/grilledNuggets_8ct.png"
                            alt="Grilled Nuggets Meal"
                            class="hi"
                        />
                        <h1 class="txt" >Grilled Nuggets Meal</h1>
                        <span class="subtext" >8ct. meal: ${getMenuPrice(32, menu)} | 12ct. meal: ${getMenuPrice(33, menu)}</span>
                        <div class="btn-holder">
                            <button class="add-button" id="8ngmeal" onClick={handleClick}>
                                gril8
                            </button>
                            <button class="add-button" id="12ngmeal" onClick={handleClick}>
                                gril12
                            </button>
                        </div>
                    </div>
                </div>
                <div className="button-row-C">
                    <div className="items">
                        <img
                            src="/resource/Grilled-Deluxe-Sandwich_1085.png"
                            alt="Grilled Chicken Sandwich Meal"
                            class="hi"
                        />
                        <h1 class="txt" >Grilled Chicken Sandwich Meal</h1>
                        <span class="subtext" >${getMenuPrice(29, menu)}</span>
                        <button class="add-button" id="csgmeal" onClick={handleClick}>
                            Add
                        </button>
                    </div>
                    <div className="items">
                        <img
                            src="/resource/grilledClub_colbyJack.png"
                            alt="Grilled Chicken Club Meal"
                            class="hi"
                        />
                        <h1 class="txt" >Grilled Chicken Club Meal</h1>
                        <span class="subtext" >${getMenuPrice(35, menu)}</span>
                        <button class="add-button" id="csgdmeal" onClick={handleClick}>
                            Add
                        </button>
                    </div>
                    <div className="items">
                        <img
                            src="/resource/wrap.png"
                            alt="Grilled Chicken Cool Wrap Meal"
                            class="hi"
                        />
                        <h1 class="txt" >Grilled Chicken Cool Wrap Meal</h1>
                        <span class="subtext" >${getMenuPrice(36, menu)}</span>
                        <button class="add-button" id="wrpmeal" onClick={handleClick}>
                            Add
                        </button>
                    </div>
                </div>
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

export default CustomerMeal;
