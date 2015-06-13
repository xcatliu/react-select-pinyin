'use strict';

var path = require('path');
var webpack = require('webpack');
var examplePath = path.resolve(__dirname, 'example');

module.exports = {
  context: examplePath,
  entry: [
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server',
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
        loaders: ['react-hot', 'babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devServer: {
    contentBase: examplePath,
    publicPath: '',
    hot: true,
    historyApiFallback: true,
    port: 8000
  }
};
