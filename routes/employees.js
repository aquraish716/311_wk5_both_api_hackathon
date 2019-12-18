const express = require("express");
const router = express.Router();

//route for employees
router.get("/employees", (req, res) => {
  res.send("employees");
});

module.exports = router;

// const express = require("express");
// const employeesController = require("../controllers/employees");
// const router = express.Router();

// router.get("/employees", employeesController.getEmployees);

// // // router.get('/:id', employeesController.getEmployeesById)

// // // router.get('/:first_name', employeesController.getEmployeesByFirstName)

// module.exports = router;
