var mysql = require('mysql');
var express = require('express');
var router = express.Router(); 
var con = mysql.createConnection({ 
    host: "localhost", 
    user: "root", 
    password: "", 
    database: "db_mensfashionstore" 
}); 

router.get('/', (req, res, next) => { 
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based index
    let currentYear = currentDate.getFullYear();
    
    let strquery = `SELECT COUNT(*) AS paymentCount FROM tbl_payment WHERE MONTH(date) = ${currentMonth} AND YEAR(date) = ${currentYear}`;
    
    con.query(strquery, (err, result) => { 
        if (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
            return;
        } 
        res.send(result); 
    });
}); 

module.exports = router;
