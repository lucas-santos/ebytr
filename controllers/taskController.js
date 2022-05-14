const task = require('express').Router();

const taskService = require('../services/taskService');

const create = async (req, res) => {
  const { name } = req.body;
  const newTask = await taskService.create(name);
  res.status(201).json(newTask);
};

task.post('/', create);

module.exports = {
  task,
};
