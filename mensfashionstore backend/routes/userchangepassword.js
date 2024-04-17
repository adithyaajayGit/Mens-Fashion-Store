var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_mensfashionstore"
});

router.post('/', (req, res, next) => {
  let username = req.body.username;
  let currentPassword = req.body.currentPassword;
  let newpassword = req.body.newpassword;
  let login_id = req.body.login_id;

  let checkCredentialsQuery =` SELECT COUNT(*) AS count FROM tbl_login WHERE login_username='${username}' AND login_password='${currentPassword}' AND login_id='${login_id}'`;
  
  con.query(checkCredentialsQuery, (err, result) => {
    if (err) throw err;
    
    if (result[0].count > 0) {
      let updateQuery =` UPDATE tbl_login SET login_password='${newpassword}' WHERE login_id='${login_id}' AND login_username='${username}'`;
      
      con.query(updateQuery, (err, rows) => {
        if (err) throw err;
        res.send({ message: 'Success' });
      });
    } else {
      res.send({ message: 'Invalid Username or Password' });
    }
  });
});

module.exports = router;