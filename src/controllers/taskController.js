let task = [
    {
        id : 1,
        tittle : "Learn Express Arhitecture",
        complated : false
    },
    {
        id : 2,
        tittle : "Setup Git Workflow",
        complated : true
    },
]
const getAllTasks = (req, res) => {
    res.status(200).json({
        success : true,
        data : task
    });
};

const createTask = (req, res) => {
    const { tittle } = req.body;
    if(!tittle){
        return res.status(400).json({
            success : false,
            message : "Title is required"
        });
    }
    const newTask = {
        id : task.length > 0 ? Math.max(...task.map(t => t.id)) + 1 : 1,
        tittle,
        complated : false
    };
    task.push(newTask);
    res.status(201).json({
        success : true,
        data : newTask
    });
};
module.exports = {
    getAllTasks,
    createTask
};