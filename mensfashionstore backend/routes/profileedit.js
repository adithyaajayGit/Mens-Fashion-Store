var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection
({
host: "localhost",
user: "root",
password: "",
database: "db_mensfashionstore"
});
router.post('/', (req, res, next) => {                                
    let customer_id = req.body.customer_id;
    let district_id = req.body.district_id;
    let location_id = req.body.location_id;
    let customer_name = req.body.customer_name;
    let customer_email = req.body.customer_email;
    let customer_contactno = req.body.customer_contactno;
    let customer_pincode = req.body.customer_pincode;



let strquery = `UPDATE tbl_customer SET district_id='${district_id}',location_id='${location_id}',customer_name='${customer_name}',customer_email='${customer_email}',customer_contactno='${customer_contactno}',customer_pincode='${customer_pincode}' where customer_id='${customer_id}'`;
console.log(strquery)
con.query(strquery, (err, rows) => {
if (err) throw err;
res.send({message:'Success'})
});
})
module.exports = router;