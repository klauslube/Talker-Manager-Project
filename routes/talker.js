const express = require('express');
const { readFile } = require('../helper/readFile');
const { writeNewUser } = require('../helper/writeNewUser');
const validateTalk = require('../middlewares/validateTalk');
const validateRate = require('../middlewares/validateRate');
const validateWatchedAt = require('../middlewares/validateWatchedAt');
const validateToken = require('../middlewares/validateToken');
const validateName = require('../middlewares/validateName');
const validateAge = require('../middlewares/validateAge');
const editUser = require('../helper/editUser');
const deleteUsers = require('../helper/deleteUsers');
const searchUsers = require('../helper/searchUsers');

const talker = express.Router();

talker.get('/search', validateToken, searchUsers);

talker.get('/', async (_req, res) => {
  try {
    const talkers = await readFile();
    return res.status(200).json(talkers);
  } catch (err) {
    return res.status(200).json([]);
  }
});

talker.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const talkers = await readFile();
    const users = talkers.find((user) => user.id === Number(id));
    if (!users) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' }); 
    }
    return res.status(200).json(users);
  } catch (err) {
   console.log(err);
  }
});

talker.post('/',
validateToken,
validateTalk, 
validateRate,
validateWatchedAt, 
validateAge, 
validateName,
writeNewUser);

talker.put('/:id', 
validateToken,
validateTalk,
validateRate,
validateWatchedAt,
validateAge,
validateName,
editUser);

talker.delete('/:id', validateToken, deleteUsers);

module.exports = talker;