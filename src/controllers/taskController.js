let tasks = [
  {
    id: 1,
    title: "Learn Express Architecture",
    description: "Understand MVC layering and middleware flow",
    priority: "high",
    assignee: "musa",
    completed: false,
    createdAt: "2026-10-01T10:00:00.000Z"
  },
  {
    id: 2,
    title: "Setup Git Workflow",
    description: "Initialize GitHub repo with branching model",
    priority: "medium",
    assignee: "berkant",
    completed: true,
    createdAt: "2026-10-02T11:30:00.000Z"
  },
  {
    id: 3,
    title: "Build Backend Services",
    description: "Develop REST endpoints and custom validation middleware",
    priority: "high",
    assignee: "musa",
    completed: false,
    createdAt: "2026-10-03T09:15:00.000Z"
  }
];


const getAllTasks = (req, res) => {
  let result = [...tasks];
  const { status, priority, assignee, sort, page, limit } = req.query;

  
  if (status !== undefined) {
    const isCompleted = status === 'completed' || status === 'true';
    result = result.filter(t => t.completed === isCompleted);
  }

  
  if (priority) {
    result = result.filter(t => t.priority.toLowerCase() === priority.toLowerCase());
  }

  
  if (assignee) {
    result = result.filter(t => t.assignee.toLowerCase() === assignee.toLowerCase());
  }

  
  if (sort) {
    if (sort === 'createdAt') {
      result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (sort === '-createdAt') {
      result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
  }

  
  const totalItems = result.length;
  if (page && limit) {
    const pageNum = parseInt(page, 10) || 1;
    const limitNum = parseInt(limit, 10) || 10;
    const startIndex = (pageNum - 1) * limitNum;
    result = result.slice(startIndex, startIndex + limitNum);

    return res.status(200).json({
      success: true,
      pagination: {
        total: totalItems,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(totalItems / limitNum)
      },
      data: result
    });
  }

  res.status(200).json({
    success: true,
    count: result.length,
    data: result
  });
};


const searchTasks = (req, res) => {
  const { keyword } = req.query;
  if (!keyword) {
    return res.status(400).json({
      success: false,
      message: 'Query parameter "keyword" is required for search'
    });
  }

  const query = keyword.toLowerCase();
  const matchedTasks = tasks.filter(t =>
    t.title.toLowerCase().includes(query) ||
    (t.description && t.description.toLowerCase().includes(query))
  );

  res.status(200).json({
    success: true,
    count: matchedTasks.length,
    data: matchedTasks
  });
};


const getTasksByAssignee = (req, res) => {
  const { name } = req.params;
  const userTasks = tasks.filter(t => t.assignee && t.assignee.toLowerCase() === name.toLowerCase());

  res.status(200).json({
    success: true,
    assignee: name,
    count: userTasks.length,
    data: userTasks
  });
};


const getTaskById = (req, res) => {
  const { id } = req.params;
  const task = tasks.find(t => t.id === parseInt(id));

  if (!task) {
    return res.status(404).json({
      success: false,
      message: `Task with id ${id} not found`
    });
  }

  res.status(200).json({
    success: true,
    data: task
  });
};


const createTask = (req, res) => {
  const { title, description, priority, assignee } = req.body;

  const newTask = {
    id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
    title: title.trim(),
    description: description || "",
    priority: priority ? priority.toLowerCase() : "medium",
    assignee: assignee ? assignee.toLowerCase() : "unassigned",
    completed: false,
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);

  res.status(201).json({
    success: true,
    data: newTask
  });
};


const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, priority, assignee, completed } = req.body;

  const task = tasks.find(t => t.id === parseInt(id));
  if (!task) {
    return res.status(404).json({
      success: false,
      message: `Task with id ${id} not found`
    });
  }

  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (priority !== undefined) task.priority = priority.toLowerCase();
  if (assignee !== undefined) task.assignee = assignee.toLowerCase();
  if (completed !== undefined) task.completed = completed;

  res.status(200).json({
    success: true,
    data: task
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
  tasks,
  getAllTasks,
  searchTasks,
  getTasksByAssignee,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};