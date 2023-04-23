import "../css/Header.css";
import React, { useEffect, useState } from "react";


const Header = ({ user, HandleSignOut }) => {

    const [weather, setWeather] = useState("");
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    useEffect(() => {
        const fetchData = async () => {
          navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
          });
    
        await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&units=imperial&appid=${apiKey}`)
        .then((res) => res.json())
        .then((result) => {
            setData(result);
        });
        };
        fetchData();
    }, [lat,long])
      
    const weatherIcon = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`


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
                                <div className="weatherDisplay">
                                    {data.current.temp}°F
                                    <img className="weatherIcon" src={weatherIcon} alt="current temprature"></img>
                                </div>
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
