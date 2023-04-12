const express = require("express");
const cors = require("cors");
const app = express();
var zDate = '';

const { Pool } = require('pg');
const pool = new Pool({
    user: 'csce315331_team_71_master',
    host: 'csce-315-db.engr.tamu.edu',
    database: 'csce315331_team_71',
    password: '71_TeaM',
    port: 5432, 
});

app.use(cors());
app.use(express.json());
app.get("/weather/:lat/:lon", async (req, res) => {
    const result = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${req.params.lat}&lon=${req.params.lon}&appid=8055724633e109d30c148d36ea2352b0
        `
    );

    const data = await result.json();
    return res.json(data);
});

app.get("/menu", async (req, res) => {

    const result = await pool.query('SELECT * FROM menu_items ORDER BY menu_item_id', (err, result) => {
        if (err) {
            return res.status(500).send('cant retrieve from db');
        }
        else {
            return res.send(result.rows);
        }
    })

});

app.get("/sales", async (req, res) => {

    const result = await pool.query('SELECT * FROM sales ORDER BY sales_id', (err, result) => {
        //console.log(result['rows']);
        if (err) {
            return res.status(500).send('cant retrieve from db');
        }
        else {
            for (let i = 0 ; i < result['rows'].length ; i++){
                result['rows'][i]['sales_date'] = result['rows'][i]['sales_date'].toString().slice(0,16); 
            }
            //console.log( String(result['rows'][2]['sales_date']));
            return res.send(result.rows);
        }
    })

});


app.get("/inventory", async (req, res) => {

    const result = await pool.query('SELECT * FROM inventory ORDER BY item_id', (err, result) => {
        if (err) {
            return res.status(500).send('cant retrieve from db');
        }
        else {
            return res.send(result.rows);
        }
    })

});




//  CASHIER SIDE 


app.get("/newMenuItems", async (req, res) => {

    const result = await pool.query('SELECT * FROM menu_items WHERE menu_item_id > 55;', (err, result) => {
        if (err) {
            return res.status(500).send('cant retrieve from db');
        }
        else {
            return res.send(result.rows);
        }
    })

});

app.get("/recipe/:itemId", async (req,res) => {
    const result = await pool.query(`SELECT * FROM recipes WHERE menu_item_id = ${req.params.itemId}`, (err, result) => {
        if (err) {
            return res.status(500).send('cant send to db');
        }
        else {
            return res.json(result.rows);
        }
    })
});

app.get("/updateInventory/:qty/:inventoryId", async (req,res) => {
    const result = await pool.query(`UPDATE inventory SET quantity = quantity - ${req.params.qty} WHERE item_id = ${req.params.inventoryId};`, (err, result) => {
        if (err) {
            return res.status(500).send('cant send to db');
        }
        else {
            return res.json({ message: 'Updated successfully' });
        }
    })
});

app.get("/addOrderItems/:price/:isPaid", async (req,res) => {
    const result = await pool.query(`INSERT INTO orders (price, is_paid, order_time) VALUES (${parseFloat(req.params.price).toFixed(2)}, ${req.params.isPaid}, NOW());`, (err, result) => {
        if (err) {
            return res.status(500).send('cant send to db');
        }
        else {
            return res.json({ message: 'Updated successfully' });
        }
    })
});

app.get("/lastOrderId", async (req, res) => {

    const result = await pool.query("SELECT order_id from orders ORDER BY order_id DESC LIMIT 1;", (err, result) => {
        if (err) {
            return res.status(500).send('cant retrieve from db');
        }
        else {
            return res.send(result.rows);
        }
    })
});

app.get("/createOrder/:newId/:itemId/:qty", async (req,res) => {
    const result = await pool.query(`INSERT INTO order_items (order_id, menu_item_id, quantity) VALUES (${req.params.newId}, ${req.params.itemId}, ${req.params.qty})`, (err, result) => {
        if (err) {
            return res.status(500).send('cant retrieve from db');
        }
        else {
            return res.json({ message: 'Updated successfully' });
        }
    })
});

app.post("/addToGo", async (req, res) => {

    const result = await pool.query("UPDATE inventory SET quantity = quantity - 1 WHERE item_id = 59; ", (err, result) => {
        if (err) {
            return res.status(500).send('Fail to update DB');
        }
        else {
            return res.send('sucess');
        }
    })
});








//  MANAGER SIDE

app.get("/changeIngredientQuantity/:id/:quantity", async (req, res) => {

    if (req.params.quantity !== "") {
        const result = await pool.query("UPDATE inventory SET quantity = " + req.params.quantity + " WHERE item_id = " + req.params.id + ";", (err, result) => {
            if (err) {
                return res.status(500).send('Failed to update Quantity');
            }
        })
    }
    
    return res.json({ message: 'User updated successfully' });
});

app.get("/changeIngredientName/:id/:name", async (req, res) => {

    if (req.params.name !== "") {
        result = await pool.query("UPDATE inventory SET item_name = '" + req.params.name + "' WHERE item_id = " + req.params.id + ";", (err, result) => {
            if (err) {
                    //return res.status(500).send('Failed to Update Name');
            }
        })
    }
    
    return res.json({ message: 'User updated successfully' });
});

app.get("/changeMenuPrice/:id/:price", async (req, res) => {
    console.log("Actually Runs Price");
    if (req.params.price !== "") {
        const result = await pool.query("UPDATE menu_items SET menu_item_price = " + req.params.price + " WHERE menu_item_id = " + req.params.id + ";", (err, result) => {
            if (err) {
                return res.status(500).send('Failed to update Price');
            }
        })
    }

    return res.json({ message: 'User updated successfully' });
});

app.get("/changeMenuName/:id/:name", async (req, res) => {
    console.log("Actually Runs Name");
    if (req.params.name !== "") {
        result = await pool.query("UPDATE menu_items SET menu_item_name = '" + req.params.name + "' WHERE menu_item_id = " + req.params.id + ";", (err, result) => {
            if (err) {
                return res.status(500).send('Failed to Update Name');
            }
        })
    }

    return res.json({ message: 'User updated successfully' });
});

app.get("/orders/:beginning/:end", async (req, res) => {

    const result = await pool.query("SELECT * FROM orders WHERE orders.order_time::date >= '"
    + req.params.beginning + "' AND orders.order_time::date <= '" + req.params.end + "';", (err, result) => {
        if (err) {
            return res.status(500).send('cant retrieve from db');
        }
        else {
            return res.send(result.rows);
        }
    })

});

app.get("/xreportdefault", async (req, res) => {
    console.log(zDate);
    if(zDate === "") {
    const id = await pool.query("SELECT sales_date FROM sales WHERE sales_id=(SELECT max(sales_id) FROM sales);");
    const idVal = id.rows[0]['sales_date'];
    const netResult = await pool.query("SELECT SUM(price) FROM orders WHERE order_time >= $1", [idVal]);


    return res.send(netResult.rows[0]['sum']);
    }
    else {
        const netResult = await pool.query("SELECT SUM(price) FROM orders WHERE order_id > $1", [zDate]);

        var output = netResult.rows[0]['sum'];
        if(output === null) {
            output = '0';
        }
        console.log(output);
        
        // Check if output is null before calling res.send()
        if(output !== null) {
            return res.send(output.toString());
        } else {
            return res.send('0');
        }
    }

});
/*Need Assistance to Test*/
app.get("/xreport/:date", async (req, res) => {
    //const id = await pool.query("SELECT sales_date FROM sales WHERE sales_id=(SELECT max(sales_id) FROM sales)");
    console.log(req.params.date);
    const netResult = await pool.query("SELECT SUM(price) FROM orders WHERE order_time >= '" + req.params.date + "';");

    return res.send(netResult.rows[0]['sum']);
});

app.get("/zreport", async (req, res) => {
    const id = await pool.query("SELECT MAX(sales_id) FROM sales;");
    const idVal = id.rows[0]['max'] + 1;
    const date = getLocalDate();
    const net = await pool.query("SELECT SUM(price) FROM orders WHERE orders.order_time::date = '" + date + "';");
    const tax = net.rows[0]['sum'] * 0.0825;
    const profit = net.rows[0]['sum'] - tax;
    const result = await pool.query("INSERT INTO sales (sales_id, sales_date, total_sales, total_tax) VALUES ("
                    + idVal + ",'" + date + "' , " + profit + " , " + tax + ");", (err, result) => {
                        if (err) {
                            res.status(500).send('Failed to create Sales Report');
                            console.log("error");
                        }
                    });
    const orderid = await pool.query("SELECT max(order_id) FROM orders");
    zDate = orderid.rows[0]['max'];
    
});

function getLocalDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero if needed
    const day = String(date.getDate()).padStart(2, '0'); // Add leading zero if needed
    return `${year}-${month}-${day}`;
  }

app.post("/addmenu/completeMenu" ,async (req,res) =>{
    console.log("completion");
    const orderDets = req.body;
    console.log(orderDets);
    const id = await pool.query("SELECT MAX(menu_item_id) FROM menu_items;");
    const idVal = id.rows[0]['max'] + 1;
    const result = await pool.query("INSERT INTO menu_items (menu_item_id, menu_item_name, menu_item_price) VALUES (" 
            + idVal+ ",'" + orderDets['name']+ "' , " + orderDets['price'] + ");", (err, result) => {
                    if (err) {
                        res.status(500).send('Failed to update Quantity');
                        console.log("error");
                    }
                });
    res.status(200).json({message:"Menu Item Created"});
});

app.post("/addMenu", async (req, res) => {
    console.log("hello");
    const ingredients = req.body.ingredients;
    // Item.create({ name: req.body.name, price: req.body.price })
    //   .then(() => res.send('Item added'))
    //   .catch((error) => {
    //     console.error(error);
    //     res.status(500).send('Error adding item');
    //   });

    console.log(ingredients);
    const result = await pool.query("select * from inventory;");
    let ingNames = {};
    for (let i = 0 ; i < result.rows.length; i++){
        ingNames[result.rows[i]['item_name']] = result.rows[i]['item_id'];
    }
    console.log(result);
    console.log("separation");
    console.log(ingNames);
    if(!("peep" in ingNames)){
        console.log("true");
    }
    const id = await pool.query("SELECT MAX(menu_item_id) FROM menu_items;");
    const idVal = id.rows[0]['max'] +1;
    console.log(idVal);
    for(let i = 0 ; i < req.body.ingredients.length; i++){
            //if(req.body.ingredients[i]['name'] in )
            if((ingredients[i]['name'] in ingNames)){
                
                console.log(req.body.ingredients[i]['name']+":"+ingNames[req.body.ingredients[i]['name']]);
        const result = await pool.query("INSERT INTO recipes (menu_item_id,inventory_id,quantity) VALUES ("+idVal+"," + ingNames[req.body.ingredients[i]['name']] +','+req.body.ingredients[i]['quantity'] +");", (err, result) => {
            //const result = await pool.query("select * from orders;", (err,result) =>{
            if (err) {
                //res.status(500).send('Failed to update Quantity');
                console.log("error");
            }
       })
    }
}
    res.status(200).json({ message: "Ingredients received" });
  });

  app.post("/check-authorization", async (req, res) => {
    const email = req.body.email;
  
    try {
      const result = await pool.query(
        "SELECT COUNT(*) FROM emails WHERE email = $1 GROUP BY privilege",
        [email]
      );

      const res2 = await pool.query("SELECT privilege FROM emails WHERE email = '"+email+"';");

    console.log("got the data from db")
    console.log("result: ",res2.rows[0]);
      const count = parseInt(result.rows[0].count, 10);
      const isAuthorized = count > 0;
      console.log("is auth: ",isAuthorized);
      const privilege = isAuthorized ? res2.rows[0]['privilege'] : null;
      console.log("privi: ", privilege);
  
      res.send({ isAuthorized, privilege });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Server error" });
    }
  });

const port = process.env.PORT || 3001;
app.listen(port);
console.log("App is listening on port " + port);
