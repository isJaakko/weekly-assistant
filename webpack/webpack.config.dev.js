const path = require('path');
const webpack = require('webpack')
const base = require('./webpack.config.base');
const confg = require('./config');
const ip = require('ip');

const address = ip.address();

base.plugins.unshift(
  new webpack.HotModuleReplacementPlugin(),
);

module.exports = Object.assign(base, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, '../src'),
    hot: true,
    host: address,
    port: confg.dev.port,
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
      ]
    },
  },
  devtool: 'source-map'
});