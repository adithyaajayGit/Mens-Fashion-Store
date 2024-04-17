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
    let categoryid = req.body.category_id;
    let categoryname = req.body.category_name;
    let categoryimage = req.body.category_image;

let strquery = `UPDATE tbl_category SET category_name='${categoryname}',category_image='${categoryimage}' WHERE category_id='${categoryid}'`;
console.log(strquery)
con.query(strquery, (err, rows) => {
if (err) throw err;
res.send({message:'Success'})
});
})
module.exports = router;