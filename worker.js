'use strict';

var webpack = require('webpack');
var ecstatic = require('ecstatic');
var http = require('http');
var webpackConfig = require('./webpack.config');

var compiler = webpack(webpackConfig);

compiler.watch({
  aggregateTimeout: 300
}, compileCallback);

function compileCallback(err, stats) {
  if (err) {
    return handleError(err);
  }
  var compilationErrors = stats.compilation.errors;
  if (compilationErrors.length > 0) {
    compilationErrors.forEach(function(compilationError) {
      handleError(compilationError.error);
    });
    return undefined;
  }
  console.log('Bundled successfully');
  startServerOnce();
}

var serverStarted = false;
function startServerOnce() {
  if (serverStarted) {
    return null;
  }
  serverStarted = true;
  http.createServer(
    ecstatic({ root: webpackConfig.output.path })
  ).listen(8000, function() {
    console.log('Server started, visit http://localhost:8000');
  });
}

function handleError(err) {
  console.error(err.message);
  console.error(err.stack);
}
