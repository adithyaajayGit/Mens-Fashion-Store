var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "db_mensfashionstore"
});
router.post('/', (req, res, next) => {
let brandid = req.body.brand_id;
let brandname = req.body.brand_name;
let image = req.body.image;
let strquery = `UPDATE tbl_brand SET brand_name='${brandname}',brand_image='${image}' WHERE brand_id='${brandid}'`;
console.log(strquery)
con.query(strquery, (err, rows) => {
// if (err) throw err;
res.send({ message: 'Success' })
})
});
module.exports = router;