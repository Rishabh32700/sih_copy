const express = require ("express")
const app = express()
const mysql = require("mysql")


const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'vvgnli_sih',
});

app.listen(3001, () => {
    console.log("Backend running at 3001 port");
});
