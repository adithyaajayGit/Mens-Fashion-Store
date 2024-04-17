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
    let districtname=req.body.district_id; 
    let location_name= req.body.location_name;
  
    let query =` SELECT * FROM tbl_location  where location_name='${location_name}';`;
    con.query(query, (err, rows) => {
       if (err) throw err;
       if (rows == "") {
      let strquery = `INSERT INTO tbl_location (district_id,location_name) VALUES(?,?)`;
      con.query(strquery,  [districtname,location_name])
      res.send({ message: "Success" })
      }
      else {
         res.send({ message: 'Failed' })
      }
      console.log("1 record inserted");
   });
});
module.exports = router;