const { response } = require('./utils/response');
const { createTask, getTasks, deleteTask, editTask } = require('./services/tasks');
const Task = require('./models/Task');
const { getSongs } = require('./services/songs');

module.exports.createTask = async event => {
  try {
    const newTask = new Task(JSON.parse(event.body));
    const res = await createTask(newTask);

    return response(200, true, 'OK', res);
  } catch (err) {
    return response(400, false, '', err);
  }
};

module.exports.getTasks = async event => {
  try {
    const tasks = await getTasks();

    return response(200, true, 'OK', tasks);
  } catch (err) {
    return response(400, false, '', err);
  }
};

module.exports.deleteTask = async event => {
  try {
    const taskId = event.pathParameters.id;
    const res = await deleteTask(taskId);

    return response(200, true, 'OK', res);
  } catch (err) {
    return response(400, false, '', err);
  }
};

module.exports.editTask = async event => {
  try {
    const taskId = event.pathParameters.id;
    const task = new Task(JSON.parse(event.body));

    const res = await editTask(taskId, task);

    return response(200, true, 'OK', res);
  } catch (err) {
    return response(400, false, '', err);
  }
};

module.exports.getSongs = async () => {
  try {
    const songs = await getSongs();
    return response(200, true, 'OK', songs);
  } catch (err) {
    return response(400, false, '', err);
  }
}