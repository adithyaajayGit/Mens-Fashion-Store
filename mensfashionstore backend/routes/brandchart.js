var mysql = require('mysql');
var express = require('express');
var router = express.Router(); 
var con = mysql.createConnection({ 
host: "localhost", 
user: "root", 
password: "", 
database: "db_mensfashionstore" 
}); 

router.get('/',(req,res,next)=>{ 
    let strquery = `SELECT b.brand_name, COUNT(p.product_id) AS product_count
    FROM tbl_brand b
    LEFT JOIN tbl_product p ON b.brand_id = p.brand_id
    GROUP BY b.brand_name`;
 // console.log(strquery)
 con.query(strquery,(err,result)=>{ 
    if(err) {console.log(err);} 
    // console.log(result);
     res.send(result) 
    });
 }); 
 module.exports = router;