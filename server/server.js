const express = require("express");
const cors = require("cors");
const app = express();

const { Pool } = require('pg');
const pool = new Pool({
    user: 'csce315331_team_71_master',
    host: 'csce-315-db.engr.tamu.edu',
    database: 'csce315331_team_71',
    password: '71_TeaM',
    port: 5432, 
  });

app.use(cors());

app.get("/weather/:lat/:lon", async (req, res) => {
    const result = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${req.params.lat}&lon=${req.params.lon}&appid=8055724633e109d30c148d36ea2352b0
        `
    );

    const data = await result.json();
    return res.json(data);
});

app.get("/menu", async (req, res) => {

    const result = await pool.query('SELECT * FROM menu_items', (err, result) => {
        if (err) {
            return res.status(500).send('cant retrieve from db');
        }
        else {
            return res.send(result.rows);
        }
    })

})

const port = process.env.PORT || 3001;
app.listen(port);
console.log("App is listening on port " + port);


