const express = require ("express")
const app = express()
const mysql = require("mysql")

console.log("port is : ", process.env.PORT);
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'vvgnli_sih',
});
const host = '0.0.0.0';
app.listen(process.env.PORT , host , () => {

    console.log("Backend running at 3001 port");
});
