var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "db_mensfashionstore"
});
router.get('/', (req, res, next) => {
let query = 'SELECT * FROM tbl_product';
con.query(query, (err, rows) =>
{
// if (err) throw err;
res.send(rows);
});
});
module.exports = router