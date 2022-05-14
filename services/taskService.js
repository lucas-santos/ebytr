const taskModel = require('../models/taskModel');

const create = async (name) => {
  const newTask = await taskModel.create(name);
  return newTask;
};

module.exports = {
  create,
};
