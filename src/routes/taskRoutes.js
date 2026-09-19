const express = require('express');
const router = express.Router();
const {getAllTasks , createTask , getTaskById, updateTask,
deleteTask} = require('../controllers/taskController');

router.get('/', getAllTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.get('/:id', getTaskById);

module.exports = router;