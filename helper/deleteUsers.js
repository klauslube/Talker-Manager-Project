const fs = require('fs').promises;
const { readFile } = require('./readFile');

module.exports = async (req, res) => {
const { id } = req.params;
const talkers = await readFile();
const usersIndex = talkers.findIndex((user) => user.id === Number(id));
  if (!usersIndex) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' }); 
  }
  talkers.splice(usersIndex, 1);
  
  await fs.writeFile('./talker.json', JSON.stringify(talkers));
  return res.status(204).json(talkers);
};