const express = require("express");
const cors = require("cors");
const path = require('path');
const app = express();
var zDate = "";

// connect to static react app
/**

Express middleware for serving static files from client/build directory.
@param {Object} req - Express request object.
@param {Object} res - Express response object.
@param {function} next - Express next middleware function.
@returns {undefined}
*/
app.use(express.static(path.join(__dirname, '../client/build')));


/**

Express middleware for setting Access-Control-Allow-Origin and Access-Control-Allow-Headers headers.
@param {Object} req - Express request object.
@param {Object} res - Express response object.
@param {function} next - Express next middleware function.
@returns {undefined}
*/
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const { Pool } = require("pg");
/**

PostgreSQL connection pool for executing queries.
@type {Pool}
*/
const pool = new Pool({
    user: "csce315331_team_71_master",
    host: "csce-315-db.engr.tamu.edu",
    database: "csce315331_team_71",
    password: "71_TeaM",
    port: 5432,
});


// const apiKey = process.env.REACT_APP_WEATHER_API_KEY
/**

Express middleware for enabling CORS and parsing JSON request body.
@returns {undefined}
*/
app.use(cors());
app.use(express.json());
/**

Express route for retrieving weather data based on latitude and longitude coordinates.

@param {Object} req - Express request object.

@param {Object} res - Express response object.

@returns {Promise<void>}
*/
app.get("/weather/:lat/:lon", async (req, res) => {
    const result = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${req.params.lat}&lon=${req.params.lon}&appid=${apiKey}`
    );

    const data = await result.json();
    return res.send(data);
});
/**

Express route for retrieving all menu items from the database.
@param {Object} req - Express request object.
@param {Object} res - Express response object.
@returns {Promise<void>}
*/
app.get("/menu", async (req, res) => {
    const result = await pool.query(
        "SELECT * FROM menu_items ORDER BY menu_item_id",
        (err, result) => {
            if (err) {
                return res.status(500).send("cant retrieve from db");
            } else {
                return res.send(result.rows);
            }
        }
    );
});
/**

Express route for retrieving all sales data from the database.
@param {Object} req - Express request object.
@param {Object} res - Express response object.
@returns {Promise<void>}
*/
app.get("/sales", async (req, res) => {
    const result = await pool.query(
        "SELECT * FROM sales ORDER BY sales_id",
        (err, result) => {
            //console.log(result['rows']);
            if (err) {
                return res.status(500).send("cant retrieve from db");
            } else {
                for (let i = 0; i < result["rows"].length; i++) {
                    result["rows"][i]["sales_date"] = result["rows"][i][
                        "sales_date"
                    ]
                        .toString()
                        .slice(0, 16);
                }
                //console.log( String(result['rows'][2]['sales_date']));
                return res.send(result.rows);
            }
        }
    );
});

/**

Route for retrieving a list of items that need to be restocked.
@name GET/restock
@function
@async
@param {Object} req - Express request object.
@param {Object} res - Express response object.
@returns {Object} - Returns an object containing the inventory items that need to be restocked.
*/
app.get("/restock", async (req, res) => {
    const result = await pool.query(
        "SELECT * FROM inventory WHERE quantity <= min_amount ORDER BY item_name;",
        (err, result) => {
            //console.log(result['rows']);
            if (err) {
                return res.status(500).send("cant retrieve from db");
            }
            // } else {
            //     for (let i = 0; i < result["rows"].length; i++) {
            //         result["rows"][i]["sales_date"] = result["rows"][i][
            //             "sales_date"
            //         ]
            //             .toString()
            //             .slice(0, 16);
            //     }
                //console.log( String(result['rows'][2]['sales_date']));
                return res.send(result.rows);
            }
        
    );
});
/**

Route for retrieving a list of all inventory items.
@name GET/inventory
@function
@async
@param {Object} req - Express request object.
@param {Object} res - Express response object.
@returns {Object} - Returns an object containing all inventory items.
*/
app.get("/inventory", async (req, res) => {
    const result = await pool.query(
        "SELECT * FROM inventory ORDER BY item_id",
        (err, result) => {
            if (err) {
                return res.status(500).send("cant retrieve from db");
            } else {
                return res.send(result.rows);
            }
        }
    );
});

//  CASHIER SIDE
/**

Route for retrieving a list of new menu items.
@name GET/newMenuItems
@function
@async
@param {Object} req - Express request object.
@param {Object} res - Express response object.
@returns {Object} - Returns an object containing the new menu items.
*/
app.get("/newMenuItems", async (req, res) => {
    const result = await pool.query(
        "SELECT * FROM menu_items WHERE menu_item_id > 63;",
        (err, result) => {
            if (err) {
                return res.status(500).send("cant retrieve from db");
            } else {
                return res.send(result.rows);
            }
        }
    );
});

/**

Route for retrieving the recipe of a menu item with a given ID.
@name GET/recipe/:itemId
@function
@async
@param {Object} req - Express request object.
@param {Object} res - Express response object.
@param {string} req.params.itemId - The ID of the menu item whose recipe should be retrieved.
@returns {Object} - Returns an object containing the recipe of the menu item with the specified ID.
*/

app.get("/recipe/:itemId", async (req, res) => {
    const result = await pool.query(
        `SELECT * FROM recipes WHERE menu_item_id = ${req.params.itemId}`,
        (err, result) => {
            if (err) {
                return res.status(500).send("cant send to db");
            } else {
                return res.json(result.rows);
            }
        }
    );
});
/**

Update the quantity of an inventory item by subtracting the given amount
@route GET /updateInventory/:qty/:inventoryId
@param {number} qty - The quantity to subtract from the inventory item
@param {number} inventoryId - The ID of the inventory item to update
@returns {object} An object containing a success message upon successful update
@throws {object} 500 - Error message if database query fails
*/
app.get("/updateInventory/:qty/:inventoryId", async (req, res) => {
    const result = await pool.query(
        `UPDATE inventory SET quantity = quantity - ${req.params.qty} WHERE item_id = ${req.params.inventoryId};`,
        (err, result) => {
            if (err) {
                return res.status(500).send("cant send to db");
            } else {
                return res.json({ message: "Updated successfully" });
            }
        }
    );
});
/**

Add an order item to the orders table
@route GET /addOrderItems/:price/:isPaid
@param {number} price - The price of the order item
@param {boolean} isPaid - A boolean indicating whether the order has been paid for or not
@returns {object} An object containing a success message upon successful update
@throws {object} 500 - Error message if database query fails
*/
app.get("/addOrderItems/:price/:isPaid", async (req, res) => {
    const result = await pool.query(
        `INSERT INTO orders (price, is_paid, order_time) VALUES (${parseFloat(
            req.params.price
        ).toFixed(2)}, ${req.params.isPaid}, NOW());`,
        (err, result) => {
            if (err) {
                return res.status(500).send("cant send to db");
            } else {
                return res.json({ message: "Updated successfully" });
            }
        }
    );
});
/**

Retrieves the last order ID from the 'orders' table in the database.
@param {Object} req - The request object.
@param {Object} res - The response object.
@returns {Object} - Returns a JSON object containing the last order ID.
*/

app.get("/lastOrderId", async (req, res) => {
    const result = await pool.query(
        "SELECT order_id from orders ORDER BY order_id DESC LIMIT 1;",
        (err, result) => {
            if (err) {
                return res.status(500).send("cant retrieve from db");
            } else {
                return res.send(result.rows);
            }
        }
    );
});
/**

Creates a new order item and inserts it into the 'order_items' table in the database.
@param {Object} req - The request object.
@param {Object} res - The response object.
@returns {Object} - Returns a JSON object with a success message.
*/
app.get("/createOrder/:newId/:itemId/:qty", async (req, res) => {
    const result = await pool.query(
        `INSERT INTO order_items (order_id, menu_item_id, quantity) VALUES (${req.params.newId}, ${req.params.itemId}, ${req.params.qty})`,
        (err, result) => {
            if (err) {
                return res.status(500).send("cant retrieve from db");
            } else {
                return res.json({ message: "Updated successfully" });
            }
        }
    );
});

/**

Decreases the quantity of an item in the 'inventory' table in the database by 1.
@param {Object} req - The request object.
@param {Object} res - The response object.
@returns {Object} - Returns a success message.
*/
app.post("/addToGo", async (req, res) => {
    const result = await pool.query(
        "UPDATE inventory SET quantity = quantity - 1 WHERE item_id = 59; ",
        (err, result) => {
            if (err) {
                return res.status(500).send("Fail to update DB");
            } else {
                return res.send("success");
            }
        }
    );
});

//  MANAGER SIDE
/**

Changes the quantity of an item in the 'inventory' table in the database.
@param {Object} req - The request object.
@param {Object} res - The response object.
@returns {Object} - Returns a JSON object with a success message.
*/
app.get("/changeIngredientQuantity/:id/:quantity", async (req, res) => {
    if (req.params.quantity !== "") {
        const result = await pool.query(
            "UPDATE inventory SET quantity = " +
                req.params.quantity +
                " WHERE item_id = " +
                req.params.id +
                ";",
            (err, result) => {
                if (err) {
                    return res.status(500).send("Failed to update Quantity");
                }
            }
        );
    }

    return res.json({ message: "User updated successfully" });
});
/**

Changes the name of an item in the 'inventory' table in the database.
@param {Object} req - The request object.
@param {Object} res - The response object.
@returns {Object} - Returns a JSON object with a success message.
*/
app.get("/changeIngredientName/:id/:name", async (req, res) => {
    if (req.params.name !== "") {
        result = await pool.query(
            "UPDATE inventory SET item_name = '" +
                req.params.name +
                "' WHERE item_id = " +
                req.params.id +
                ";",
            (err, result) => {
                if (err) {
                    //return res.status(500).send('Failed to Update Name');
                }
            }
        );
    }

    return res.json({ message: "User updated successfully" });
});
/**

Handles changing the price of a menu item.
@param {object} req - The HTTP request object.
@param {object} res - The HTTP response object.
@returns {object} - A JSON object with a success message or an error message.
*/
app.get("/changeMenuPrice/:id/:price", async (req, res) => {
    console.log("Actually Runs Price");
    if (req.params.price !== "") {
        const result = await pool.query(
            "UPDATE menu_items SET menu_item_price = " +
                req.params.price +
                " WHERE menu_item_id = " +
                req.params.id +
                ";",
            (err, result) => {
                if (err) {
                    return res.status(500).send("Failed to update Price");
                }
            }
        );
    }

    return res.json({ message: "User updated successfully" });
});
/**

Handles changing the name of a menu item.
@param {object} req - The HTTP request object.
@param {object} res - The HTTP response object.
@returns {object} - A JSON object with a success message or an error message.
*/
app.get("/changeMenuName/:id/:name", async (req, res) => {
    console.log("Actually Runs Name");
    if (req.params.name !== "") {
        result = await pool.query(
            "UPDATE menu_items SET menu_item_name = '" +
                req.params.name +
                "' WHERE menu_item_id = " +
                req.params.id +
                ";",
            (err, result) => {
                if (err) {
                    return res.status(500).send("Failed to Update Name");
                }
            }
        );
    }

    return res.json({ message: "User updated successfully" });
});
/**

Handles retrieving orders between a specific beginning and end date.
@param {object} req - The HTTP request object.
@param {object} res - The HTTP response object.
@returns {object} - A JSON object with the orders or an error message.
*/
app.get("/orders/:beginning/:end", async (req, res) => {
    const result = await pool.query(
        "SELECT * FROM orders WHERE orders.order_time::date >= '" +
            req.params.beginning +
            "' AND orders.order_time::date <= '" +
            req.params.end +
            "';",
        (err, result) => {
            if (err) {
                return res.status(500).send("cant retrieve from db");
            } else {
                return res.send(result.rows);
            }
        }
    );
});
/**

Handles retrieving the net sales of the restaurant.
@param {object} req - The HTTP request object.
@param {object} res - The HTTP response object.
@returns {object} - A JSON object with the net sales or an error message.
*/
app.get("/xreportdefault", async (req, res) => {
    console.log(zDate);
    if (zDate === "") {
        const id = await pool.query(
            "SELECT sales_date FROM sales WHERE sales_id=(SELECT max(sales_id) FROM sales);"
        );
        const idVal = id.rows[0]["sales_date"];
        const netResult = await pool.query(
            "SELECT SUM(price) FROM orders WHERE order_time >= $1",
            [idVal]
        );

        return res.send(netResult.rows[0]["sum"]);
    } else {
        const netResult = await pool.query(
            "SELECT SUM(price) FROM orders WHERE order_id > $1",
            [zDate]
        );

        var output = netResult.rows[0]["sum"];
        if (output === null) {
            output = "0";
        }
        console.log(output);

        // Check if output is null before calling res.send()
        if (output !== null) {
            return res.send(output.toString());
        } else {
            return res.send("0");
        }
    }
});

/**

@description A route that returns a report of inventory items with a quantity less than 10% of their maximum quantity
@param {Object} req - Express request object
@param {Object} res - Express response object
@returns {Object} - Returns an object containing the item names, their quantities, and maximum quantities
*/
app.get("/excessReport/:beginning", async (req, res) => {

    const date = getLocalDate();
    const result = await pool.query(
        "SELECT item_name, SUM(qty) AS qty, quantity FROM " +
        "(SELECT coalesce(j.qty,0) AS qty, item_name, quantity FROM inventory FULL OUTER JOIN "+ 

            "(SELECT inventory_id, quantity*count AS qty FROM "+
                
                "(SELECT m.menu_item_id, SUM(count) AS count FROM " +

                    "(SELECT order_items.menu_item_id, quantity*count(*) AS count FROM order_items JOIN orders ON " +
                            "orders.order_id=order_items.order_id JOIN menu_items ON order_items.menu_item_id = menu_items.menu_item_id "
                            +
                            "WHERE order_time::date >= '" + req.params.beginning + "' AND order_time::date <= '" + date
                        + "' GROUP BY order_items.menu_item_id, quantity ORDER BY menu_item_id) m"+

                    " GROUP BY menu_item_id) k " +

                "JOIN recipes ON k.menu_item_id = recipes.menu_item_id GROUP BY inventory_id, qty) j"+
        
            " ON j.inventory_id = inventory.item_id" +
            " WHERE quantity > 0" +
            " GROUP BY item_name, qty, quantity ORDER BY item_name) n"+ 

        " GROUP BY item_name, quantity" +
        " HAVING SUM(qty) < 0.1 * (SUM(qty) + quantity);" ,
        (err, result) => {
            if (err) {
                return res.status(500).send("cant retrieve from db");
            } else {
                return res.send(result.rows);
            }
        }
    );
});
/**

@description A route that returns the total sales amount for a given date
@param {Object} req - Express request object
@param {Object} res - Express response object
@returns {number} - Returns the total sales amount for the given date
*/
app.get("/xreport/:date", async (req, res) => {
    //const id = await pool.query("SELECT sales_date FROM sales WHERE sales_id=(SELECT max(sales_id) FROM sales)");
    console.log(req.params.date);
    const netResult = await pool.query(
        "SELECT SUM(price) FROM orders WHERE order_time >= '" +
            req.params.date +
            "';"
    );

    return res.send(netResult.rows[0]["sum"]);
});
/**

@description A route that creates a sales report and inserts it into the database
@param {Object} req - Express request object
@param {Object} res - Express response object
*/
app.get("/zreport", async (req, res) => {
    const id = await pool.query("SELECT MAX(sales_id) FROM sales;");
    const idVal = id.rows[0]["max"] + 1;
    const date = getLocalDate();
    const net = await pool.query(
        "SELECT SUM(price) FROM orders WHERE orders.order_time::date = '" +
            date +
            "';"
    );
    const tax = net.rows[0]["sum"] * 0.0825;
    const profit = net.rows[0]["sum"] - tax;
    const result = await pool.query(
        "INSERT INTO sales (sales_id, sales_date, total_sales, total_tax) VALUES (" +
            idVal +
            ",'" +
            date +
            "' , " +
            profit +
            " , " +
            tax +
            ");",
        (err, result) => {
            if (err) {
                res.status(500).send("Failed to create Sales Report");
                console.log("error");
            }
        }
    );
    const orderid = await pool.query("SELECT max(order_id) FROM orders");
    zDate = orderid.rows[0]["max"];
});
/**

This function gets the local date
@return {string} A string in the format "YYYY-MM-DD"
*/
function getLocalDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Add leading zero if needed
    const day = String(date.getDate()).padStart(2, "0"); // Add leading zero if needed
    return `${year}-${month}-${day}`;
}
/**

This route adds a new menu item to the database
@param {Object} req - The request object
@param {Object} res - The response object
@return {Object} The response object with a success or error message
*/
app.post("/addmenu/completeMenu", async (req, res) => {
    console.log("completion");
    const orderDets = req.body;
    console.log(orderDets);
    const id = await pool.query("SELECT MAX(menu_item_id) FROM menu_items;");
    const idVal = id.rows[0]["max"] + 1;
    const result = await pool.query(
        "INSERT INTO menu_items (menu_item_id, menu_item_name, menu_item_price) VALUES (" +
            idVal +
            ",'" +
            orderDets["name"] +
            "' , " +
            orderDets["price"] +
            ");",
        (err, result) => {
            if (err) {
                res.status(500).send("Failed to update Quantity");
                console.log("error");
            }
        }
    );
    res.status(200).json({ message: "Menu Item Created" });
});
/**

This route adds a new menu item to the database along with its recipe
@param {Object} req - The request object
@param {Object} res - The response object
@return {Object} The response object with a success or error message
*/
app.post("/addMenu", async (req, res) => {
    // console.log("hello");
    const ingredients = req.body.ingredients;
    console.log(ingredients);
    const result = await pool.query("select * from inventory;");
    let ingNames = {};
    for (let i = 0; i < result.rows.length; i++) {
        ingNames[result.rows[i]["item_name"]] = result.rows[i]["item_id"];
    }
    console.log(result);
    console.log("separation");
    console.log(ingNames);
    let ingredientNotFound = false;
    if (!("peep" in ingNames)) {
        console.log("true");
    }
    const id = await pool.query("SELECT MAX(menu_item_id) FROM menu_items;");
    const idVal = id.rows[0]["max"] + 1;
    console.log(idVal);
    for (let i = 0; i < req.body.ingredients.length; i++) {
        //if(req.body.ingredients[i]['name'] in )
        if (ingredients[i]["name"] in ingNames) {
            console.log(
                req.body.ingredients[i]["name"] +
                    ":" +
                    ingNames[req.body.ingredients[i]["name"]]
            );
            const result = await pool.query(
                "INSERT INTO recipes (menu_item_id,inventory_id,quantity) VALUES (" +
                    idVal +
                    "," +
                    ingNames[req.body.ingredients[i]["name"]] +
                    "," +
                    req.body.ingredients[i]["quantity"] +
                    ");",
                (err, result) => {
                    //const result = await pool.query("select * from orders;", (err,result) =>{
                    if (err) {
                        //res.status(500).send('Failed to update Quantity');
                        console.log("error");
                    }
                }
            );
        }else{
            console.log("ingredient not found");
            ingredientNotFound = true;
            //res.status(500).send("Ingredient doesn't exist");
        }
    }
    if (ingredientNotFound) {
        res.status(500).send("Ingredient doesn't exist");
    } else {
        res.status(200).json({ message: "Ingredients received" });
    }
});
/**

@description This route checks authorization based on user email and sends back whether the user is authorized and their privilege level

@param {Object} req - The request object containing the user email

@param {Object} res - The response object to send back to the client

@returns {Object} - The response object containing whether the user is authorized and their privilege level
*/
app.post("/check-authorization", async (req, res) => {
    const email = req.body.email;

    try {
        const result = await pool.query(
            "SELECT COUNT(*) FROM emails WHERE email = $1 GROUP BY privilege",
            [email]
        );

        const res2 = await pool.query(
            "SELECT privilege FROM emails WHERE email = '" + email + "';"
        );

        console.log("got the data from db");
        console.log("result: ", res2.rows[0]);
        const count = parseInt(result.rows[0].count, 10);
        const isAuthorized = count > 0;
        console.log("is auth: ", isAuthorized);
        const privilege = isAuthorized ? res2.rows[0]["privilege"] : null;
        console.log("privi: ", privilege);

        res.send({ isAuthorized, privilege });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Server error" });
    }
});
/**

@description This route adds an ingredient to the inventory by updating its quantity
@param {Object} req - The request object containing the ingredient name and quantity to be added
@param {Object} res - The response object to send back to the client
@returns {Object} - The response object indicating whether the operation was successful or not
*/
app.post("/addIngredient", async (req, res) => {
    console.log("in here");
    const orderDets = req.body;
    console.log(orderDets);
    const name = orderDets['name'];
    const quantity = parseInt(orderDets['quantity']);
    // const id = await pool.query("SELECT MAX(menu_item_id) FROM menu_items;");
    // const idVal = id.rows[0]["max"] + 1;
    const result = await pool.query(
        "UPDATE inventory SET quantity = "+quantity+" WHERE item_name = '"+name+"';",
        (err, result) => {
                if (err) {
                    res.status(500).send("Failed to update Quantity");
                    console.log("error");
                }
            }
    );
    res.status(200).json({ message: "Menu Item Created" });
});
/**

@description This route catches all other routes and directs them to the React client
@param {Object} req - The request object
@param {Object} res - The response object to send back to the client
@returns {Object} - The response object containing the React client
*/
//catch all other routes and direct them to react
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port);
console.log("App is listening on port " + port);
