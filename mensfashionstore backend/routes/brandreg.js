var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "db_mensfashionstore"
});


router.post('/',function (req, res, next){ 
    let brand_name = req.body.brand_name;
    let brand_image= req.body.brand_image;

    let query = `SELECT * FROM tbl_brand where brand_name='${brand_name}';`; 
    con.query(query, (err, rows) => { if (err) 
    throw err; if (rows == "") { 
        let query = `INSERT INTO tbl_brand(brand_name,brand_image) VALUES (?,?);`;
        con.query(query,[brand_name,brand_image])
        res.send({ message: 'success' }) 
     } else { res.send({ 
    message: 'Failed' }) 
     } 
     }); }); 
    module.exports = router; 




