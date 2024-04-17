var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_mensfashionstore"
});
/* GET users listing. */
router.post('/', function (req, res, next) {
    let startdate = req.body.startdate;
    let enddate = req.body.enddate;
    let qry = `SELECT *
FROM tbl_bookingmaster AS b
INNER JOIN tbl_bookingdetails AS d ON d.master_id = b.master_id
INNER JOIN tbl_product AS p ON p.product_id = d.product_id
WHERE b.booking_date > '${startdate}' 
AND b.booking_date < '${enddate}' 
AND b.status = 'paid';
`;
    console.log(qry)
    con.query(qry, (err, row) => {
        if (err) throw err;
        res.send(row);
    });
});
module.exports = router;