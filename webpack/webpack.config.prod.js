const path = require('path');
const base = require('./webpack.config.base');

const dist = '../dist';

module.exports = Object.assign(base, {
  mode: 'production',
  output: {
    publicPath: '/weekly-assistant/',
    path: path.resolve(__dirname, dist),
    filename: '[name].[hash:8].js',
    chunkFilename: 'common/[name]/[name].js',
  },
});
