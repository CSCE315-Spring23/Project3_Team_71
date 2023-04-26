import React, { useEffect } from "react";
import "../css/ad.css";
const AdPopUp = (stringID, handleClick, setAdPopUp) => {
    const mealid = stringID.stringID + "meal";

    function handleClicker (event) {
        console.log(event.target.closest('button').id)
        stringID.handleClick(event);
        stringID.setAdPopUp(false);
    }
    
    return (
        <>
        <div id="adwrap">
            <div className="heading">
            <h2>Do you want to make this a meal? Do it... you know you want to</h2>
            </div>
            <div className="new-btn-container">
            <button
                className="btn-new"
                type="submit"
                name="completed"
                value=""
                id = {mealid}
                onClick={handleClicker}
            >Yes</button>
            <button
                className="btn-new"
                type="submit"
                name="completed"
                value=""
                id = {stringID.stringID}
                onClick={handleClicker}
            >No</button>
            </div>
        </div>
        </>
    );
};

export default AdPopUp;
