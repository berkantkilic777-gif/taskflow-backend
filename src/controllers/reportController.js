const { tasks } = require('./taskController');


const getCompletedTasksReport = (req, res) => {
  const completedTasks = tasks.filter(t => t.completed === true);
  res.status(200).json({
    success: true,
    title: "Completed Tasks Report",
    count: completedTasks.length,
    data: completedTasks
  });
};


const getPendingTasksReport = (req, res) => {
  const pendingTasks = tasks.filter(t => t.completed === false);
  res.status(200).json({
    success: true,
    title: "Pending Tasks Report",
    count: pendingTasks.length,
    data: pendingTasks
  });
};


const getSummaryReport = (req, res) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed === true).length;
  const pending = tasks.filter(t => t.completed === false).length;

  const byPriority = {
    high: tasks.filter(t => t.priority === 'high').length,
    medium: tasks.filter(t => t.priority === 'medium').length,
    low: tasks.filter(t => t.priority === 'low').length
  };

  res.status(200).json({
    success: true,
    title: "System Overview Summary",
    data: {
      totalTasks: total,
      completedTasks: completed,
      pendingTasks: pending,
      completionRate: total > 0 ? `${((completed / total) * 100).toFixed(1)}%` : "0%",
      priorityDistribution: byPriority
    }
  });
};

module.exports = {
  getCompletedTasksReport,
  getPendingTasksReport,
  getSummaryReport
};