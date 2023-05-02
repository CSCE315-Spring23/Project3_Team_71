import React, { useEffect, useState } from "react";
import "../css/ad.css";
const AdPopUp = ({ stringID, handleClick, setAdPopUp, menu, handleClickExtra, showAd }) => {

    const [sauceMenu, setSauceMenu] = useState([]);
    
    useEffect(() => {
        setSauceMenu(
            Object.keys(menu)
                .slice(49, 58)
                .map((key) => ({
                    menuID: key,
                    price: menu[key][0],
                    name: menu[key][1],
                }))
        );
    }, [menu]);

    useEffect(() => {
        console.log(stringID);
    }, [stringID]);

    function handleClicker(event) {
        console.log(event.target.closest("button").id);
        handleClick(event);
        setAdPopUp(false);
    }

    return (
        <>
            <div id="adwrap">
                
                <div className ="exit">
                <button
                        onClick={(event) => {setAdPopUp(false)}}
                    >
                        Exit
                    </button>
                </div>
                {showAd && (<div>
                <div className="heading">
                    <h2>
                        Do you want to make this a meal? Do it... you know you
                        want to
                    </h2>
                </div>
                <div className="new-btn-container">
                    <button
                        className="btn-new"
                        id={stringID + "meal"}
                        onClick={(event) => { handleClick(event); setAdPopUp(false)}}
                    >
                        Yes
                    </button>
                    <button
                        className="btn-new"
                        id={stringID}
                        onClick={(event) => { handleClick(event); setAdPopUp(false)}}
                    >
                        No
                    </button>
                </div>
                </div>)}
                {sauceMenu.map((button, index) => (
                    <button
                        className="btn-cashier"
                        key={index}
                        id={button.menuID}
                        onClick={(event) => handleClickExtra(event)}
                    >
                        <h2>{button.name}</h2>
                    </button>
                ))}
            </div>
        </>
    );
};

export default AdPopUp;