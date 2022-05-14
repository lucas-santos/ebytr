const express = require('express');

const app = express();
app.use(express.json());

const { task } = require('./controllers/taskController');

app.use('/tasks', task);

app.listen(3000, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
