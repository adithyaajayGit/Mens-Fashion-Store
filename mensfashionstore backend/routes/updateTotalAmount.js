// // Assuming you're using Node.js with Express.js framework

// const express = require('express');
// const router = express.Router();
// const mysql = require('mysql');

// const con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "db_mensfashionstore"
// });

// router.post('/updateTotalAmount', (req, res) => {
//     const { product_id, loginid, total_amount } = req.body;

//     const updateQuery = `UPDATE tbl_cart SET total_amount = ? WHERE product_id = ? AND login_id = ?`;

//     con.query(updateQuery, [total_amount, product_id, loginid], (err, result) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send({
//                 message: 'Error updating total amount'
//             });
//         } else {
//             console.log(result);
//             res.send({
//                 message: 'Total amount updated successfully'
//             });
//         }
//     });
// });

// module.exports = router;
