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
    let product_id = req.body.product_id; 
    let loginid = req.body.loginid; 
    let quantity = req.body.quantity;
    let total_amount = req.body.total_amount;
    
    let checkQuery = `SELECT * FROM tbl_cart WHERE product_id=? AND login_id=?`;

    con.query(checkQuery, [product_id, loginid], (err, rows) => {
        if (err) throw err;
        if (rows.length > 0) {
            // Product already exists in the cart, update the quantity
            console.log("Rows",rows);
            let existingQuantity = rows[0].quantity;
            let existingPrice=rows[0].total_amount;
            let newQuantity = parseInt(existingQuantity) + parseInt(quantity);
            let newPrice=parseInt(existingPrice) + parseInt(total_amount);
            let updateQuery = `UPDATE tbl_cart SET quantity=?, total_amount=? WHERE product_id=? AND login_id=?`;
            con.query(updateQuery, [newQuantity, newPrice, product_id, loginid], (err, result) => {
                if (err) {
                    console.error(err);
                    res.status(500).send({
                        message: 'Error updating quantity'
                    });
                } else {
                    console.log(result);
                    res.send({ 
                        message : 'success'
                    });
                }
            });
        } else {
            // Product does not exist in the cart, insert new entry
            let insertQuery = `INSERT INTO tbl_cart(product_id, login_id, quantity, total_amount) VALUES (?, ?, ?, ?)`;
            con.query(insertQuery, [product_id, loginid, quantity, total_amount], (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send({
                        message: 'Error inserting product data',
                        error: err.message
                    });
                } else res.send({
                    message: 'success'
                });
            });
        
        }
    });
}); 

module.exports = router;
