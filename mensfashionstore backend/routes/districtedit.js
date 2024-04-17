var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection
({
host: "localhost",
user: "root",
password: "",
database: "db_mensfashionstore"
});
router.post('/', (req, res, next) => {
    let disid = req.body.district_id;
    let disname = req.body.district_name;
let strquery = `UPDATE tbl_district SET district_name='${disname}' WHERE district_id='${disid}'`;
console.log(strquery)
con.query(strquery, (err, rows) => {
if (err) throw err;
res.send({message:'Success'})
});
})
module.exports = router;