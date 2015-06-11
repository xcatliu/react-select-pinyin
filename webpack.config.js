'use strict';

var path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'example'),
  entry: './index.jsx',
  output: {
    path: path.resolve(__dirname, 'gh-pages'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'transform?brfs'
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
