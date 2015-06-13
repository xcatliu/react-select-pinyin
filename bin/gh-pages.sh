#!/bin/bash
set -e

webpack -p --config webpack-production.config.js

git checkout gh-pages
git checkout master ./example/index.html

cp ./example/index.html ./
cp ./example/bundle.js ./
git add index.html bundle.js
git commit -m 'Update gh-pages' index.html bundle.js
git push origin gh-pages:gh-pages
git checkout master

exit 0

