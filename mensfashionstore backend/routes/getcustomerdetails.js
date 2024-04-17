var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var con=mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"db_mensfashionstore"
})
router.post('/', (req, res, next) => {
let id = req.body.id;
let query = `SELECT * FROM tbl_customer where customer_id='${id}'`;
console.log(query);
con.query(query, (err, rows) => {
if (err) throw err;
res.send(rows);
});
});
/* GET users listing. */
module.exports = router;