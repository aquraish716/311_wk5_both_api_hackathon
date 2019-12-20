const mysql = require('mysql');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error');

const getEmployees = (req, res) => {
   //Limit the result to 50
    let sql = 'SELECT * FROM ?? LIMIT ?';
    sql = mysql.format(sql, ['employees', 50]);
    //Select employees
pool.query(sql, (err, rows) => { 
if (err) return handleSQLError(res, err)
    return res.json(rows);
});
};

const getEmployeesById = (req, res) => {
    //Select employees by id
    let sql = 'SELECT * FROM ?? WHERE emp_no = ?';
    sql = mysql.format(sql, ['employees', req.params.emp_no]);
    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
    }

const getEmployeesByFirstName = (req, res) => {
        let sql = 'SELECT * FROM ?? WHERE first_name = ?';
        sql = mysql.format(sql, ['employees', req.params.first_name]);
        pool.query(sql, (err, rows) => {
            if (err) return handleSQLError(res, err)
            return res.json(rows);
        })
}

module.exports = {
    getEmployees,
    getEmployeesById, 
    getEmployeesByFirstName
}