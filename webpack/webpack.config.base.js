const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const src = '../src';
const dist = '../dist';

module.exports = {
  entry: path.resolve(__dirname, src),
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, dist),
    filename: '[name].[hash:8].js',
    // chunkFilename: 'common/[name]/[name].js',
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
          // options: {
          // modules: {
          // localIdentName: '[path][name]__[local]--[hash:base64:5]'
          // }
          // }
        },
        {
          loader: 'less-loader'
        }],
      exclude: [path.resolve(__dirname, '../node_modules')]
    }]
  },
  resolve: {
    extensions: ['.js', '.less', '.jsx'],
    modules: [
      src,
      path.resolve(__dirname, '../node_modules')
    ],
    alias: {
      _src: path.resolve(__dirname, src),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      inject: false,
      template: path.resolve(__dirname, '../public/404.html')
    }),
    new CleanWebpackPlugin()
  ]
};
