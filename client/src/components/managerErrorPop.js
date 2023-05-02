import React, { useEffect, useState } from "react";
import "../css/ad.css";
const ManagerPop = ({ stringID, handleClick, setManagerPop, menu, handleClickExtra,handleComplete }) => {

    useEffect(() => {
        
        // set a timeout to close the popup after 5 seconds
        const timeout = setTimeout(() => {
          setManagerPop(false);
          handleComplete();
        }, 10000);
    
        return () => clearTimeout(timeout); // cleanup function to clear the timeout on unmount
      }, [stringID, setWeatherPop]);

  function handleClicker(event) {
    console.log(event.target.closest("button").id);
    handleClick(event);
    setWeatherPop(false);
  }

  return (
    <>
      <div id="adwrap">
      <div className="heading">
                    <h2>
                        Its kinda hot today, Do you want to add a lemonade to your order?
                    </h2>
                    <img
                            src="/resource/lemonade.png"
                            alt="Chick-Fil-A Lemondade"
                            className="item-image-customer"
                        />
                </div>
                <div className="new-btn-container">
                    <button
                        className="btn-new"
                        id={"leml"}
                        onClick={(event) => { handleClick(event);handleComplete(); setWeatherPop(false)}}
                    >
                        Yes
                    </button>
                    <button
                        className="btn-new"
                        id={stringID}
                        onClick={ () =>{handleComplete(); setWeatherPop(false)}}
                    >
                        No
                    </button>
                </div>
      </div>
    </>
  );
};

export default ManagerPop;
