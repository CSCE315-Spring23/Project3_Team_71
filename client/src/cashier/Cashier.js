import React, { useEffect, useState } from "react";


const Cashier = () => {
    const [menu, setMenu] = useState("");

    useEffect(() => {
        const getMenu = async () => {
            const res = await fetch("http://localhost:3001/menu");
            const data = await res.json();

            setMenu(data);
        };

        getMenu();
    }, []);
    return (
        <div>
            <h1>{JSON.stringify(menu, null, 2)}</h1>
        </div>
    );
};

export default Cashier;
