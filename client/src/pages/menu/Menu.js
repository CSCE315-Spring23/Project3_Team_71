import React, { useEffect, useState } from "react";
import "../../css/menu.css";

export default function Menu() {
    const [items, newItems] = useState([]);
    
    useEffect(() => {
        const handleNewItems = async () => {

            const res = await fetch("http://localhost:3001/newMenuItems");
            const getdata= await res.json();
            newItems(getdata);
            console.log(getdata);
          };
          handleNewItems();
      }, []);
    
      console.log(items);



  return (
    <>
    {/* <header><h1>Menu</h1></header> */}
    <div class = "bdy">
        <div class = "b1">
            <h2>Entrees & Meals</h2>
            <h1>...</h1>
            <br></br>
            <div class = "s1">
                <div class="sandwich1">
                    <img src="/resource/CFASandwich.png"></img> 
                    <h3>
                        Chick-fil-A Chicken Sandwich
                    </h3>
                    <h4> $8.09 Meal  | $4.49 Entree</h4>
                    <br></br>
                    <img src="/resource/DeluxeSandwich.png"></img>
                    <h3>
                        Chick-fil-A Deluxe Sandwich
                    </h3>
                    <h4> $8.79 Meal  | $5.19 Entree</h4>

                    <img src="/resource/CFASpicySandwich.png"></img>
                    <h3>
                        Spicy Chicken Sandwich 
                    </h3>
                    <h4> $8.39 Meal  | $4.89 Entree</h4>
                    <img src="/resource/Spicy-Deluxe-Sandwich.png"></img>
                    <h3>
                        Spicy Deluxe Sandwich
                    </h3>
                    <h4> $9.09 Meal  | $5.59 Entree</h4>
                </div>
                <div class = "sandwich2">
                    <img src="/resource/Grilled-Deluxe-Sandwich_1085.png"></img>
                    <h3>
                        Grilled Chicken Sandwich
                    </h3>
                    <h4> $9.89 Meal  | $6.15 Entree</h4>
                    <img src="/resource/grilledClub_colbyJack.png"></img>
                    <h3>
                        Grilled Chicken Club Sandwich
                    </h3>
                    <h4> $11.49 Meal  | $7.79 Entree</h4>
                    <img src="/resource/wrap.png"></img>
                    <h3>
                        Grilled Chicken Cool Wrap
                    </h3>
                    <h4> $10.99 Meal  | $7.45 Entree</h4>
                    <img src="/resource/nuggets_8ct.png"></img>
                    <h3>
                        Chick-fil-A Nuggets
                    </h3>
                    <h4> 8ct: $8.09 Meal  | $4.55 Entree</h4>
                    <h4> 12ct: $9.85 Meal  | $6.29 Entree</h4>
                    <img src="/resource/grilledNuggets_8ct.png"></img>
                    <h3>
                        Grilled Nuggets
                    </h3>
                    <h4> 8ct: $8.99 Meal  | $5.35 Entree</h4>
                    <h4> 12ct: $11.25 Meal  | $7.69 Entree</h4>
                </div>
            </div>
        </div> 
        <div class = "b">
            <h2>Salads</h2>
            <h1>...</h1>
            <br></br>
            <div class = "s">
                <div class = "salads">
                    <img src="/resource/cobbSalad.png"></img>
                    <h3>
                        Cobb
                    </h3>
                    <h4>$9.25</h4>
                    <img src="/resource/marketSalad.png"></img>
                    <h3>
                        Market
                    </h3>
                    <h4>$9.45</h4>
                    <img src="/resource/sswSalad.png"></img>
                    <h3>
                        Spicy Southwest
                    </h3>
                    <h4>$9.45</h4>
                </div>
            </div>
        </div>
        <div class = "b">
            <h2>Drinks</h2>
            <h1>...</h1>
            <br></br>
            <div class = "s">
                <div class = "drinks">
                    <img src="/resource/tea.png"></img>
                    <h3>
                        Freshly-Brewed Iced Tea
                    </h3>
                    <h4>M: $2.09 | L: $2.39</h4>
                    <img src="/resource/lemonade.png"></img>
                    <h3>
                        Chick-Fil-A Lemondade
                    </h3>
                    <h4>M: $2.39 | L: $2.89</h4>
                    <img src="/resource/sunjoy.png"></img>
                    <h3>
                        Chick-Fil-A Sunjoy
                    </h3>
                    <h4>M: $2.39 | L: $2.89</h4>
                    <br></br>
                    <h3>
                        Soft Drink
                    </h3>
                    <h4>M: $1.99 | L: $2.45</h4>
                    <br></br>
                    <h3>
                        Bottled Water
                    </h3>
                    <h4>$1.95</h4>
                    <br></br>
                    <img src="/resource/2022IcedCoffee.png"></img>
                    <h3>
                        Cold Brew Iced Coffee
                    </h3>
                    <h4>$3.09</h4>
                </div>
            </div>
        </div>
        <div class = "b">
            <h2>Treats</h2>
            <h1>...</h1>
            <br></br>
            <div class = "s">
                <div class = "Treats">
                    <img src="/resource/VanillaMilkshake-1080.png"></img>
                    <h3>
                        Hand-Spun Milkshakes
                    </h3>
                    <h4>$4.19</h4>
                    <img src="/resource/Frosted-Lemonade.png"></img>
                    <h3>
                        Frosted Lemonade
                    </h3>
                    <h4>$4.09</h4>
                    <img src="/resource/Frosted-Coffee.png"></img>
                    <h3>
                        Frosted Coffee
                    </h3>
                    <h4>$4.09</h4>
                    <img src="/resource/Ice-Dream.png"></img>
                    <h3>
                        Icedream Cone
                    </h3>
                    <h4>$1.65</h4>
                    <img src="/resource/031717_FudgeChunkBrownie_PDP.png"></img>
                    <h3>
                        Chocolate Fudge Cookie
                    </h3>
                    <h4>1ct: $2.09</h4>
                    <img src="/resource/CCCookie.png"></img>
                    <h3>
                        Chocolate Chunk Cookie
                    </h3>
                    <h4>1ct: $1.49</h4>
                </div>
            </div>
        </div>  
       
    </div>
    <h1>Sides</h1>
    <h1>...</h1>
    <div class="sides">
        
        <br></br>
        <div class = "side">
            <img src="/resource/waffleFry.png"></img>
            <h3>
                Waffle Fries
            </h3>
            <h4>M: $2.29| L: $2.69</h4>
        </div>
        <div class = "side">
            <img src="/resource/chips.png"></img>
            <h3>
                Chips
            </h3>
            <h4>$1.99</h4>
        </div>
        <div class = "side">
            <img src="/resource/sideSalad.png"></img>
            <h3>
                Side Salad
            </h3>
            <h4>$3.79</h4>
        </div>
        <div class = "side">
            <img src="/resource/Fruit-Cup.png"></img>
            <h3>
                Fruit Cup
            </h3>
            <h4>$3.79</h4>
        </div>
    </div>
    <br></br><br></br>
    <div>
        
        <h1>
            Seasonal Items
        </h1>
        <h1>...</h1>
        {/* get items that were added */}
        {items.map(function(i,idx) {
            return (<li key={idx}>{i.menu_item_name} .... ${i.menu_item_price}</li>)
        })}
    </div>
  
    </>
  )
}
