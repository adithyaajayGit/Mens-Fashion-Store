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
let query = `SELECT bm.*, bl.login_username FROM tbl_bookingmaster bm INNER JOIN tbl_login bl ON bm.login_id = bl.login_id WHERE bm.status = 'paid' `;
con.query(query, (err, rows) =>
{
// if (err) throw err;
res.send(rows);
});
});
module.exports = router