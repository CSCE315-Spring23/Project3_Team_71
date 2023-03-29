import "./css/App.css";
import React, { useEffect, useState } from 'react';


function App() {

    const [weather, setWeather] = useState('');
    const [menu, setMenu] = useState('');

    useEffect(() => {
        const getWeather = async () => {
            const res = await fetch('http://localhost:3001/weather/30/30');
            const data = await res.json();

            setWeather(data);
        };

        const getMenu = async () => {
            const res = await fetch('http://localhost:3001/menu');
            const data = await res.json();

            setMenu(data);
        }
        
        getMenu();
        getWeather();
    }, []);



    return (
        <div className="App">
            <header className="App-header">
                <h1>{JSON.stringify(menu, null, 2)}</h1>
                <p>
                    {JSON.stringify(weather, null, 2)}
                </p>
            </header>
        </div>
    );
}

export default App;
