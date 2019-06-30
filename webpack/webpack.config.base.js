const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const src = '../src';

module.exports = {
  entry: path.resolve(__dirname, src),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash:8].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader'
      }, {
        loader: 'eslint-loader'
      }],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              context: path.resolve(__dirname, src)
            }
          }
        }
      ],
      exclude: [path.resolve(__dirname, '../node_modules')]
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      include: [path.resolve(__dirname, '../node_modules')]
    }, {
      test: /\.less$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          }
        },
        {
          loader: 'less-loader'
        }]
    }]
  },
  resolve: {
    modules: [
      src,
      path.resolve(__dirname, '../node_modules')
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new CleanWebpackPlugin()
  ]
}