var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "db_mensfashionstore"
});
router.post('/', (req, res, next) => {
let locationid = req.body.location_id;
let query = `DELETE FROM tbl_location WHERE location_id='${locationid}';`;
console.log(query)
con.query(query,(err,rows) => {
if (err) throw err;
res.send({message:'Success'}
);
});
});
module.exports = router