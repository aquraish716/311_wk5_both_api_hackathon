const mysql = require('mysql');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error');

const getSalary = (req, res) => {
  //select salary
  let sql = "SELECT * FROM ??";
  sql = mysql.format(sql, ["salaries"]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getSalaryByEmployeeNumber = (req, res) => {
  //Select salary by employee number
  let sql = "SELECT * FROM ?? WHERE emp_no = ?";
  sql = mysql.format(sql, ["salaries", req.params.emp_no]);
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getSalaryByDate = (req, res) => {
  let sql = "SELECT * FROM ?? WHERE ?? = ?";
  sql = mysql.format(sql, ["salaries", "from_date", req.body.from_date]);
  
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  getSalary,
  getSalaryByEmployeeNumber,
  getSalaryByDate
};
