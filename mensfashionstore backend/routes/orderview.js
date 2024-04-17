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
    let strquery = `
    SELECT 
        p.product_name, 
        p.product_image,
        bd.quantity,
        bd.total_price,
        bm.booking_date
    FROM 
        tbl_bookingmaster bm
        INNER JOIN tbl_bookingdetails bd ON bm.master_id = bd.master_id
        INNER JOIN tbl_product p ON bd.product_id = p.product_id
    WHERE 
        bm.login_id = '${login_id}'
    ORDER BY 
        bm.booking_date DESC;`; 
 console.log(strquery)
 con.query(strquery,(err,result)=>{ 
    if(err) {console.log(err);} 
    // console.log(result);
     res.send(result) 
    });
 }); 
 module.exports = router;