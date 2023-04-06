import React, { useContext, useEffect, useState } from "react";
import { CashierHelper } from "../../hooks/CashierHelper";
import CashierHeader from "./CustomerHeader";
import "../../css/Customer.css";
import { CurOrderContext } from "../../hooks/CurOrderContext";

const CustomerDrink = () => {
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
        <h1>Drinks</h1>
        <h1>...</h1>
        <div className="button-row-C">
          <div className="items">
            <img
              src="/resource/Drinks_Coca-cola.png"
              alt="Soft Drink"
              class="hi"

            />
            <h1 class="txt" >Soft Drink</h1>
            <span class="subtext">M: ${getMenuPrice(9, menu)} | L: ${getMenuPrice(43, menu)}</span>
            <div className="btn-holder">
              <button class="add-button" id="softm" onClick={handleClick}>
                soda m
              </button>
              <button class="add-button" id="softl" onClick={handleClick}>
                soda lar
              </button>
            </div>
          </div>
          <div className="items">
            <img
              src="/resource/lemonade.png"
              alt="Chick-Fil-A Lemondade"
              class="hi"

            />
            <h1 class="txt" >Chick-Fil-A Lemondade</h1>
            <span class="subtext">M: ${getMenuPrice(15, menu)} | L: ${getMenuPrice(42, menu)}</span>
            <div className="btn-holder">
              <button class="add-button" id="lem" onClick={handleClick}>
                lemoade m
              </button>
              <button class="add-button" id="leml" onClick={handleClick}>
                lemonade large
              </button>
            </div>
          </div>
          <div className="items">
            <img
              src="/resource/tea.png"
              alt="Freshly-Brewed Iced Tea"
              class="hi"

            />
            <h1 class="txt" >Freshly-Brewed Iced Tea</h1>
            <span class="subtext">M: ${getMenuPrice(40, menu)} | L: ${getMenuPrice(41, menu)}</span>
            <div className="btn-holder">
              <button class="add-button" id="team" onClick={handleClick}>
                tea med
              </button>
              <button class="add-button" id="teal" onClick={handleClick}>
                teal large
              </button>
            </div>

          </div>
          <div className="items">
            <img
              src="/resource/sunjoy.png"
              alt="Chick-Fil-A Sunjoy"
              class="hi"

            />
            <h1 class="txt" >Chick-Fil-A Sunjoy</h1>
            <span class="subtext">M: ${getMenuPrice(44, menu)} | L: ${getMenuPrice(45, menu)}</span>
            <div className="btn-holder">
              <button class="add-button" id="sunjoym" onClick={handleClick}>
                sunjoy m
              </button>
              <button class="add-button" id="sunjoyl" onClick={handleClick}>
                sunjoy l
              </button>
            </div>
          </div>
        </div>

        <div className="button-row-C">
          <div className="items">
            <img
              src="/resource/ChocolateMilkshake-1080.png"
              alt="Hand-Spun Chocolate Milkshake"
              class="hi"

            />
            <h1 class="txt" >Hand-Spun Chocolate Milkshake</h1>
            <span class="subtext">${getMenuPrice(20, menu)}</span>
            <button class="add-button" id="milkchoc" onClick={handleClick}>
              Add
            </button>
          </div>
          <div className="items">
            <img
              src="/resource/VanillaMilkshake-1080.png"
              alt="Hand-Spun Vanilla Milkshake"
              class="hi"

            />
            <h1 class="txt" >Hand-Spun Vanilla Milkshake</h1>
            <span class="subtext">${getMenuPrice(21, menu)}</span>
            <button class="add-button" id="milkvan" onClick={handleClick}>
              Add
            </button>
          </div>
          <div className="items">
            <img
              src="/resource/16oz_StrawberryMilkshake-1080.png"
              alt="Hand-Spun Strawberry Milkshake"
              class="hi"

            />
            <h1 class="txt" >Hand-Spun Strawberry Milkshake</h1>
            <span class="subtext">${getMenuPrice(22, menu)}</span>
            <button class="add-button" id="milkstraw" onClick={handleClick}>
              Add
            </button>
          </div>
          <div className="items">
            <img
              src="/resource/16oz_C&C_Milkshake-1080.png"
              alt="Hand-Spun Cookies & Cream Milkshake"
              class="hi"

            />
            <h1 class="txt" >Hand-Spun Cookies & Cream Milkshake</h1>
            <span class="subtext">${getMenuPrice(23, menu)}</span>
            <button class="add-button" id="milkcook" onClick={handleClick}>
              Add
            </button>
          </div>

        </div>

        <div className="button-row-C">

          <div className="items">
            <img
              src="/resource/2022IcedCoffee.png"
              alt="Cold Brew Iced Coffee"
              class="hi"

            />
            <h1 class="txt" >Cold Brew Iced Coffee</h1>
            <span class="subtext">${getMenuPrice(46, menu)}</span>
            <button class="add-button" id="cofice" onClick={handleClick}>
              Add
            </button>
          </div>
          <div className="items">
            <img
              src="/resource/Frosted-Lemonade.png"
              alt="Frosted Lemonade"
              class="hi"
            />
            <h1 class="txt" >Frosted Lemonade</h1>
            <span class="subtext">${getMenuPrice(47, menu)}</span>
            <button class="add-button" id="lemfrost" onClick={handleClick}>
              Add
            </button>
          </div>
          <div className="items">
            <img
              src="/resource/Frosted-Coffee.png"
              alt="Frosted Coffee"
              class="hi"

            />
            <h1 class="txt" >Frosted Coffee</h1>
            <span class="subtext">${getMenuPrice(48, menu)}</span>
            <button class="add-button" id="cofrost" onClick={handleClick}>
              Add
            </button>
          </div>
        </div>

        <br></br>
        <h1>Treats</h1>
        <h1>...</h1>
        <div className="button-row-C">
          <div className="items">
            <img
              src="/resource/CCCookie.png"
              alt="Chocolate Chunk Cookie"
              class="hi"
            />
            <h1 class="txt" >Chocolate Chunk Cookie</h1>
            <span class="subtext">${getMenuPrice(24, menu)}</span>
            <button class="add-button" id="cookie" onClick={handleClick}>Add</button>
          </div>
          <div className="items">
            <img
              src="/resource/Ice-Dream.png"
              alt="Icedream Cone"
              class="hi"
            />
            <h1 class="txt" >Icedream Cone</h1>
            <span class="subtext">${getMenuPrice(49, menu)}</span>
            <button class="add-button" id="ic" onClick={handleClick}>Add</button>
          </div>
          <div className="items">
            <img
              src="/resource/031717_FudgeChunkBrownie_PDP.png"
              alt="Chocolate Fudge Cookie"
              class="hi"
            />
            <h1 class="txt" >Chocolate Fudge Cookie</h1>
            <span class="subtext">${getMenuPrice(50, menu)}</span>
            <button class="add-button" id="brown" onClick={handleClick}>Add</button>
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

export default CustomerDrink;
