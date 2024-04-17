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
let brandid = req.body.id;
//console.log(districtid);
let query = `SELECT * FROM tbl_brand where brand_id='${brandid}'`;
// console.log(query);
con.query(query,(err,rows) => {
if (err) throw err;
res.send(rows);
});
});
module.exports = router;