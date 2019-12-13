const mysql = require("mysql");
class Connection {
  constructor() {
  if(!this.pool) {
    this.pool = mysql.createPool({
      host: "34.69.103.62",
      user: "root",
      password: "password",
      database: "employees"
})
  }
return this.pool

  }}


  const instance = new Connection;

  module.exports = instance;