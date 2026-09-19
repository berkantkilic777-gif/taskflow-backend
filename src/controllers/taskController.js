let tasks = [
    {
        id : 1,
        title : "Learn Express Arhitecture",
        completed : false
    },
    {
        id : 2,
        title : "Setup Git Workflow",
        completed : true
    },
]
const getAllTasks = (req, res) => {
    res.status(200).json({
        success : true,
        data : tasks
    });
};

const createTask = (req, res) => {
    const { title } = req.body;
    if(!title){
        return res.status(400).json({
            success : false,
            message : "Title is required"
        });
    }
    const newTask = {
        id : tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
        title,
        completed : false
    };
    tasks.push(newTask);
    res.status(201).json({
        success : true,
        data : newTask
    });
};
const updateTask = (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    
    const task = tasks.find(t => t.id === parseInt(id));
    if(!task){
        return res.status(404).json({
            success : false,
            message : `Task with id ${id} not found`
        });
    }
    if(title !== undefined) task.title = title;
    if(completed !== undefined) task.completed = completed;
    res.status(200).json({
        success : true,
        data : task
    });
};
const deleteTask = (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex(t => t.id === parseInt(id));

  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      message: `Task with id ${id} not found`
    });
  }

  tasks.splice(taskIndex, 1);

  res.status(200).json({
    success: true,
    message: `Task with id ${id} deleted successfully`
  });
};
module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
};