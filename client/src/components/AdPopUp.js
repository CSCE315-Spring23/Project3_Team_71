import React from "react";
import "../css/ad.css";
const AdPopUp = ({ stringID, handleClick, setAdPopUp, showAd }) => {
    return (
        <>
            <div id="adwrap">
                <button className="btn-new right"
                    onClick={(event) => {
                        setAdPopUp(false);
                    }}
                >
                    Exit
                </button>

                <div className="heading">
                    <h2>Add Sauce</h2>
                </div>


                <div className="button-row-cashier">
                    <button
                        className="btn-sauce"
                        id="cfaS"
                        onClick={handleClick}
                    >
                        <img
                            src="/resource/Sauce_CFA-Sauce_Desk.png"
                            alt="Chick-Fil-A Sauce"
                            className="btn-img-cashier-sauce1"
                        />
                        <h4>Chick-fil-A Sauce</h4>
                    </button>
                    <button
                        className="btn-sauce"
                        id="pS"
                        onClick={handleClick}
                    >
                        <img
                            src="/resource/Sauce_Polynesian_Desk.png"
                            alt="Polynesian Sauce"
                            className="btn-img-cashier-sauce1"
                        />
                        <h4>Polynesian Sauce</h4>
                    </button>
                    <button
                        className="btn-sauce"
                        id="hmS"
                        onClick={handleClick}
                    >
                        <img
                            src="/resource/Sauce_Honey-Mustard_Desk.png"
                            alt="Honey Mustard Sauce"
                            className="btn-img-cashier-sauce1"
                        />
                        <h4>Honey Mustard Sauce</h4>
                    </button>
                    <button
                        className="btn-sauce"
                        id="ghrS"
                        onClick={handleClick}
                    >
                        <img
                            src="/resource/Sauce_Garden-Herb-Ranch_Desk.png"
                            alt="Garden Herb Ranch Sauce"
                            className="btn-img-cashier-sauce1"
                        />
                        <h4>Garden Herb Ranch Sauce</h4>
                    </button>
                </div>
                <div className="button-row-cashier">
                    <button
                        className="btn-sauce"
                        id="bqS"
                        onClick={handleClick}
                    >
                        <img
                            src="/resource/Sauce_Barbeque_Desk.png"
                            alt="Barbeque Sauce"
                            className="btn-img-cashier-sauce1"
                        />
                        <h4>Barbeque Sauce</h4>
                    </button>
                    <button
                        className="btn-sauce"
                        id="zbS"
                        onClick={handleClick}
                    >
                        <img
                            src="/resource/Sauce_Zesty-Buffalo_Desk.png"
                            alt="Zesty Buffalo Sauce"
                            className="btn-img-cashier-sauce1"
                        />
                        <h4>Zesty Buffalo Sauce</h4>
                    </button>
                    <button
                        className="btn-sauce"
                        id="srS"
                        onClick={handleClick}
                    >
                        <img
                            src="/resource/Sauce_Sweet-and-Spicy-Sriracha_Desk.png"
                            alt="Sweet and Spicy Sriracha Sauce"
                            className="btn-img-cashier-sauce1"
                        />
                        <h4>Sweet and Spicy Sriracha Sauce</h4>
                    </button>
                    <button
                        className="btn-sauce"
                        id="hbqS"
                        onClick={handleClick}
                    >
                        <img
                            src="/resource/Honey-Roasted-BBQ.png"
                            alt="Honey Roasted BBQ Sauce"
                            className="btn-img-cashier-sauce1"
                        />
                        <h4>Honey Roasted BBQ Sauce</h4>
                    </button>
                </div>

                <br />
                {showAd && (
                    <div>
                        <div className="heading">
                            <h2>Do you want to make this a Meal?</h2>
                        </div>
                        <div className="new-btn-container">
                            <button
                                className="btn-new big"
                                id={stringID + "meal"}
                                onClick={(event) => {
                                    handleClick(event);
                                    setAdPopUp(false);
                                }}
                            >
                                Yes
                            </button>
                            <button
                                className="btn-new big"
                                id={stringID}
                                onClick={(event) => {
                                    handleClick(event);
                                    setAdPopUp(false);
                                }}
                            >
                                No
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default AdPopUp;
