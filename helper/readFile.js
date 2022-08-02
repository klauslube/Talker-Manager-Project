const fs = require('fs').promises;

const readFile = async () => {
  const fileContent = await fs.readFile('./talker.json');
  const parseContent = JSON.parse(fileContent);
  return parseContent;
};

module.exports = { readFile };