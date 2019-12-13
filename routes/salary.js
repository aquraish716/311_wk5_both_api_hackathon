const express = require("express");
const salaryController = require("../controllers/salary");
const router = express.Router();

router.get("/", salaryController.getSalary);

router.get("/:id", salaryController.getSalaryById);

router.get("employeeno/:emp_no", salaryController.getSalaryById);

module.exports = router;
