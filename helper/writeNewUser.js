const fs = require('fs').promises;
const { readFile } = require('./readFile');
// const newUser = require('../newUser.json');

const writeNewUser = async (req, res) => {
  const { name, age, talk: { watchedAt, rate } } = req.body;
  const users = await readFile();
  const id = users.length + 1;

  const usersObj = {
    id,
    name,
    age,
    talk: {
      watchedAt,
      rate,
    },
  };
  users.push(usersObj);
  await fs.writeFile('./talker.json', JSON.stringify(users));
  return res.status(201).json(usersObj);
};

module.exports = { writeNewUser };
