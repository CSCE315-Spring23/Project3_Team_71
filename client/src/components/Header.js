import "../css/Header.css";
import React, { useEffect, useState } from "react";

const apiKey =  '60ea3e0d4ae18a97f73bdcd78fc41e8d';;

const Header = ({ user, HandleSignOut }) => {
    
    /**
    *
    * A state hook that represents the latitude of a location.
    * @type {Array} An array containing the current state value of latitude and a function to update it.
    */
    const [lat, setLat] = useState([]);

    /**
    *
    * A state hook that represents the longitude of a location.
    * @type {Array} An array containing the current state value of latitude and a function to update it.
    */
    const [long, setLong] = useState([]);

    /**
    * A state hook that represents the temperature of a location.
    * 
    * @type {string} An string containing the current state value of temperature and a function to update it.
    */
    const [temp, setTemp] = useState("");

    /**
    *
    * A state hook that represents the icon of a location.
    * @type {string} An string containing the current state value of icon and a function to update it.
    */
    const [icon, setIcon] = useState("");

    /**
    * Fetches weather data from OpenWeatherMap API based on latitude and longitude and updates the temperature and icon state variables
    * 
    * @returns {void}
    */
    useEffect(() => {
        const weather = async () => {
            await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=30.621&lon=-96.34&units=imperial&appid=${apiKey}`)
            .then((res) => res.json())
            .then( (result) =>  {
                setTemp(result.main.temp);
                setIcon(`https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`);
            });  
        };
        weather();       
    },[]);


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
                    <div className="weatherDisplay">
                        <img
                            className="weatherIcon"
                            src={icon}
                            alt="current temperature icon"
                        ></img>
                        <div className="weather-temp">{temp}°F</div>
                    </div>
                </div>
                <div className="h2">
                    <nav>
                        <ul>
                            <li>
                                {Object.keys(user).length !== 0 && (
                                    <button
                                        className="login"
                                        onClick={(e) => HandleSignOut(e)}
                                    >
                                        Sign Out
                                    </button>
                                )}
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
