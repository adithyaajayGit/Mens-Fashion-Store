var mysql = require('mysql');
var express = require('express');
var router = express.Router(); 
var con = mysql.createConnection({ 
host: "localhost", 
user: "root", 
password: "", 
database: "db_mensfashionstore" 
}); 

router.post('/',(req,res,next)=>{ 
   let login_id=req.body.loginid;
    let strquery = `SELECT * FROM tbl_cart c INNER JOIN tbl_product p ON c.product_id = p.product_id where c.login_id='${login_id}' `; 
 console.log(strquery)
 con.query(strquery,(err,result)=>{ 
    if(err) {console.log(err);} 
    // console.log(result);
     res.send(result) 
    });
 }); 
 module.exports = router;