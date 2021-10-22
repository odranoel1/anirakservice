const s3Service = require('./s3');

const getTasks = async () => {
    const data = await s3Service.getObject();
    return JSON.parse(data.Body.toString('utf-8'));
};

const createTask = async (task) => {
    const tasks = await getTasks();
    tasks.push(task);
    const res = await s3Service.updateObj(tasks);
    return res;
};

const deleteTask = async (taskId) => {
    let tasks = await getTasks();
    tasks = tasks.filter(task => task.id !== taskId);
    const res = await s3Service.updateObj(tasks);
    return res;
};

const editTask = async (taskId, data) => {
    const tasks = await getTasks();
    const tasksUpdated = tasks.map(task => {
        if (task.id === taskId) {
            task = data;
        }
        return task;
    });
    const res = await s3Service.updateObj(tasksUpdated);
    return res;
};

module.exports = {
    createTask,
    getTasks,
    deleteTask,
    editTask
};
