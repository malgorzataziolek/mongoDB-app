const express = require('express');
const router = express.Router();

const EmployeeController = require('../controllers/employees.controller');

router.get('/employees', EmployeeController.getAll);
router.get('/employees/random', EmployeeController.getRandom);
router.get('/employees/:id', EmployeeController.getId);
router.post('/employees', EmployeeController.postNew);
router.put('/employees/:id', EmployeeController.putId);
router.delete('/employees/:id', EmployeeController.delId);

module.exports = router;
