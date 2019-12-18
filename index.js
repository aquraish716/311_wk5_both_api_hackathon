const express = require("express");
var employees = require("./routes/employees.js");

//initialize express
const app = express("");

//creating a path for files?
const path = require("path");

//create endpoints/route handlers
app.get("/", (req, res) => {
  res.send("<h1>Hello!</h1>");
});

//add the router to the middleware handling path
app.use("./routes/employees.js", employees);

//create a port
const PORT = process.env.PORT || 4001;

//listen on a port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// const express = require("express");

// const app = express();

// const port = process.env.PORT || 4001;

// const employees = require("./routes/employees");
// const salary = require("./routes/salary");
// const department = require("./routes/department");

// const bodyParser = require("body-parser");

// app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({extended: false}));
// app.use(employees);
// app.get("/", (req, res) => {
//   res.send("Welcome to our API");
// });

// console.log("employees", employees);

// // app.use(salary);

// // app.use(department);

// app.listen(port, () => {
//   console.log("app is listening on:", port);
// });
