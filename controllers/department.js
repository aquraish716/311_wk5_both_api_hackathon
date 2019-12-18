// const mysql = require("mysql");
// const pool = require("../mysql/connection");

// const getDepartment = (req, res) => {
//   //select department
//   let sql = "SELECT * FROM ??";
//   sql = mysql.format(sql, ["departments"]);

//   pool.query(sql, (err, rows) => {
//     if (err) return handleSQLError(res, err);
//     return res.json(rows);
//   });
// };

// const getDepartmentByNumber = (req, res) => {
//   //Select department by department number
//   let sql = "SELECT * FROM ?? WHERE dept_no = ?";
//   sql = mysql.format(sql, ["departments", req.params.dept_no]);
//   pool.query(sql, (err, rows) => {
//     if (err) return handleSQLError(res, err);
//     return res.json(rows);
//   });
// };

// const getDepartmentByName = (req, res) => {
//   let sql = "SELECT * FROM ?? WHERE ?? = ?";
//   sql = mysql.format(sql, ["departments", req.body.dept_name]);
//   pool.query(sql, (err, rows) => {
//     if (err) return handleSQLError(res, err);
//     return res.json(rows);
//   });
// };

// module.export = {
//   getDepartment,
//   getDepartmentByNumber,
//   getDepartmentByName
// };
