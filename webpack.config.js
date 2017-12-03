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
    ],
    alias: {
      'react-markdown': path.resolve(__dirname, '../react-markdown/lib/react-markdown')
    }
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
          presets: ['es2015', 'react'],
          plugins: [
            'transform-object-rest-spread',
            'syntax-class-properties',
            'transform-class-properties'
          ]
        },
        exclude: /node_modules|react-markdown/
      },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|woff2|woff|eot|ttf|mp4)$/,
        loader: 'file-loader'
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
