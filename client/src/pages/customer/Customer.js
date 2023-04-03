import React, { useEffect, useState } from "react";
import "../../css/Customer.css";
const Customer = () => {
  const [menu, setMenu] = useState("");
    const [totalCost, setTotalCost] = useState(0);
    const [curItems, setCurItems] = useState({});

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

    const handleNewOrder = () => {
        setCurItems({});
        setTotalCost(0);
    }

    const handleComplete = async () => {

        const result = await fetch(`http://localhost:3001/addOrderItems/${totalCost}/${true}`);
        console.log(result);

        const lastID = await fetch("http://localhost:3001/lastOrderID");
        const data = await lastID.json();
        console.log(data[0].order_id);

        for (const key in curItems) {
            console.log(key, curItems[key]);
            const result2 = await fetch(`http://localhost:3001/createOrder/${data[0].order_id}/${key}/${curItems[key]}`)
            console.log(result2);
        }

        handleNewOrder();

    }

    const handleClick = (event) => {
        const bID = event.target.id;
        console.log(bID);

        switch (bID) {
            case "cs":
                addItem(1);
                break;
            case "csd":
                addItem(2);
                break;
            case "scs":
                addItem(3);
                break;
            case "scsd":
                addItem(4);
                break;
            case "n8":
                addItem(6);
                break;
            case "n12":
                addItem(7);
                break;
            case "wfm":
                addItem(12);
                break;
            case "ng8":
                addItem(16);
                break;
            case "ng12":
                addItem(17);
                break;
            case "csg":
                addItem(18);
                break;
            case "sm":
                addItem(19);
                break;
            case "cookie":
                addItem(24);
                break;
            case "csgc":
                addItem(34);
                break;
            case "ccwg":
                addItem(37);
                break;
            case "sc":
                addItem(38);
                break;
            case "sss":
                addItem(39);
                break;
            case "ic":
                addItem(49);
                break;
            case "brown":
                addItem(50);
                break;
            case "wfl":
                addItem(52);
                break;
            case "wc":
                addItem(53);
                break;
            case "fc":
                addItem(54);
                break;
            case "side":
                addItem(55);
                break;
            default:
                console.log("ERROR w/ switching");
        }
    }

    const addItem = (menuID) => {

        console.log(menuID);
        console.log(menuID in menu);
        if (menuID in curItems) {
            console.log("item in");
            
            setCurItems(prev => ({
                ...prev,
                [menuID]: prev[menuID] + 1
            }));



            setTotalCost(prev => prev += parseFloat(menu[menuID]));
        }
        else {
            console.log("new item");

            setCurItems(prev => ({
                ...prev,
                [menuID]: 1
            }));

            setTotalCost(prev => prev += parseFloat(menu[menuID]));
            
            }
    }


    return (
      <>
      
      <div className = "c1">

        <div className="button-row">
          {/* <img src="/resource/CFASandwich.png"></img>  */}
          <div className = "items">
              <img
                src="/resource/nuggets_8ct.png"
                alt="Chick-Fil-A Nuggets"
                class="hi"
                
              />
              <h1 class="txt" >Chick-Fil-A Nuggets</h1>
              <span class="subtext">$</span>
              <button class="add-button" id="cs" onClick={handleClick} >Chicken Sandwich</button>
            </div>
          <div className = "items">
              <img
                src="/resource/nuggets_8ct.png"
                alt="Chick-Fil-A Nuggets"
                class="hi"
                
              />
              <h1 class="txt" >Chick-Fil-A Nuggets</h1>
              <span class="subtext">$</span>
              <button class="add-button" id="csd" onClick={handleClick}>Chicken Sandwich Deluxe</button>
            </div>
          <div className = "items">
              <img
                src="/resource/nuggets_8ct.png"
                alt="Chick-Fil-A Nuggets"
                class="hi"
                
              />
              <h1 class="txt" >Chick-Fil-A Nuggets</h1>
              <span class="subtext">$</span>
              <button class="add-button" id="scs" onClick={handleClick}>Spicy Sandwich</button>
            </div>
          <div className = "items">
              <img
                src="/resource/nuggets_8ct.png"
                alt="Chick-Fil-A Nuggets"
                class="hi"
                
              />
              <h1 class="txt" >Chick-Fil-A Nuggets</h1>
              <span class="subtext">$</span>
              <button class="add-button" id="scsd" onClick={handleClick}>Spicy Sandwich Deluxe</button>
           </div>
        </div>

        <div className="button-row">
            <div className = "items">
              <img
                src="/resource/nuggets_8ct.png"
                alt="Chick-Fil-A Nuggets"
                class="hi"
                
              />
              <h1 class="txt" >Chick-Fil-A Nuggets</h1>
              <span class="subtext">$</span>
              
              <button class="add-button" id="n8" onClick={handleClick}>Add</button>
            </div>
            <div className = "items">
              <img
                src="/resource/CFASandwich.png"
                alt="Chick-Fil-A Sandwhich"
                class="hi"
                
              />
              <h1 class="txt" >Chick-Fil-A Nuggets</h1>
              <span class="subtext">$</span>
              <button class="add-button" id="n12" onClick={handleClick}>Add</button>
            </div>
            <div className = "items">
              <img
                src="/resource/nuggets_8ct.png"
                alt="Chick-Fil-A Nuggets"
                class="hi"
                
              />
              <h1 class="txt" >Chick-Fil-A Nuggets</h1>
              <span class="subtext">$</span>
              <button class="add-button" id="ng8" onClick={handleClick}>Grilled8</button>
            </div>
            <div className = "items">
              <img
                src="/resource/nuggets_8ct.png"
                alt="Chick-Fil-A Nuggets"
                class="hi"
                
              />
              <h1 class="txt" >Chick-Fil-A Nuggets</h1>
              <span class="subtext">$</span>
              <button class="add-button" id="ng12" onClick={handleClick}>Grilled12</button>
            </div>
            <div className = "items">
              <img
                src="/resource/nuggets_8ct.png"
                alt="Chick-Fil-A Nuggets"
                class="hi"
                
              />
              <h1 class="txt" >Chick-Fil-A Nuggets</h1>
              <span class="subtext">$</span>
              <button class="add-button" id="csg" onClick={handleClick}>Sandwich Grilled</button>
            </div>
            <div className = "items">
              <img
                src="/resource/nuggets_8ct.png"
                alt="Chick-Fil-A Nuggets"
                class="hi"
                
              />
              <h1 class="txt" >Chick-Fil-A Nuggets</h1>
              <span class="subtext">$</span>
              <button class="add-button" id="csgc" onClick={handleClick}>Grilled Club</button>
            </div>
        </div>

        <div className="button-row">
            <div className = "items">
              <img
                src="/resource/nuggets_8ct.png"
                alt="Chick-Fil-A Nuggets"
                class="hi"
                
              />
              <h1 class="txt" >Chick-Fil-A Nuggets</h1>
              <span class="subtext">$</span>
              <button class="add-button" id="ccwg" onClick={handleClick}>Wrap Grilled</button>
            </div>
            <div className = "items">
              <img
                src="/resource/nuggets_8ct.png"
                alt="Chick-Fil-A Nuggets"
                class="hi"
                
              />
              <h1 class="txt" >Chick-Fil-A Nuggets</h1>
              <span class="subtext">$</span>
              <button class="add-button" id="sm" onClick={handleClick}>Salad Market</button>
            </div>
            <div className = "items">
              <img
                src="/resource/nuggets_8ct.png"
                alt="Chick-Fil-A Nuggets"
                class="hi"
                
              />
              <h1 class="txt" >Chick-Fil-A Nuggets</h1>
              <span class="subtext">$</span>
              <button class="add-button" id="sss" onClick={handleClick}>Salad Southwest</button>
            </div>    
            <div className = "items">
              <img
                src="/resource/nuggets_8ct.png"
                alt="Chick-Fil-A Nuggets"
                class="hi"
                
              />
              <h1 class="txt" >Chick-Fil-A Nuggets</h1>
              <span class="subtext">$</span>
              <button class="add-button" id="sc" onClick={handleClick}>Salad Cobb</button>
            </div>
        </div>

        <div className="button-row">
            <div className = "items">
              <img
                src="/resource/nuggets_8ct.png"
                alt="Chick-Fil-A Nuggets"
                class="hi"
                
              />
              <h1 class="txt" >Chick-Fil-A Nuggets</h1>
              <span class="subtext">$</span>
              <button class="add-button" id="cookie" onClick={handleClick}>Cookie</button>
            </div>
            <div className = "items">
              <img
                src="/resource/nuggets_8ct.png"
                alt="Chick-Fil-A Nuggets"
                class="hi"
                
              />
              <h1 class="txt" >Chick-Fil-A Nuggets</h1>
              <span class="subtext">$</span>
              <button class="add-button" id="ic" onClick={handleClick}>Icedream</button>
            </div>
            <div className = "items">
              <img
                src="/resource/nuggets_8ct.png"
                alt="Chick-Fil-A Nuggets"
                class="hi"
                
              />
              <h1 class="txt" >Chick-Fil-A Nuggets</h1>
              <span class="subtext">$</span>
              <button class="add-button" id="brown" onClick={handleClick}>Brownie</button>
            </div>
            <div className = "items">
              <img
                src="/resource/nuggets_8ct.png"
                alt="Chick-Fil-A Nuggets"
                class="hi"
                
              />
              <h1 class="txt" >Chick-Fil-A Nuggets</h1>
              <span class="subtext">$</span>
              <button class="add-button" id="fc" onClick={handleClick}>Fruit</button>
            </div>
            <div className = "items">
              <img
                src="/resource/nuggets_8ct.png"
                alt="Chick-Fil-A Nuggets"
                class="hi"
                
              />
              <h1 class="txt" >Chick-Fil-A Nuggets</h1>
              <span class="subtext">$</span>
              <button class="add-button" id="side" onClick={handleClick}>Side</button>
            </div>
            
        </div>

        <div className="button-row">   
            <div className = "items">
              <img
                src="/resource/nuggets_8ct.png"
                alt="Chick-Fil-A Nuggets"
                class="hi"
                
              />
              <h1 class="txt" >Chick-Fil-A Nuggets</h1>
              <span class="subtext">$</span>
              <button class="add-button" id="wfm" onClick={handleClick}>FriesM</button>
            </div>
            <div className = "items">
              <img
                src="/resource/nuggets_8ct.png"
                alt="Chick-Fil-A Nuggets"
                class="hi"
                
              />
              <h1 class="txt" >Chick-Fil-A Nuggets</h1>
              <span class="subtext">$</span>
              <button class="add-button" id="wfl" onClick={handleClick}>FriesL</button>
            </div>
            <div className = "items">
              <img
                src="/resource/nuggets_8ct.png"
                alt="Chick-Fil-A Nuggets"
                class="hi"
                
              />
              <h1 class="txt" >Chick-Fil-A Nuggets</h1>
              <span class="subtext">$</span>
              <button class="add-button" id="wc" onClick={handleClick}>Chip</button>
            </div>
        </div>
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
      </>
  );
};
export default Customer;
