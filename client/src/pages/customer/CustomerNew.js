import React, { useContext, useEffect, useState } from "react";
import { CashierHelper } from "../../hooks/CashierHelper";
import CashierHeader from "./CustomerHeader";
import "../../css/Customer.css";
import { CurOrderContext } from "../../hooks/CurOrderContext";


function CustomerNew() {


    const [menu, setMenu] = useState({});
    const [seasonMenu, setSeasonMenu] = useState([]);
    const { totalCost, setTotalCost, curItems, setCurItems } =
        useContext(CurOrderContext);

    const { handleClickExtra, handleComplete, handleNewOrder } = CashierHelper(
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
                const { menu_item_id, menu_item_price, menu_item_name } = data[key];
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
                    name: menu[key][1]
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
      <CashierHeader/>
      {seasonMenu.map((button, index) => (
              <button  className= "btn" key={index} id={button.menuID} onClick={(event) => handleClickExtra(event, 5)}>
                  {button.name}
              </button>
          ))}

      <button className="complete-customer" onClick={handleComplete}>
        Finish Order
      </button>

      <button className="new-customer" onClick={handleNewOrder}>
        New Order
      </button>


      <div className="price-customer">Price: ${totalCost.toFixed(2)}</div>
    </>
  
  )
}

export default CustomerNew