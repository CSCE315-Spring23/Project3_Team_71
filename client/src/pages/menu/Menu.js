import React, { useEffect, useState } from "react";
import "../../css/menu.css";


export default function Menu() {

    function myFunction() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      
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

    console.log(items);

    return (
        <>
            {/* <header><h1>Menu</h1></header> */}
            <div class="bdy">
                <div class="b1">
                    <h2>Entrees & Meals</h2>
                    <h1>...</h1>
                    <div class="s1">
                        <div class="sandwich1">
                            <img
                                class="menuImg" src="/resource/sand.jpg"
                                alt="Chick-fil-A Chicken Sandwich"
                            ></img>
                            <h3>Chick-fil-A Chicken Sandwich</h3>
                            <h4> $8.09 Meal | $4.49 Entree</h4>
                            <br></br>

                            <h3>Chick-fil-A Deluxe Sandwich</h3>
                            <h4> $8.79 Meal | $5.19 Entree</h4>

                            <img class="menuImg" src="/resource/spicysSand.jpg"></img>
                            <h3>Spicy Chicken Sandwich</h3>
                            <h4> $8.39 Meal | $4.89 Entree</h4>
                            <br></br>

                            {/* <img class= "menuImg" src="/resource/Spicy-Deluxe-Sandwich.png"></img> */}
                            <h3>Spicy Deluxe Sandwich</h3>
                            <h4> $9.09 Meal | $5.59 Entree</h4>
                        </div>
                        <div class="sandwich2">
                            <img class="menuImg" src="/resource/grilledsand.jpg"></img>
                            <h3>Grilled Chicken Sandwich</h3>
                            <h4> $9.89 Meal | $6.15 Entree</h4>
                            <br></br>
                            <h3>Grilled Chicken Club Sandwich</h3>
                            <h4> $11.49 Meal | $7.79 Entree</h4>
                            <img class="menuImg" src="/resource/nuggs.jpg"></img>
                            <h3>Chick-fil-A Nuggets</h3>
                            <h4> 8ct: $8.09 Meal | $4.55 Entree</h4>
                            <h4> 12ct: $9.85 Meal | $6.29 Entree</h4>
                            <br></br>
                            {/* <img class= "menuImg" src="/resource/grilledNuggets_8ct.png"></img> */}
                            <h3>Grilled Nuggets</h3>
                            <h4> 8ct: $8.99 Meal | $5.35 Entree</h4>
                            <h4> 12ct: $11.25 Meal | $7.69 Entree</h4>
                        </div>
                    </div>
                </div>
                <div class="b">
                    <h2>Salads</h2>
                    <h1>...</h1>
                    <div class="s">
                        <div class="salads">
                            <img class="menuImg" src="/resource/wrap.png"></img>
                            <h3>Grilled Chicken Cool Wrap</h3>
                            <h4> $10.99 Meal | $7.45 Entree</h4>
                            <img class="menuImg" src="/resource/cobbSalad.png"></img>
                            <h3>Cobb</h3>
                            <h4>$9.25</h4>
                            <img class="menuImg" src="/resource/marketSalad.png"></img>
                            <h3>Market</h3>
                            <h4>$9.45</h4>
                            <img class="menuImg" src="/resource/sswSalad.png"></img>
                            <h3>Spicy Southwest</h3>
                            <h4>$9.45</h4>
                        </div>
                    </div>
                </div>
                <div class="b">
                    <h2>Drinks</h2>
                    <h1>...</h1>
                    <div class="s">
                        <div class="drinks">
                            <img class="menuImg" src="/resource/Screenshot 2023-04-12 095510.jpg"></img>
                            <h3>Freshly-Brewed Iced Tea</h3>
                            <h4>M: $2.09 | L: $2.39</h4>
                            <h3>Chick-Fil-A Lemondade</h3>
                            <h4>M: $2.39 | L: $2.89</h4>
                            <h3>Chick-Fil-A Sunjoy</h3>
                            <h4>M: $2.39 | L: $2.89</h4>
                            <br></br>
                            <h3>Soft Drink</h3>
                            <h4>M: $1.99 | L: $2.45</h4>
                            <br></br>
                            <h3>Bottled Water</h3>
                            <h4>$1.95</h4>
                            <br></br>
                            <h3>Cold Brew Iced Coffee</h3>
                            <h4>$3.09</h4>
                        </div>
                    </div>
                </div>
                <div class="b">
                    <h2>Treats</h2>
                    <h1>...</h1>
                    <div class="s">
                        <div class="Treats">
                            <img class="menuImg" src="/resource/desserts.jpeg"></img>
                            <h3>Hand-Spun Milkshakes</h3>
                            <h4>$4.19</h4>
                            <h3>Frosted Lemonade</h3>
                            <h4>$4.09</h4>
                            <h3>Frosted Coffee</h3>
                            <h4>$4.09</h4>
                            <h3>Icedream Cone</h3>
                            <h4>$1.65</h4>
                            <h3>Chocolate Fudge Cookie</h3>
                            <h4>1ct: $2.09</h4>
                            <h3>Chocolate Chunk Cookie</h3>
                            <h4>1ct: $1.49</h4>
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
                        <h3>Waffle Fries</h3>
                        <h4>M: $2.29| L: $2.69</h4>
                    </div>
                    <div class="side">
                        <img class="menuImg" src="/resource/chips.png"></img>
                        <h3>Chips</h3>
                        <h4>$1.99</h4>
                    </div>
                    <div class="side">
                        <img class="menuImg" src="/resource/sideSalad.png"></img>
                        <h3>Side Salad</h3>
                        <h4>$3.79</h4>
                    </div>
                    <div class="side">
                        <img class="menuImg" src="/resource/Fruit-Cup.png"></img>
                        <h3>Fruit Cup</h3>
                        <h4>$3.79</h4>
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
            <br></br>

        </>
    );
}
