const mysql = require('mysql');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error');

const getDepartment = (req, res) => {
  //select department
  let sql = "SELECT * FROM ?? LIMIT ?";
  sql = mysql.format(sql, ["departments", 50]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getDepartmentByNumber = (req, res) => {
  //Select department by department number
  let sql = "SELECT * FROM ?? WHERE dept_no = ?";
  sql = mysql.format(sql, ["departments", req.params.dept_no]);
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getDepartmentByName = (req, res) => {
  let sql = "SELECT * FROM ?? WHERE dept_name = ?";
  sql = mysql.format(sql, ["departments", req.params.dept_name]);
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  getDepartment,
  getDepartmentByNumber,
  getDepartmentByName
};
