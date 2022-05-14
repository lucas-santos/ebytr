const taskModel = require('../models/taskModel');

const create = async (name) => {
  const newTask = await taskModel.create(name);
  return newTask;
};

const remove = async (id) => taskModel.remove(id);

module.exports = {
  create,
  remove,
};
