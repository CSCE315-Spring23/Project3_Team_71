import React, { useEffect, useState } from "react";
import "../../css/menu.css";


export default function Menu() {

    const [menu, setMenu] = useState("");
    const [menu1, setMenu1] = useState("")
    const [items, newItems] = useState([]);

    useEffect(() => {
        const handleNewItems = async () => {
            const res = await fetch("http://localhost:3001/newMenuItems");
            const getdata = await res.json();
            newItems(getdata);
            console.log(getdata);
        };
        handleNewItems();
    }, []);


    useEffect(() => {
        const getMenu = async () => {
          const res = await fetch("http://localhost:3001/menu");
          const data = await res.json();
    
          const newObj = {};
          const newObj2 = {};
          for (const key in data) {
            const { menu_item_id, menu_item_price, menu_item_name } = data[key];
            newObj[menu_item_id] = menu_item_price;
            newObj2[menu_item_id] = menu_item_name;
          }
          
    
          setMenu(newObj);
          setMenu1(newObj2);
        };
        getMenu();
      }, []);
    
    
      const getMenuPrice = (menuItemId, menu) => {
        return menu[menuItemId];
      };
      const getMenuName = (menuItemId, menu1) => {
        return menu1[menuItemId];
      };


    console.log(items);

    return (
        <>
            {/* <header><h1>Menu</h1></header> */}
            <div class="bdy">
                
                <div class="b1">
                <br></br>

                    <h2>Entrees & Meals</h2>
                    <h1>...</h1>
                    <div class="s1">
                        <div class="sandwich1">
                            <img
                                class="menuImg" src="/resource/sand.jpg"
                                alt="Chick-fil-A Chicken Sandwich"
                            ></img>
                            <h3>{getMenuName(1, menu1)}</h3>
                            <h4> ${getMenuPrice(25, menu)} Meal | ${getMenuPrice(1, menu)} Entree</h4>
                            <br></br>

                            <h3>{getMenuName(2, menu1)}</h3>
                            <h4> ${getMenuPrice(26, menu)} Meal | ${getMenuPrice(2, menu)} Entree</h4>
                            <br></br>
                            <img class="menuImg" src="/resource/spicysSand.jpg"></img>
                            <h3>{getMenuName(3, menu1)}</h3>
                            <h4> ${getMenuPrice(27, menu)} Meal | ${getMenuPrice(3, menu)} Entree</h4>
                            <br></br>

                            <h3>{getMenuName(4, menu1)}</h3>
                            <h4> ${getMenuPrice(28, menu)} Meal | ${getMenuPrice(4, menu)} Entree</h4>
                        </div>
                        <div class="sandwich2">
                            <img class="menuImg" src="/resource/grilledsand.jpg"></img>
                            <h3>{getMenuName(18, menu1)}</h3>
                            <h4> ${getMenuPrice(29, menu)} Meal | ${getMenuPrice(18, menu)} Entree</h4>
                            <br></br>
                            <h3>{getMenuName(34, menu1)}</h3>
                            <h4> ${getMenuPrice(35, menu)} Meal | ${getMenuPrice(34, menu)} Entree</h4>
                            <br></br>
                            <img class="menuImg" src="/resource/nuggs.jpg"></img>
                            <h3>{getMenuName(6, menu1)}</h3>
                            <h4> 8ct: ${getMenuPrice(30, menu)} Meal | ${getMenuPrice(6, menu)} Entree</h4>
                            <h4> 12ct: ${getMenuPrice(31, menu)} Meal | ${getMenuPrice(7, menu)} Entree</h4>
                            <br></br>
                            {/* <img class= "menuImg" src="/resource/grilledNuggets_8ct.png"></img> */}
                            <h3>{getMenuName(16, menu1)}</h3>
                            <h4> 8ct: ${getMenuPrice(32, menu)} Meal | ${getMenuPrice(16, menu)} Entree</h4>
                            <h4> 12ct: ${getMenuPrice(33, menu)} Meal | ${getMenuPrice(17, menu)} Entree</h4>
                        </div>
                    </div>
                </div>
                <div class="b">
                <br></br>

                    <h2>Salads</h2>
                    <h1>...</h1>
                    <div class="s">
                        <div class="salads">
                            <img class="menuImg" src="/resource/wrap.png"></img>
                            <h3>{getMenuName(36, menu1)}</h3>
                            <h4> ${getMenuPrice(36, menu)} Meal | ${getMenuPrice(37, menu)} Entree</h4>
                            <img class="menuImg" src="/resource/cobbSalad.png"></img>
                            <h3>{getMenuName(38, menu1)}</h3>
                            <h4>${getMenuPrice(38, menu)}</h4>
                            <img class="menuImg" src="/resource/marketSalad.png"></img>
                            <h3>{getMenuName(19, menu1)}</h3>
                            <h4>${getMenuPrice(19, menu)}</h4>
                            <img class="menuImg" src="/resource/sswSalad.png"></img>
                            <h3>{getMenuName(39, menu1)}</h3>
                            <h4>${getMenuPrice(39, menu)}</h4>
                        </div>
                    </div>
                </div>
                <div class="b">
                <br></br>

                    <h2>Drinks</h2>
                    <h1>...</h1>
                    <div class="s">
                        <div class="drinks">
                            <img class="menuImg" src="/resource/Screenshot 2023-04-12 095510.jpg"></img>
                            <h3>Freshly-Brewed Iced Tea</h3>
                            <h4>M: ${getMenuPrice(40, menu)} | L: ${getMenuPrice(41, menu)}</h4>
                            <br></br>
                            <h3>Chick-Fil-A Lemondade</h3>
                            <h4>M: ${getMenuPrice(15, menu)} | L: ${getMenuPrice(12, menu)}</h4>
                            <br></br>
                            <h3>Chick-Fil-A Sunjoy</h3>
                            <h4>M: ${getMenuPrice(44, menu)} | L: ${getMenuPrice(45, menu)}</h4>
                            <br></br>
                            <h3>Cold Brew Iced Coffee</h3>
                            <h4>${getMenuPrice(46, menu)}</h4>
                            <br></br>
                            <h3>Soft Drink</h3>
                            <h4>M: ${getMenuPrice(9, menu)} | L: ${getMenuPrice(43, menu)}</h4>
                            <h3>Bottled Water</h3>
                            <h4>$1.95</h4>
                            
                            
                        </div>
                    </div>
                </div>
                <div class="b">
                <br></br>

                    <h2>Treats</h2>
                    <h1>...</h1>
                    <div class="s">
                        <div class="Treats">
                            <img class="menuImg" src="/resource/desserts.jpeg"></img>
                            <h3>Hand-Spun Milkshakes</h3>
                            <h4>${getMenuPrice(22, menu)}</h4>
                            <h3>{getMenuName(47, menu1)}</h3>
                            <h4>${getMenuPrice(47, menu)}</h4>
                            <h3>{getMenuName(48, menu1)}</h3>
                            <h4>${getMenuPrice(48, menu)}</h4>
                            <h3>{getMenuName(49, menu1)}</h3>
                            <h4>${getMenuPrice(49, menu)}</h4>
                            <h3>{getMenuName(50, menu1)}</h3>
                            <h4>1ct: ${getMenuPrice(50, menu)}</h4>
                            <h3>{getMenuName(24, menu1)}</h3>
                            <h4>1ct: ${getMenuPrice(24, menu)}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bdy2'>
                <div class="sides">
                <h1>Sides</h1>
                <h1>...</h1>
                    <div className="sidewrapper">
                    <div class="side">
                        <img class="menuImg" src="/resource/waffleFry.png"></img>
                        <h3>{getMenuName(12, menu1)}</h3>
                        <h4>M: ${getMenuPrice(12, menu)}| L: ${getMenuPrice(52, menu)}</h4>
                    </div>
                    <div class="side">
                        <img class="menuImg" src="/resource/chips.png"></img>
                        <h3>{getMenuName(53, menu1)}</h3>
                        <h4>${getMenuPrice(53, menu)}</h4>
                    </div>
                    <div class="side">
                        <img class="menuImg" src="/resource/sideSalad.png"></img>
                        <h3>{getMenuName(55, menu1)}</h3>
                        <h4>${getMenuPrice(55, menu)}</h4>
                    </div>
                    <div class="side">
                        <img class="menuImg" src="/resource/Fruit-Cup.png"></img>
                        <h3>{getMenuName(54, menu1)}</h3>
                        <h4>${getMenuPrice(54, menu)}</h4>
                    </div>
                    </div>
                </div>
                <div className="seasonal_items">
                    <h1>Seasonal Items</h1>
                    <h1>...</h1>
                    {/* get items that were added */}
                    {items.map(function (i, idx) {
                        return (
                            <li key={idx}>
                                {i.menu_item_name} .... ${i.menu_item_price}
                            </li>
                        );
                    })}
                </div>
            </div>
            <br></br>


        </>
    );
}
