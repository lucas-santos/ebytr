const taskModel = require('../models/taskModel');

const create = async (name) => {
  const newTask = await taskModel.create(name);
  return newTask;
};

const remove = async (id) => taskModel.remove(id);

const update = async (id, body) => {
  const taskUpdated = await taskModel.update(id, body);
  return taskUpdated;
};

const getAll = async () => {
  const tasks = await taskModel.getAll();
  return tasks;
};

module.exports = {
  create,
  remove,
  update,
  getAll,
};
