const express = require('express');
const router = express.Router();
const validateTask = require('../middlewares/validateTask');
const {
  getAllTasks,
  searchTasks,
  getTasksByAssignee,
  createTask,
  getTaskById,
  updateTask,
  deleteTask
} = require('../controllers/taskController');


router.get('/search', searchTasks);
router.get('/assignee/:name', getTasksByAssignee);


router.get('/', getAllTasks);
router.post('/', validateTask, createTask);
router.get('/:id', getTaskById);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;