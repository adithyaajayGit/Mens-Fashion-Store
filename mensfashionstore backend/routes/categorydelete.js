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
let categoryid = req.body.category_id;
let query = `DELETE FROM tbl_category WHERE category_id='${categoryid}';`;
console.log(query)
con.query(query,(err,rows) => {
if (err) throw err;
res.send({message:'Success'}
);
});
});
module.exports = router