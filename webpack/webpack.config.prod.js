// const path = require('path');
const base = require('./webpack.config.base');

module.exports = Object.assign(base, {
  mode: 'production',
  // entry: {
  //   app: './src/index.js'
  // },
  // output: {
  //   filename: '[name].bundle.js',
  //   path: path.resolve(__dirname, '../dist')
  // }
});
