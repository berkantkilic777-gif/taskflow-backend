const exprress = require('express');
const router = exprress.Router();
const {getAllTasks , createTask} = require('../controllers/taskController');

router.get('/', getAllTasks);
router.post('/', createTask);

module.exports = router;