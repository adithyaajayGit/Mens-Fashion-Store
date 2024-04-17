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
    let loginid= req.body.loginid;
    let name=req.body.name; 
    let house_name= req.body.house_name;
    let district_id= req.body.district_id;
    let location_id= req.body.location_id;
    let pincode= req.body.pincode;
    let landmark= req.body.landmark;
    let contactno= req.body.contactno;



  

      let strquery = `INSERT INTO tbl_delivery (login_id,name,housename,district_id,location_id,pincode,landmark,contactno) VALUES(?,?,?,?,?,?,?,?)`;
      con.query(strquery,  [loginid,name,house_name,district_id,location_id,pincode,landmark,contactno])
      res.send({ message: 'success' })
      
}) 
 module.exports = router;