var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const nodemailer = require("nodemailer");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_mensfashionstore"
});

router.post('/', (req, res, next) => {
    let customer_name = req.body.customer_name;
    let customer_email = req.body.customer_email;
    let customer_contactno = req.body.customer_contactno;
    let login_username = req.body.login_username;
    let login_password = req.body.login_password;
    let district_id = req.body.district_id;
    let location_id = req.body.location_id;
    let customer_pincode = req.body.customer_pincode;

    let loginQuery = `INSERT INTO tbl_login(login_username,login_password,role) VALUES (?,?,?)`;
    let customerQuery = `INSERT INTO tbl_customer(login_id,customer_name,customer_email,customer_contactno,district_id,location_id,customer_pincode,customer_regdate) VALUES (?, ?, ?, ?, ?, ?, ?, CURDATE())`;

    con.query('SELECT * FROM tbl_login where login_username=?', [login_username], (err, rows) => {
        if (err) throw err;
        if (rows == "") {
            con.query(loginQuery, [login_username, login_password, 'customer'], (err, loginResult) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send({
                        message: 'Error inserting login data',
                        error: err.message
                    });
                }
                

                let login_id = loginResult.insertId;
                con.query(customerQuery, [login_id, customer_name, customer_email, customer_contactno, district_id, location_id, customer_pincode], (err, customerResult) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).send({
                            message: 'Error inserting customer data',
                            error: err.message
                        });
                    }

                    console.log(customerResult);
                    res.send({
                        message: 'success'
                    });
                    
                    const mailOptions = {
                        from: `"MaleFashion" <adithyaajay63@gmail.com>`,
                        to: `${customer_email}`,
                        subject: "Welcome to MaleFashion",
                        html: `Hii welcome to MaleFashion.An online mens Fashionstore.<br>
                        login credentials are given below.<br>
                        username:${login_username}<br>
                        password:${login_password}`
                    };
                    const transporter = nodemailer.createTransport({
                        host: "smtp.gmail.com",
                        port: 587,
                        secure: false,
                        auth: {
                            user: "adithyaajay63@gmail.com",
                            pass: "xsylxmfskerlerda"
                        }
                    });
                    transporter.sendMail(mailOptions, (err, info) => {
                        if (err) {
                            console.log(err);
                        }
                        console.log(info);
                    });
                });
            });
        } else {
            res.send({
                message: 'Username already exists'
            });
        }
    });
});

module.exports = router;
