const express = require("express");
//npm install mysql2 --save
const mysql = require("mysql2");
//npm install cors --save
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
console.log('hello')
//Host, user, password database
const connection = mysql.createConnection({
    host: process.env.DBHOST, // process.env.DBHOST,
    user: process.env.DBUSER, //process.env.DBUSER,
    password: process.env.DBPASSWORD, //process.env.DBPASSWORD,
    database: process.env.DBNAME//process.env.DBNAME,
})

app.listen(port, () =>{
    console.log(`Application is now running on port ${port}`);
});

app.get('/pokemon/all',(req, res)=>{
    connection.query('SELECT * FROM pokemon',(error,results)=>{
        res.send(results);
    });
});




