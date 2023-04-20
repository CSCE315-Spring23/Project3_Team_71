import "../css/Header.css";
import React, { useEffect, useState } from "react";


const Header = ({ user, HandleSignOut }) => {

    const [weather, setWeather] = useState("");
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
          });
    
          await fetch(`/weather/?lat=${lat}&lon=${long}&units=imperial&appid=8055724633e109d30c148d36ea2352b0`)
          .then(res => res.json())
          .then(result => {
            setData(result)
            console.log(result);
          });
        }
        fetchData();
      }, [lat,long])



    return (
        <div>
            <header className="header">
                <div className="h1">
                    <a href={`/`}>
                        <img
                            className="navImg"
                            src="../../resource/logo.png"
                        ></img>
                    </a>
                </div>
                <div className="h2">
                    <nav>
                        <ul>
                            <li>
                                {Object.keys(user).length !== 0 && (
                                    <button className="login" onClick={(e) => HandleSignOut(e)}>
                                        Sign Out
                                    </button>
                                )}
                            </li>
                            <li>
                                data
                            </li>
                            <li>
                                <a href={`/`}>Home</a>
                            </li>
                            <li>
                                <a href={`/cashier`}>Cashier</a>
                            </li>
                            <li>
                                <a href={`/manager`}>Manager</a>
                            </li>
                            <li>
                                <a href={`/customer`}>Customer</a>
                            </li>
                            <li>
                                <a href={`/menu`}>Menu</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;
