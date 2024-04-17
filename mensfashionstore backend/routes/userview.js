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
    let login_id=req.body.id;
    let strquery =`SELECT c.*, d.district_name, l.location_name, login.login_username
    FROM tbl_customer AS c 
    INNER JOIN tbl_district AS d ON c.district_id = d.district_id 
    INNER JOIN tbl_location AS l ON c.location_id = l.location_id
    INNER JOIN tbl_login AS login ON c.login_id = login.login_id
    WHERE c.login_id = '${login_id}';`;
    
 console.log(strquery)
 con.query(strquery,(err,result)=>{ 
    if(err) {console.log(err);} 
     console.log(result);
     res.send(result) 
    });
 }); 
 module.exports = router;