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
let category_name = req.body.category_name;
let category_image= req.body.category_image;

let query = `SELECT * FROM tbl_category where category_name='${category_name}';`; 
con.query(query, (err, rows) => { if (err) 
throw err; if (rows == "") { 
 let strquery = `INSERT INTO tbl_category (category_name,category_image) VALUES(?,?);`; 
 con.query(strquery, [category_name,category_image]) 
res.send({ message: 'Success' }) 
 } else { res.send({ 
message: 'Failed' }) 
 } 
 // console.log("1 record inserted");
 }); }); 
module.exports = router; 