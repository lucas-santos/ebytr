const task = require('express').Router();

const taskService = require('../services/taskService');

const create = async (req, res) => {
  const { name } = req.body;
  const newTask = await taskService.create(name);
  res.status(201).json(newTask);
};

const remove = async (req, res) => {
  const { id } = req.params;

  await taskService.remove(id);

  res.status(204).send();
};

task.post('/', create);
task.delete('/:id', remove);

module.exports = {
  task,
};
