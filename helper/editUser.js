const fs = require('fs').promises;
const { readFile } = require('./readFile');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { name, age, talk: { watchedAt, rate } } = req.body;
    const talkers = await readFile();
    const usersIndex = talkers.findIndex((user) => user.id === Number(id));
    if (!usersIndex) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' }); 
    }
    const talkersObj = { ...talkers[usersIndex], name, age, talk: { watchedAt, rate } };
    talkers[usersIndex] = talkersObj;
    await fs.writeFile('./talker.json', JSON.stringify(talkers));
    return res.status(200).json(talkers[usersIndex]);
};