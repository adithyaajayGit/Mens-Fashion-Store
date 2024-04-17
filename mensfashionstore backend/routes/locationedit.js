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
    let locationid = req.body.location_id;
    let districtid = req.body.district_id;
let locationname = req.body.location_name;
let strquery = `UPDATE tbl_location SET district_id='${districtid}',location_name='${locationname}' where location_id='${locationid}'`;
console.log(strquery)
con.query(strquery, (err, rows) => {
if (err) throw err;
res.send({message:'Success'})
});
})
module.exports = router;