var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "db_mensfashionstore"
});
/* GET users listing. */
router.post('/', function (req, res, next) {
   let product_id = req.body.product_id;
   let current_stock = req.body.current_stock;
   let add=req.body.newstock;
     let newstock= (+current_stock)+(+add);
     console.log(newstock);
     var stockdate=new Date()

 let query = `UPDATE tbl_product  SET  stock="${newstock}"  WHERE product_id='${product_id}'`;
 console.log(query)
 con.query(query, (err,rows)=>{
   if(err) throw err;
   
         let strquery = `INSERT INTO tbl_stock (product_id, newstock, stock_date) VALUES (?,?,?)`;
         con.query(strquery, [product_id, newstock,stockdate])
         console.log(strquery)
         res.send({ message: 'success' })

});
});

module.exports = router;