var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection
({
host: "localhost",
user: "root",
password: "",
database: "db_mensfashionstore"
});
router.post('/', (req, res, next) => {
    let product_id = req.body.product_id;
    let category_id = req.body.category_id;
    let brand_id = req.body.brand_id;
    let product_name = req.body.product_name;
    let product_size = req.body.product_size;
    let product_colour = req.body.product_colour;
    let product_image = req.body.product_image;
    let product_price = req.body.price;


let strquery = `UPDATE tbl_product SET category_id='${category_id}',brand_id='${brand_id}',product_name='${product_name}',product_size='${product_size}',product_colour='${product_colour}',product_image='${product_image}',price='${product_price}' where product_id='${product_id}'`;
console.log(strquery)
con.query(strquery, (err, rows) => {
if (err) throw err;
res.send({message:'Success'})
});
})
module.exports = router;