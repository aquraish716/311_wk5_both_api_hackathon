const express = require('express');
const salaryController = require('../controllers/salary');
const router = express.Router();

router.get("/", salaryController.getSalary);

router.get("/:emp_no", salaryController.getSalaryByEmployeeNumber);

router.get("/:from_date", salaryController.getSalaryByDate);

module.exports = router;

