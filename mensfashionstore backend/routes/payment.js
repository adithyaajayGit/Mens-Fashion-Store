var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_mensfashionstore"
});

router.post('/', (req, res, next) => {
    let query1 = `SELECT max(master_id) as master_id from tbl_bookingmaster ;`;
    con.query(query1, (err, result1) => {
        if (err) throw err;

        var row1 = result1[0];
        let master_id = row1.master_id;
        let login_id = req.body.login_id;
        let total_amount = req.body.total_amount;

        let strquery = `INSERT INTO tbl_payment (master_id,total_amount,date,status) VALUES(?,?,CURDATE(),?)`;
        con.query(strquery, [master_id, total_amount, 'paid'], (err, result2) => {
            if (err) throw err;

            // Update the status in tbl_bookingmaster to 'payment'
            let updateQuery = `UPDATE tbl_bookingmaster SET status = 'paid' WHERE master_id = ?`;
            con.query(updateQuery, [master_id], (err, result3) => {
                if (err) throw err;

                // Get the list of products in the cart
                let queryCartItems = `SELECT product_id, quantity FROM tbl_cart WHERE login_id = ?`;
                con.query(queryCartItems, [login_id], (err, cartItems) => {
                    if (err) throw err;

                    // Iterate through each item in the cart
                    cartItems.forEach((cartItem) => {
                        let product_id = cartItem.product_id;
                        let quantity = cartItem.quantity;

                        // Decrease the stock for each product
                        let updateStockQuery = `UPDATE tbl_product SET stock = stock - ? WHERE product_id = ?`;
                        con.query(updateStockQuery, [quantity, product_id], (err, updateResult) => {
                            if (err) throw err;
                        });
                    });

                    // Remove the items from the cart after payment
                    let query3 = `DELETE FROM tbl_cart WHERE login_id = ?`;
                    con.query(query3, [login_id], (err, rows) => {
                        if (err) throw err;

                        // Send response indicating success
                        res.send({ message: 'success' });
                    });
                });
            });
        });
    });
});

module.exports = router;
