const express = require("express");
const departmentController = require("../controllers/department");
const router = express.Router();

router.get("/", departmentController.getDepartment);

router.get("/:dept_no", departmentController.getDepartmentByNumber);

router.get("/:dept_name", departmentController.getDepartmentByName);

module.exports = router;
