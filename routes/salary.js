const express = require('express');
const salaryController = require('../controllers/salary');
const router = express.Router();

router.get("/salary", salaryController.getSalary);

router.get("/:emp_no/", salaryController.getSalaryByEmployeeNumber);

router.get('/fromdate/:from_date/', salaryController.getSalaryByDate);

module.exports = router;

