const { readFile } = require('./readFile');

module.exports = async (req, res) => {
  const { q } = req.query;
  const talkers = await readFile();
  const nameFiltered = talkers.filter((user) => user.name.includes(q));
    
    if (!q || q.length === 0) {
      return res.status(200).json(talkers); 
    }
    if (!nameFiltered) {
      return res.status(200).json([]);
    }
  return res.status(200).json(nameFiltered);
};