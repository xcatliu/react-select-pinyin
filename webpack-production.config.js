'use strict';

var path = require('path');
var webpack = require('webpack');
var examplePath = path.resolve(__dirname, 'example');

module.exports = {
  context: examplePath,
  entry: [
    './index.jsx'
  ],
  output: {
    path: examplePath,
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
        loaders: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
