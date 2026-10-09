const express = require('express');
const logger = require('./middlewares/logger');
const taskRoutes = require('./routes/taskRoutes');
const reportRoutes = require('./routes/reportRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(logger);


app.use('/api/tasks', taskRoutes);
app.use('/api/reports', reportRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});