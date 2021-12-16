const express = require('express');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 80;

const pool = mysql.createPool({
  host: 'us-cdbr-east-05.cleardb.net',
  user: 'b6731f58f87274',
  password: '165c6dfc',
  database: 'heroku_8047aff53b0283e',
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
