const db = require('./connection');

const create = async (name) => {
  const query = 'insert into tasksApi.Task (name, status) values (?, ?)';
  const status = 'pendente';
  const [rows] = await db.execute(query, [name, status]);

  return {
    id: rows.insertId,
    name,
    status,
  };
};

const remove = async (id) => {
  await db.execute('delete from tasksApi.Task where id = ?', [id]);
};

const update = async (id, body) => {
  const { name, status } = body;
  const query = 'update tasksApi.Task set name = ?, status = ? where id = ?;';
  await db.execute(query, [name, status, id]);
  return {
    name,
    status,
  };
};

module.exports = {
  create,
  remove,
  update,
};
