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
let district_id = req.body.id;
//console.log(districtid);
let query = `SELECT * FROM tbl_location l inner join tbl_district d on 
d.district_id=l.district_id where l.district_id='${district_id}'`;
// console.log(query);
con.query(query,(err,rows) => {
if (err) throw err;
res.send(rows);
});
});
module.exports = router;