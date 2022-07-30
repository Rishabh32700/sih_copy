const mysql = require('mysql');
const cred = require('./credentials');

class TABLES {
    
    constructor(){
        
        this.db = mysql.createConnection({
            ...cred,
            database: 'vvgnli_sih'
        });

        this.sql = {
            address_details : 'CREATE TABLE IF NOT EXISTS address_details(addressId int auto_increment, addressL1 varchar(70), addressL2 varchar(70), city varchar(20), state varchar(20), country varchar(30), zipCode varchar(6), primary key(addressId))',
            signup_details : 'CREATE TABLE IF NOT EXISTS signup_details(userId int auto_increment, fname varchar(50), lname varchar(50), fatherName varchar(50), gender varchar(20), dateOfBirth date, religion varchar(20), phoneNumber varchar(30), userName varchar(30), emailAddress varchar(30), userRole int, addressId int, PRIMARY KEY (userId), unique key unq_user_details_2 (emailAddress,userRole), CONSTRAINT user_details_ibfk_1 FOREIGN KEY (addressId) REFERENCES address_details (addressId))',
            login_details : 'CREATE TABLE IF NOT EXISTS login_details(userId int NOT NULL, password varbinary(500) DEFAULT NULL, PRIMARY KEY (userId), CONSTRAINT login_details_ibfk_1 FOREIGN KEY (userId) REFERENCES signup_details (userId))',
            media_details : 'create table IF NOT EXISTS media_details(mediaId varchar(100), mediaURL varchar(200), fileName varchar(100), fileType int, currentTimeStamp TIMESTAMP, primary key(mediaId))',
            post_details : 'create table IF NOT EXISTS post_details(userId int, mediaId varchar(100), status int, userName varchar(200),PRIMARY KEY (userId,mediaId), CONSTRAINT post_details_ibfk_1 FOREIGN KEY (userId) REFERENCES login_details (userId), CONSTRAINT post_details_ibfk_2 FOREIGN KEY (mediaId) REFERENCES media_details (mediaId))',
            comment_details : 'create table if not exists comment_details (commentId int auto_increment, mediaId varchar(200), commentData varchar(5000), userId int, fullName varchar(200), primary key(commentId), CONSTRAINT comment_details_ibfk_1 FOREIGN KEY (mediaId) REFERENCES media_details (mediaId), CONSTRAINT comment_details_ibfk_2 FOREIGN KEY (userId) REFERENCES login_details (userId))',
            like_details : 'create table if not exists like_details (userId int, mediaId varchar(200), likeStatus int, primary key(userId, mediaId), CONSTRAINT like_details_ibfk_1 FOREIGN KEY (userId) REFERENCES login_details (userId), CONSTRAINT like_details_ibfk_2 FOREIGN KEY (mediaId) REFERENCES media_details (mediaId))'
        };
        
    }

    initTable() {
        for(let i in this.sql){
            this.db.query(this.sql[i], (err, result) => {
                if(err)

                    console.log(`Couldn't create table ${i} and error is ${err}`);
                else
                    console.log(`Successfully created table ${i}`);
            })
        }
    }
}

module.exports = TABLES;