const db = require('./connection');

const create = async (name) => {
  const createdAt = new Date();
  const query = 'insert into tasksApi.Task (name, createdAt) values (?, ?)';

  const [rows] = await db.execute(query, [name, createdAt]);

  return {
    id: rows.insertId,
    name,
    createdAt,
  };
};

module.exports = {
  create,
};
