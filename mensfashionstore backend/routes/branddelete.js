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
let brandid = req.body.brand_id;
let query = `DELETE FROM tbl_brand WHERE brand_id='${brandid}';`;
console.log(query)
con.query(query,(err,rows) => {
if (err) throw err;
res.send({message:'Success'}
);
});
});
module.exports = router