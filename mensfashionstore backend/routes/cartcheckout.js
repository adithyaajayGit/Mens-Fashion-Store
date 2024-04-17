var mysql = require('mysql');
var express = require('express');
var path = require('path'); 
var router = express.Router();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_mensfashionstore"
});

router.post('/', (req, res, next) => {
    let masterQuery = `INSERT INTO tbl_bookingmaster(login_id, total_amount, status, booking_date) VALUES (?, ?, ?, CURDATE())`;
    let detailsQuery = `INSERT INTO tbl_bookingdetails(master_id, product_id, quantity, total_price) VALUES (?, ?, ?, ?)`;

    let total_amount = req.body.total_amount;
    let login_id = req.body.login_id;

    con.query(masterQuery, [login_id, total_amount, 'requested'], (err, masterResult) => {
        if (err) {
            console.error(err);
            return res.status(500).send({
                message: 'Error inserting login data',
                error: err.message
            });
        }

        let master_id = masterResult.insertId;

        let cartQuery = `SELECT product_id, quantity, total_amount FROM tbl_cart WHERE login_id = ?`;
        con.query(cartQuery, [login_id], (err, cartResult) => {
            if (err) {
                console.error(err);
                return res.status(500).send({
                    message: 'Error retrieving cart data',
                    error: err.message
                });
            }

            // Iterate over the cart items and insert details into tbl_bookingdetails
            cartResult.forEach(cartItem => {
                let { product_id, quantity, total_amount } = cartItem;

                con.query(detailsQuery, [master_id, product_id, quantity, total_amount], (err, detailsResult) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).send({
                            message: 'Error inserting product data',
                            error: err.message
                        });
                    }
                });
            });

            res.send({
                message: 'success'
            });
        });
    });
});

module.exports = router;
