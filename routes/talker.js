const express = require('express');
const { readFile } = require('../helper/readFile');

const talker = express.Router();

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

module.exports = talker;