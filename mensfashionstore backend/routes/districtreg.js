module.exports = router;
var express = require('express');
var router = express.Router();
var mysql = require('mysql'); 
var con = mysql.createConnection({ 
host: "localhost", 
user: "root", 
password: "", 
database:"db_mensfashionstore"
}); 
/* GET users listing. */
router.post('/',function (req, res, next){ 
let district_name = req.body.district_name;
let query = `SELECT * FROM tbl_district where district_name='${district_name}';`; 
con.query(query, (err, rows) => { if (err) 
throw err; if (rows == "") { 
 let strquery = `INSERT INTO tbl_district (district_name) VALUES(?);`; 
 con.query(strquery, [district_name]) 
res.send({ message: 'Success' }) 
 } else { res.send({ 
message: 'Failed' }) 
 } 
 // console.log("1 record inserted");
 }); }); 
module.exports = router; 