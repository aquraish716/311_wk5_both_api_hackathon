const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "34.69.103.62",
  user: "root",
  password: "password",
  database: "employees"
});
connection.connect(err => {
  if (err) throw err;
  console.log("Connected!");
});
