var mysql = require('mysql');
var express = require('express');
var path = require('path');
var router = express.Router();
const nodemailer = require("nodemailer");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_mensfashionstore"
});

router.post('/', (req, res, next) => {
    const username = req.body.username;
    const password = generateRandomPassword(8);
    const emailQuery = `SELECT customer_email FROM tbl_customer t INNER JOIN tbl_login x on x.login_id = t.login_id WHERE x.login_username='${username}';`;

    con.query(emailQuery, (emailErr, emailRows) => {
        if (emailErr) {
            console.error(emailErr);
            res.status(500).send({ message: 'Error fetching email' });
            return;
        }
        if (emailRows.length === 0) {
            res.status(404).send({ message: 'User not found' });
            return;
        }
        const userEmail = emailRows[0].customer_email;
        const mailOptions = {
            from: `"MaleFashion" <adithyaajay63@gmail.com>`,
            to: `${userEmail}`,
            subject: "Password updated Successfully",
            html: `the new password is :${password}`
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
        const strquery =` UPDATE tbl_login SET login_password='${password}' WHERE login_username='${username}'`;

        con.query(strquery, (updateErr, updateRows) => {
            if (updateErr) {
                console.error(updateErr);
                res.status(500).send({ message: 'Error updating password' });
                return;
            }

            transporter.sendMail(mailOptions, (mailErr, info) => {
                if (mailErr) {
                    console.error(mailErr);
                    res.status(500).send({ message: 'Error sending email' });
                } else {
                    console.log(info);
                    res.send({ message: 'Success' });
                }
            });
        });
    });
});

function generateRandomPassword(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}
module.exports = router;