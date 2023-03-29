import React, { useEffect, useState } from "react";

const Manager = () => {

    const [weather, setWeather] = useState("");

    useEffect(() => {
        const getWeather = async () => {
            const res = await fetch("http://localhost:3001/weather/30.6280/-96.3344");
            const data = await res.json();

            setWeather(data);
        };


        getWeather();
    }, []);

    return <div>{JSON.stringify(weather, null, 2)}</div>;
};

export default Manager;
