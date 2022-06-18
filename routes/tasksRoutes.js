const express = require('express');
const router = express.Router();
const taskController = require('../controllers/tasksControllers')

const task = new taskController();
router.get('/', task.getAll);

router.post('/',(req,res)=>{})

  module.exports = router;