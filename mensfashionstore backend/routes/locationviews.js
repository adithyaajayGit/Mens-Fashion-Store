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
  let district_id = req.body.district_id;
  let query = `SELECT * FROM tbl_location l INNER JOIN tbl_district d ON d.district_id = l.district_id WHERE l.district_id ='${district_id}'`;
  console.log(query);
  con.query(query, [district_id], function (err, rows) {
    if (err) throw err;
    res.send(rows);
  });
});

module.exports = router;