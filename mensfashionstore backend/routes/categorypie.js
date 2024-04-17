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
    let strquery =` SELECT 
    c.category_id,
    c.category_name,
    COUNT(bd.details_id) AS total_bookings
FROM 
    tbl_category c
LEFT JOIN 
    tbl_product p ON c.category_id = p.category_id
LEFT JOIN 
    tbl_bookingdetails bd ON p.product_id = bd.product_id
GROUP BY 
    c.category_id, c.category_name
`;
 // console.log(strquery)
 con.query(strquery,(err,result)=>{ 
    if(err) {console.log(err);} 
    // console.log(result);
     res.send(result) 
    });
 }); 
 module.exports = router;