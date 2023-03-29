import React, { useEffect, useState } from "react";
import "../../css/Cashier.css"

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
            {/* <h1>{JSON.stringify(menu, null, 2)}</h1> */}

            <div className="button-row">
                <button>b1</button>
                <button>b2</button>
                <button>b3</button>
                <button>b4</button>
                <button>b5</button>
            </div>
        </div>
    );
};

export default Cashier;
