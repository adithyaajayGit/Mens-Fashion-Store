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
let query = `SELECT bl.login_username, bp.product_name, bd.quantity, bd.total_price, bm.booking_date FROM tbl_bookingdetails bd INNER JOIN tbl_product bp ON bd.product_id = bp.product_id INNER JOIN tbl_bookingmaster bm ON bd.master_id = bm.master_id INNER JOIN tbl_login bl ON bm.login_id = bl.login_id `;
con.query(query, (err, rows) =>
{
// if (err) throw err;
res.send(rows);
});
});
module.exports = router