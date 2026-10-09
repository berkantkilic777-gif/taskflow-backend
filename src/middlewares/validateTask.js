const validateTask = (req, res, next) => {
  const { title, priority } = req.body;

  
  if (!title || typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({
      success: false,
      message: 'Validation Error: "title" is required and must be a non-empty string'
    });
  }

  
  const validPriorities = ['low', 'medium', 'high'];
  if (priority && !validPriorities.includes(priority.toLowerCase())) {
    return res.status(400).json({
      success: false,
      message: `Validation Error: "priority" must be one of [${validPriorities.join(', ')}]`
    });
  }

  next();
};

module.exports = validateTask;