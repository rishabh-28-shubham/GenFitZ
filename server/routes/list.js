const express = require('express');
const { addTaskController, updateTaskController, deleteTaskController, getTaskController } = require('../controllers/List');
const router = express.Router();

router.post('/addtask' , addTaskController);
router.put('/updatetask/:id' , updateTaskController)
router.delete('/deletetask/:id' , deleteTaskController)
router.get('/gettask/:id' , getTaskController);

module.exports = router;