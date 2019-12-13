// const mysql = require("mysql");
// const connection = mysql.createConnection({
//   host: "34.69.103.62",
//   user: "root",
//   password: "password",
//   database: "employees"
// });
// connection.connect(err => {
//   if (err) throw err;
//   console.log("Connected!");
// });

const mysql = require("mysql");

class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating connection pool...");
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: "34.69.103.62",
        user: "root",
        password: "password",
        database: "employees"
      });

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;
