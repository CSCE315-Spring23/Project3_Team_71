import { useEffect } from "react";
import AdPopUp from "../components/AdPopUp";



export const CashierHelper = (
    curItems,
    menu,
    totalCost,
    setCurItems,
    setTotalCost
) => {
    const handleNewOrder = () => {
        setCurItems({});
        setTotalCost(0);
    };

    const handleInventory = async (key) => {
        const result3 = await fetch(`http://localhost:3001/recipe/${key}`);
        const data = await result3.json();

        data.forEach(async (item) => {
            console.log(item.inventory_id);
            const result4 = await fetch(
                `http://localhost:3001/updateInventory/${
                    curItems[key] * item.quantity
                }/${item.inventory_id}`
            );

            console.log(result4);
        });

        console.log("asgegege\n\n");
    };

    const handleComplete = async (z = "cashier") => {
        if(z == "customer"){
            console.log("IT KNOWS");
            
        }
        if (totalCost === 0) {
            console.log("no items bought");
            return;
        }
        
        const result = await fetch(
            `http://localhost:3001/addOrderItems/${totalCost}/${true}`
        );
        console.log(result);

        const lastID = await fetch("http://localhost:3001/lastOrderID");
        const data = await lastID.json();
        console.log(data[0].order_id);

        for (const key in curItems) {
            console.log(key, curItems[key]);
            const result2 = await fetch(
                `http://localhost:3001/createOrder/${data[0].order_id}/${key}/${curItems[key]}`
            );

            handleInventory(key);
        }

        handleNewOrder();
    };

    const handleClickExtra = (event) => {
        var bID = event.target.closest("button").id;

        console.log(bID);

        addItem(parseInt(bID));
    };

    const handleClick = (event, id = "") => {
        var bID;
        if (id === "") {
            bID = event.target.closest("button").id;
        } else {
            bID = id;
        }

        console.log(bID);
        console.log("asdfase");

        switch (bID) {
            case "cs":
                addItem(1);
                break;
            case "csd":
                addItem(2);
                break;
            case "css":
                addItem(3);
                break;
            case "scsd":
                addItem(4);
                break;
            case "8n":
                addItem(6);
                break;
            case "12n":
                addItem(7);
                break;
            case "wfm":
                addItem(12);
                break;
            case "8ng":
                addItem(16);
                break;
            case "12ng":
                addItem(17);
                break;
            case "csg":
                addItem(18);
                break;
            case "sm":
                addItem(19);
                break;
            case "cookie":
                addItem(24);
                break;
            case "csgc":
                addItem(34);
                break;
            case "ccwg":
                addItem(37);
                break;
            case "sc":
                addItem(38);
                break;
            case "sss":
                addItem(39);
                break;
            case "ic":
                addItem(49);
                break;
            case "brown":
                addItem(50);
                break;
            case "wfl":
                addItem(52);
                break;
            case "wc":
                addItem(53);
                break;
            case "fc":
                addItem(54);
                break;
            case "side":
                addItem(55);
                break;
            case "8nmeal":
                addItem(30);
                break;
            case "12nmeal":
                addItem(31);
                break;
            case "8ngmeal":
                addItem(32);
                break;
            case "12ngmeal":
                addItem(33);
                break;
            case "csdmeal":
                addItem(26);
                break;
            case "cssmeal":
                addItem(27);
                break;
            case "scsdmeal":
                addItem(28);
                break;
            case "csgmeal":
                addItem(29);
                break;
            case "csgcmeal":
                addItem(35);
                break;
            case "ccwgmeal":
                addItem(36);
                break;
            case "csmeal":
                addItem(25);
                break;

            case "milkchoc":
                addItem(20);
                break;
            case "milkvan":
                addItem(21);
                break;
            case "milkstraw":
                addItem(22);
                break;
            case "milkcook":
                addItem(23);
                break;
            case "lem":
                addItem(15);
                break;
            case "softm":
                addItem(9);
                break;
            case "softl":
                addItem(43);
                break;
            case "team":
                addItem(40);
                break;
            case "teal":
                addItem(41);
                break;
            case "leml":
                addItem(42);
                break;
            case "sunjoym":
                addItem(44);
                break;
            case "sunjoyl":
                addItem(45);
                break;
            case "cofice":
                addItem(46);
                break;
            case "lemfrost":
                addItem(47);
                break;
            case "cofrost":
                addItem(48);
                break;
            default:
                console.log("ERROR w/ switching");
        }
    };

    const handleSubtract = (itemID) => {
        console.log(curItems[itemID]);

        setCurItems((prev) => ({
            ...prev,
            [itemID]: prev[itemID] - 1,
        }));

        setTotalCost((prev) => (prev -= parseFloat(menu[itemID])));
    };

    useEffect(() => {
        Object.keys(curItems).forEach((id) => {
            // if the value of a key hits zero, delete that key-value pair
            if (curItems[id] === 0) {
                const newCurItems = { ...curItems };
                delete newCurItems[id];
                setCurItems(newCurItems);
            }
        });
    }, [curItems, setCurItems]);

    const addItem = (menuID) => {
        if (menuID in curItems) {
            console.log("item in");

            setCurItems((prev) => ({
                ...prev,
                [menuID]: prev[menuID] + 1,
            }));

            setTotalCost((prev) => (prev += parseFloat(menu[menuID])));
        } else {
            console.log("new item");

            setCurItems((prev) => ({
                ...prev,
                [menuID]: 1,
            }));

            setTotalCost((prev) => (prev += parseFloat(menu[menuID])));
        }
    };

    return {
        handleNewOrder,
        handleComplete,
        handleClick,
        handleClickExtra,
        handleSubtract,
    };
};
