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
      'files',
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
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react'],
          plugins: [
            'transform-object-rest-spread',
            'syntax-class-properties',
            'transform-class-properties'
          ]
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|woff2|woff|eot|ttf|mp4|pdf)$/,
        loader: 'file-loader',
        options: {
          name (file) {
            if(file.indexOf('/documents/') !== -1) {
              return '[name]-[hash].[ext]';
            } else {
              return '[hash].[ext]';
            }
          }
        }
      },
      {
        test: /\.(md|txt)$/,
        use: [
          {
            loader: 'raw-loader'
          }
        ]
      }
    ]
  }
};
