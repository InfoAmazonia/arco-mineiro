const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: ['./src/index']
  },
  resolve: {
    modules: [
      'src',
      'node_modules'
    ]
  },
  output: {
    path: path.resolve('public'),
    publicPath:  '/',
    filename: '[name]-[chunkhash].js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve('src', 'index.html'),
      filename: 'index.html',
      inject: 'body'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: /node_modules/
      },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|woff2|woff|eot|ttf|mp4)$/,
        loader: 'file-loader'
      }
    ]
  }
};
