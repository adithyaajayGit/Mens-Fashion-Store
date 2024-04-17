var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "db_mensfashionstore"
});


router.post('/',function (req, res, next){ 
    let category_id = req.body.category_id;
    let brand_id= req.body.brand_id;
    let product_name= req.body.product_name;
    let product_size= req.body.product_size;
    let product_colour= req.body.product_colour;
    let product_image= req.body.product_image;
    let product_price= req.body.product_price;



    let query = `SELECT * FROM tbl_product where product_name='${product_name}';`; 
    console.log(query);
    con.query(query, (err, rows) => { if (err) 
    throw err; if (rows == "") { 
        let query = `INSERT INTO tbl_product(category_id,brand_id,product_name,product_size,product_colour,product_image,price) VALUES (?,?,?,?,?,?,?);`;
        con.query(query,[category_id,brand_id,product_name,product_size,product_colour,product_image,product_price])
        res.send({ message: 'success' }) 
     } else { res.send({ 
    message: 'Failed' }) 
     } 
     }); }); 
    module.exports = router; 




