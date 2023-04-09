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

    const handleComplete = async () => {
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
            console.log(result2);
        }

        handleNewOrder();
    };

    const handleClickExtra = (event, num) => {
        const bID = event.target.id;
        console.log(num, bID);

        addItem(parseInt(bID));
    }

    const handleClick = (event) => {
        const bID = event.target.id;
        console.log(bID);

        switch (bID) {
            case "cs":
                addItem(1);
                break;
            case "csd":
                addItem(2);
                break;
            case "scs":
                addItem(3);
                break;
            case "scsd":
                addItem(4);
                break;
            case "n8":
                addItem(6);
                break;
            case "n12":
                addItem(7);
                break;
            case "wfm":
                addItem(12);
                break;
            case "ng8":
                addItem(16);
                break;
            case "ng12":
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
            case "cssdmeal":
                addItem(28);
                break;
            case "csgmeal":
                addItem(29);
                break;
            case "csgdmeal":
                addItem(35);
                break;
            case "wrpmeal":
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

    const addItem = (menuID) => {
        console.log(menuID);
        console.log(menuID in menu);
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

    return { handleNewOrder, handleComplete, handleClick, handleClickExtra };
};
