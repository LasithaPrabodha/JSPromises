// webpack.config.js
const path = require('path');
const fs = require('fs');

const entryFolderPath = './src'; // Path to the folder containing entry point files

const entryPoints = fs.readdirSync(entryFolderPath).reduce((entries, file) => {
  const entryName = path.parse(file).name;
  entries[entryName] = path.join(__dirname, entryFolderPath, file);
  return entries;
}, {});

module.exports = {
  entry: entryPoints,
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
