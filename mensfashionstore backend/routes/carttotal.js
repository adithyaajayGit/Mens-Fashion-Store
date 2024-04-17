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
   let loginid=req.body.loginid
    let strquery = `select sum(total_amount)as total_amount from tbl_cart where login_id='${loginid}'`; 
 console.log(strquery)
 con.query(strquery,(err,result)=>{ 
    if(err) {console.log(err);} 
    // console.log(result);
     res.send(result) 
    });
 }); 
 module.exports = router;