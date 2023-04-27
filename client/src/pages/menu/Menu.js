import React, { useEffect, useState, useRef } from "react";
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
    const bdy = useRef(null);

    const handleFullscreen = () => {
        if (bdy.current) {
            if (bdy.current.requestFullscreen) {
                bdy.current.requestFullscreen();
            } else if (bdy.current.webkitRequestFullscreen) {
                bdy.current.webkitRequestFullscreen();
            } else if (bdy.current.msRequestFullscreen) {
                bdy.current.msRequestFullscreen();
            }
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Enter") {
                handleFullscreen();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    console.log(items);

    return (
        <>
            {/* <header><h1>Menu</h1></header> */}
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Montserrat:wght@300&display=swap');
            </style>
            {/* <button onclick={toggleFullScreen}>Open Fullscreen</button> */}

            <div className="bdy" ref={bdy} allow="fullscreen">


                <div className="b1" >
                    <br></br>

                    <h2>Entrees & Meals</h2>
                    <svg width="400" height="110">
                        <rect width="50%" height="15%" />
                    </svg>
                    <div className="s1">
                        <div className="sandwich1">
                            <div className="containerR">
                                <img
                                    className="menuImg" src="/resource/sand.png"
                                    alt="Chick-fil-A Chicken Sandwich"
                                ></img>
                                <div className="rhs">
                                    <h3>{getMenuName(1, menu1)}</h3>
                                    <h4> ${getMenuPrice(25, menu)} Meal | ${getMenuPrice(1, menu)} Entree</h4>
                                    <br></br>
                                    <h3>{getMenuName(2, menu1)}</h3>
                                    <h4> ${getMenuPrice(26, menu)} Meal | ${getMenuPrice(2, menu)} Entree</h4>
                                </div>
                            </div>
                            <br></br>
                            <div className="containerL">
                                <img className="menuImg" src="/resource/spicysSand.jpg"></img>
                                <div className="lhs">
                                    <h3>{getMenuName(3, menu1)}</h3>
                                    <h4> ${getMenuPrice(27, menu)} Meal | ${getMenuPrice(3, menu)} Entree</h4>
                                    <br></br>
                                    <h3>{getMenuName(4, menu1)}</h3>
                                    <h4> ${getMenuPrice(28, menu)} Meal | ${getMenuPrice(4, menu)} Entree</h4>
                                </div>
                            </div>
                            <br></br>
                            <div className="containerR">
                                <img className="menuImg" src="/resource/gsand.png"></img>
                                <div className="rhs">
                                    <h3>{getMenuName(18, menu1)}</h3>
                                    <h4> ${getMenuPrice(29, menu)} Meal | ${getMenuPrice(18, menu)} Entree</h4>
                                    <br></br>
                                    <h3>{getMenuName(34, menu1)}</h3>
                                    <h4> ${getMenuPrice(35, menu)} Meal | ${getMenuPrice(34, menu)} Entree</h4>
                                </div>
                            </div>
                            <br></br>

                            <div className="containerL">
                                <img className="menuImg" src="/resource/nuggs.jpg"></img>
                                <div className="lhs">
                                    <h3>{getMenuName(6, menu1)}</h3>
                                    <h4> 8ct: ${getMenuPrice(30, menu)} Meal | ${getMenuPrice(6, menu)} Entree</h4>
                                    <h4> 12ct: ${getMenuPrice(31, menu)} Meal | ${getMenuPrice(7, menu)} Entree</h4>
                                    <br></br>
                                    <h3>{getMenuName(16, menu1)}</h3>
                                    <h4> 8ct: ${getMenuPrice(32, menu)} Meal | ${getMenuPrice(16, menu)} Entree</h4>
                                    <h4> 12ct: ${getMenuPrice(33, menu)} Meal | ${getMenuPrice(17, menu)} Entree</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rhs-menu">
                    <div className="uppermenu">
                        <div className="b">
                            <br></br>

                            <h2>Salads</h2>
                            <svg width="400" height="110">
                                <rect width="50%" height="15%" />
                            </svg>
                            <div className="s">
                                <div className="salads">
                                    <div className="containerR">
                                        <img className="menuImg" src="/resource/wrap1.png"></img>
                                        <div className="rhs1">
                                            <h3>{getMenuName(36, menu1)}</h3>
                                            <h4> ${getMenuPrice(36, menu)} Meal | ${getMenuPrice(37, menu)} Entree</h4>
                                        </div>
                                    </div>
                                    <br></br>

                                    <div className="containerL">
                                        <img className="menuImg" src="/resource/marketSalad2.png"></img>
                                        <div className="rhs">
                                            <br></br>
                                            <h3>{getMenuName(38, menu1)}</h3>
                                            <h4>${getMenuPrice(38, menu)}</h4>
                                            <br></br>
                                            <h3>{getMenuName(19, menu1)}</h3>
                                            <h4>${getMenuPrice(19, menu)}</h4>
                                            <br></br>
                                            <h3>{getMenuName(39, menu1)}</h3>
                                            <h4>${getMenuPrice(39, menu)}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="b">
                            <br></br>
                            <h2>Drinks</h2>
                            <svg width="400" height="110">
                                <rect width="50%" height="15%" />
                            </svg>
                            <div className="s">
                                <div className="drinks">
                                    <div className="containerR1">
                                        <img className="menuImg" src="/resource/Screenshot 2023-04-12 095510.jpg"></img>
                                        <div className="rhs">
                                            <h3>Freshly-Brewed Iced Tea</h3>
                                            <h4>M: ${getMenuPrice(40, menu)} | L: ${getMenuPrice(41, menu)}</h4>
                                            <br></br>
                                            <h3>Chick-Fil-A Lemondade</h3>
                                            <h4>M: ${getMenuPrice(15, menu)} | L: ${getMenuPrice(12, menu)}</h4>
                                            <br></br>
                                            <h3>Chick-Fil-A Sunjoy</h3>
                                            <h4>M: ${getMenuPrice(44, menu)} | L: ${getMenuPrice(45, menu)}</h4>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className="lhs1">
                                        <h3>Cold Brew Iced Coffee</h3>
                                        <h4>${getMenuPrice(46, menu)}</h4>
                                        <br></br>
                                        <h3>Soft Drink</h3>
                                        <h4>M: ${getMenuPrice(9, menu)} | L: ${getMenuPrice(43, menu)}</h4>
                                        <br></br>
                                        <h3>Bottled Water</h3>
                                        <h4>$1.95</h4>
                                        <br></br>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="b">
                            <br></br>
                            <h2>Treats</h2>
                            <svg width="400" height="110">
                                <rect width="50%" height="15%" />
                            </svg>
                            <div className="s">
                                <div className="Treats">
                                    <div className="containerL1">
                                        <img className="menuImg1" src="/resource/desserts-removebg.png"></img>
                                        <div classname="lhs">
                                            <h3>Hand-Spun Milkshakes</h3>
                                            <h4>${getMenuPrice(22, menu)}</h4>
                                            <br></br>
                                            <h3>{getMenuName(47, menu1)}</h3>
                                            <h4>${getMenuPrice(47, menu)}</h4>
                                            <br></br>

                                            <h3>{getMenuName(48, menu1)}</h3>
                                            <h4>${getMenuPrice(48, menu)}</h4>
                                            <br></br>

                                        </div>
                                    </div>
                                    <div className="lhs">
                                        <h3>{getMenuName(49, menu1)}</h3>
                                        <h4>${getMenuPrice(49, menu)}</h4>
                                        <br></br>
                                        <h3>{getMenuName(50, menu1)}</h3>
                                        <h4>1ct: ${getMenuPrice(50, menu)}</h4>
                                        <br></br>
                                        <h3>{getMenuName(24, menu1)}</h3>
                                        <h4>1ct: ${getMenuPrice(24, menu)}</h4>
                                        <br></br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className='bdy2'> */}
                    <div className="lowermenu">
                        <div className="sidewrapper">
                            <div className="sidesTitle">
                                <h1>Sides</h1>
                                <svg width="400" height="110">
                                    <rect width="50%" height="15%" />
                                </svg>
                            </div>
                            <div className="containerR1">
                                <img className="menuImg" src="/resource/sides.png"></img>
                                <div className="lhs">
                                    <h3>{getMenuName(12, menu1)}</h3>
                                    <h4>M: ${getMenuPrice(12, menu)}| L: ${getMenuPrice(52, menu)}</h4>
                                    <br></br>
                                    <h3>{getMenuName(53, menu1)}</h3>
                                    <h4>${getMenuPrice(53, menu)}</h4>
                                </div>
                                <div className="lhs">
                                    <h3>{getMenuName(55, menu1)}</h3>
                                    <h4>${getMenuPrice(55, menu)}</h4>
                                    <br></br>
                                    <h3>{getMenuName(54, menu1)}</h3>
                                    <h4>${getMenuPrice(54, menu)}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="sidewrapper">
                            <div className="seasonal-items">
                                <h1>Seasonal Items</h1>
                                <svg width="400" height="110">
                                    <rect width="50%" height="15%" />
                                </svg>
                                <div className="item-list">
                                    {/* get items that were added */}
                                    {items.map(function (i, idx) {
                                        return (
                                            <h3>
                                                <li key={idx}>
                                                    {i.menu_item_name} .... ${i.menu_item_price}
                                                </li>
                                            </h3>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
            <br></br>


        </>
    );
}
