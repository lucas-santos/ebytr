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

const update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const taskUpdated = await taskService.update(id, body);
  res.status(200).json(taskUpdated);
};

const getAll = async (req, res) => {
  const tasks = await taskService.getAll();
  res.status(200).json(tasks);
};

task.post('/', create);
task.delete('/:id', remove);
task.put('/:id', update);
task.get('/', getAll);

module.exports = {
  task,
};
