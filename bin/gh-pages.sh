#!/bin/bash
set -e

webpack

git checkout gh-pages
git checkout master ./example/index.html ./example/bundle.js

cp ./example/* ./
git add index.html bundle.js
git commit -m 'Update gh-pages' index.html bundle.js
