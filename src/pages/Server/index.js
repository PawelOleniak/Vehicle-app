const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 5000;

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

app.listen(port, () => {
  console.log(`App server now listening to port ${port}`);
});

app.get('/api/vehicles/all', (req, res) => {
  pool.query(
    `select mpg,cylinders,displacement,horsepower,weight,acceleration,year,countryName,name from vehicles,countries where vehicles.origin=countries.countryId`,
    (err, rows) => {
      if (err) {
        res.send(err);
      } else {
        res.send(rows);
      }
    }
  );
});
