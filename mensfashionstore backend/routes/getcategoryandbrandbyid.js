var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "db_mensfashionstore"
});
/* GET users listing. */
router.post('/', (req, res, next) => {
let categoryid = req.body.category_id;
let brandid = req.body.brand_id;

//console.log(districtid);
let query = `SELECT * FROM tbl_product p
INNER JOIN tbl_category c ON p.category_id = c.category_id
INNER JOIN tbl_brand b ON p.brand_id = b.brand_id
WHERE p.category_id = '${categoryid}' AND p.brand_id = '${brandid}'`;
// console.log(query);
con.query(query,(err,rows) => {
if (err) throw err;
res.send(rows);
});
});
module.exports = router;



