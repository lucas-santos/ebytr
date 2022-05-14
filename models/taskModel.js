const db = require('./connection');

const create = async (name) => {
  const query = 'insert into tasksApi.Task (name) values (?)';

  const [rows] = await db.execute(query, [name]);

  return {
    id: rows.insertId,
    name,
  };
};

const remove = async (id) => {
  await db.execute('delete from tasksApi.Task where id = ?', [id]);
};

module.exports = {
  create,
  remove,
};
