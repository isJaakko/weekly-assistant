const path = require('path');
const base = require('./webpack.config.base');

module.exports = Object.assign(base, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, '../src'),
    hot: true,
  },
  devtool: 'source-map'
});