import React, { useEffect, useState } from "react";
import "../../css/menu.css";

export default function Menu() {
  return (
    <>
    {/* <header><h1>Menu</h1></header> */}
    <div class = "bdy">
        <div class = "b1">
            <h2>Entrees & Meals</h2>
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

                    <img src="/resource/CFASpicySandwich.png"></img>
                    <h3>
                        Spicy Chicken Sandwich 
                    </h3>
                    <img src="/resource/Spicy-Deluxe-Sandwich.png"></img>
                    <h3>
                        Spicy Deluxe Sandwich
                    </h3>
                </div>
                <div class = "sandwich2">
                    <img src="/resource/Grilled-Deluxe-Sandwich_1085.png"></img>
                    <h3>
                        Grilled Chicken Sandwich
                    </h3>
                    <img src="/resource/grilledClub_colbyJack.png"></img>
                    <h3>
                        Grilled Chicken Club Sandwich
                    </h3>
                    <img src="/resource/wrap.png"></img>
                    <h3>
                        Grilled Chicken Cool Wrap
                    </h3>
                    <img src="/resource/nuggets_8ct.png"></img>
                    <h3>
                        Chick-fil-A Nuggets
                    </h3>
                    <img src="/resource/grilledNuggets_8ct.png"></img>
                    <h3>
                        Grilled Nuggets
                    </h3>
                </div>
            </div>
        </div> 
        <div class = "b">
            <h2>Salads</h2>
            <div class = "s2">
                <div class = "salads">
                    <img src="/resource/cobbSalad.png"></img>
                    <h3>
                        Cobb
                    </h3>
                    <img src="/resource/marketSalad.png"></img>
                    <h3>
                        Market
                    </h3>
                    <img src="/resource/sswSalad.png"></img>
                    <h3>
                        Spicy Southwest
                    </h3>
                </div>
            </div>
        </div>
        <div class = "b">
            <h2>Drinks</h2>
            <div class = "s3">
                <div class = "drinks">
                    <img src="/resource/tea.png"></img>
                    <h3>
                        Freshly-Brewed Iced Tea
                    </h3>
                    <img src="/resource/lemonade.png"></img>
                    <h3>
                        Chick-Fil-A Lemondade
                    </h3>
                    <img src="/resource/sunjoy.png"></img>
                    <h3>
                        Chick-Fil-A Sunjoy
                    </h3>
                    <h3>
                        Soft Drink
                    </h3>
                    <h3>
                        Bottled Water
                    </h3>
                    <img src="/resource/2022IcedCoffee.png"></img>
                    <h3>
                        Cold Brew Iced Coffee
                    </h3>
                </div>
            </div>
        </div>
        <div class = "b">
            <h2>Treats</h2>
            <div class = "s4">
                <div class = "Treats">
                    <img src="/resource/VanillaMilkshake-1080.png"></img>
                    <h3>
                        Hand-Spun Milkshakes
                    </h3>
                    <img src="/resource/Frosted-Lemonade.png"></img>
                    <h3>
                        Frosted Lemonade
                    </h3>
                    <img src="/resource/Frosted-Coffee.png"></img>
                    <h3>
                        Frosted Coffee
                    </h3>

                    <img src="/resource/Ice-Dream.png"></img>
                    <h3>
                        Icedream Cone
                    </h3>
                    <img src="/resource/031717_FudgeChunkBrownie_PDP.png"></img>
                    <h3>
                        Chocolate Fudge Cookie
                    </h3>
                    <img src="/resource/CCCookie.png"></img>
                    <h3>
                        Chocolate Chunk Cookie
                    </h3>
                </div>
            </div>
        </div>  
       
    </div>
    <div>
        <h1>
            Seasonal Items
        </h1>
        {/* get items that were added */}
    </div>
  
    </>
  )
}
