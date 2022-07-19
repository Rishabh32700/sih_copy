const express = require('express');
const mysql = require('mysql');
const DATABASE = require('./utilities/createDB');
const TABLES = require('./utilities/createTables');
const cred = require('./utilities/credentials');
const bodyParser = require('body-parser');
const cors = require('cors');

class VVGNLI {
    constructor(port, app) {
        this.port = port;
        this.app = app;
        this.app.use(cors())
        // used to grab frontend infor to backend
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(express.json())
        this.temp = 0;
        //Initialize Database
        new DATABASE().initDB();
        //Initialize All The Tables
        new TABLES().initTable();
        this.db = mysql.createConnection({
            ...cred,
            database: 'vvgnli_sih'
        });
    }

    get() {
        this.app.get('/api/vvgnli/getAllAddresses', (req, res) => {
            const fetchAllAddressesSql = "select * from address_details";
            this.db.query(fetchAllAddressesSql, (err, result) => {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                }
                else {
                    console.log(result);
                    const allAddresses = {};
                    for (let i = 0; i < result.length; i++) {
                        let addressId = result[i].addressId;
                        let fullAddress = result[i].addressL1 + " , " + result[i].addressL2 + " , " + result[i].city + " , " + result[i].state + " , " + result[i].country + " , " + result[i].zipCode;
                        allAddresses[addressId] = fullAddress;
                    }

                    console.log(allAddresses);
                    res.send(allAddresses);
                }
            })
        })
    }

    post() {
        this.app.post('/api/vvgnli/signup', (req, res) => {

            const { fname, lname, fatherName, gender, dateOfBirth, religion, phoneNumber, userName, emailAddress, password,
                userRole, addressL1, addressL2, city, state, country, zipCode, addressId } = req.body;

                let tempAddressId = 0;
            console.log("data user_details insertion start!!");
            if (addressId === 0) {
                let sqlAddress = `INSERT INTO address_details (addressL1, addressL2, city, state, country, zipCode) VALUES (?,?,?,?,?,?)`;
                this.db.query(sqlAddress, [addressL1, addressL2, city, state, country, zipCode], (err, result) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log('Address record inserted');
                        let addressIdFetchSqlQuery = "SELECT addressId FROM address_details ORDER BY addressId DESC LIMIT 1";
                        
                        console.log("comes here -----------")
                        this.db.query(addressIdFetchSqlQuery, (err, result) => {
                            if (err) {
                                console.log("in if -------------")
                                console.log(err);
                                res.sendStatus(500);
                            }
                            else {
                                tempAddressId = result[0].addressId;
                                console.log("------------------ " ,tempAddressId)
                            }
                        })
                    }
                })
            }
            if(tempAddressId!==0)
                addressId = tempAddressId;
            
            console.log("now adid ", addressId);

            let signSql = `INSERT INTO signup_details (fname, lname, fatherName, gender, dateOfBirth, religion, phoneNumber, userName, emailAddress, userRole, addressId) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;
            this.db.query(signSql, [fname, lname, fatherName, gender, dateOfBirth, religion, phoneNumber, userName, emailAddress, userRole, addressId], (err, result) => {
                if (err) {
                    console.log(err)
                    if (err.code === "ER_DUP_ENTRY") {
                        res.status(200).send({ success: true, message: 'Duplicate Entry for this Email Address, please enter different User Name' });
                    }
                }
                else {
                    console.log('User Details record inserted');
                    let userIdFetchSqlQuery = "SELECT userId FROM signup_details ORDER BY userId DESC LIMIT 1";
                    let userId = 0;
                    this.db.query(userIdFetchSqlQuery, (err, result) => {
                        if (err) throw err;
                        else {
                            userId = result[0].userId;
                            const lastSignedIn = new Date();
                            // Make Constants if possible
                            let sqlLogin = `INSERT INTO login_details (userId,password) values 
                                                            (?,aes_encrypt(?,"VVGNLI_SIH"))`;
                            this.db.query(sqlLogin, [userId, password], (err, result) => {
                                if (err) throw err;
                                else {
                                    console.log('record inserted in login');
                                    res.status(200).send({ success: true, message: 'User Account created successfully, Now you can login with you credentials' });
                                }
                            });

                        }
                    });
                }
            });
        })


        this.app.post('/api/vvgnli/loginValidate', (req, res) => {

            const { emailAddress, password, userRole } = req.body;

            let userLoggedIdSql = `SELECT userId from signup_details where signup_details.emailAddress in (?) and signup_details.userRole in (?)`;
            this.db.query(userLoggedIdSql, [emailAddress, userRole], (err, result) => {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                }
                else {
                    console.log('fetched id');
                    console.log(result);
                    if (result.length === 0) {
                        res.status(200).send({ success: false, message: 'You are not registered with us, please signup first' });
                    } else {
                        const loggedUserId = result[0].userId;
                        console.log(loggedUserId);
                        let loginSql = `SELECT * FROM login_details log where log.userId in (?) and log.password = aes_encrypt(?,"VVGNLI_SIH")`;
                        this.db.query(loginSql, [loggedUserId, password], (err, result) => {
                            if (err) {
                                console.log(err);
                                res.sendStatus(500);
                            } else if (result.length == 0) {
                                res.status(200).send({ success: false, message: 'You are not registered with us, please signup first' });
                            }
                            else {
                                res.status(200).send({ success: true, message: 'You are logged in, Welcome to VVGNLI' });
                            }
                        })
                    }
                }
            })
        });

    }
    listen() {
        this.app.listen(this.port, (err) => {
            if (err)
                console.log(err);
            else
                console.log(`Server Started On ${this.port}`);
        })
    }
}
let vvgli = new VVGNLI(3001, express());
vvgli.get();
vvgli.listen();
vvgli.post();
vvgli.get();
