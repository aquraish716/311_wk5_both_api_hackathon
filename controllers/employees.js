const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getEmployees= (req, res) => {
    //Select employees
pool.query('SELECT ?? FROM ??', (err, row) =>{
if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getEmployeesById = (req, res) => {
    //Select employees by id
    let sql = 'SELECT * FROM ?? WHERE ?? = ?';
    sql = mysql.format(sql['users', 'id', req.params.id]);

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
      })
    }

    const getEmployeesByFirstName = (req, res) =>{
        let sql = 'SELECT * FROM ?? WHERE ?? = ?';
        sql = mysql.format(sql['users', 'first_name', req.body.first_name]);

        pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
        })
    }


module.export = {
    getEmployees, 
    getEmployeesById, 
    getEmployeesByFirstName

}