const express = require("express");
const router = express.Router();

//route for employees
router.get("/employees", (req, res) => {
  res.send("employees");
});

module.exports = router;

// const mysql = require("mysql");
// const pool = require("../mysql/connection");

// const getEmployees = (req, res) => {
//   //   //Limit the result to 50
//   //   let sql = "SELECT * FROM ?? LIMIT ?";
//   //   sql = mysql.format(sql, ["employees", 50, req.params.id]);
//   //   //Select employees
//   //   pool.query(sql, (err, rows) => {
//   //     if (err) return handleSQLError(res, err);
//   //     return res.json(rows);
//   //   });
//   console.log("hello");
// };

// // // const getEmployeesById = (req, res) => {
// // //   //Select employees by id
// // //   let sql = "SELECT * FROM ?? WHERE emp_no = ?";
// // //   sql = mysql.format(sql[("employees", req.params.id)]);
// // //   pool.query(sql, (err, rows) => {
// // //     if (err) return handleSQLError(res, err);
// // //     return res.json(rows);
// // //   });
// // // };

// // // const getEmployeesByFirstName = (req, res) => {
// // //   let sql = "SELECT * FROM ?? WHERE ?? = ?";
// // //   sql = mysql.format(sql, ["employees", "first_name", req.body.first_name]);
// // //   pool.query(sql, (err, rows) => {
// // //     if (err) return handleSQLError(res, err);
// // //     return res.json(rows);
// // //   });
// // // };

// module.exports = {
//   getEmployees
//   //   //   getEmployeesById,
//   //   //   getEmployeesByFirstName
// };
