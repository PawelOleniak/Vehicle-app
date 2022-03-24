const express = require('express');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 5000;

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
    `select mpg,cylinders,displacement,horsepower,weight,acceleration,year,countryName,name
     from vehicles,countries where vehicles.origin=countries.countryId`,
    (err, rows) => {
      if (err) {
        res.send(err);
      } else {
        res.send(rows);
      }
    }
  );
});

app.get('/api/vehicles/add', (req, res) => {
  console.log(req.query);
  const { id, name, origin, mpg, cylinders, displacement, horsepower, weight, acceleration, year } = req.query;
  const nestedQuery = `select countryId from countries where countryName='${origin}'`;
  pool.query(
    `INSERT INTO Vehicles(id,mpg,cylinders,displacement,horsepower,weight,acceleration,year,origin,name)
    VALUES (${id},${mpg},${cylinders},${displacement},${horsepower},${weight},${acceleration},${year},(${nestedQuery}),'${name}');`,
    (err, rows) => {
      if (err) {
        res.send(err);
        console.log('error');
        console.log(err);
      } else {
        console.log('1 record inserted');
        res.send(rows);
      }
    }
  );
});
