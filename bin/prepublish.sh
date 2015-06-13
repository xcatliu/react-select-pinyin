#!/bin/bash
set -e

cp ./node_modules/react-select/dist/default.css ./lib/default.css

./node_modules/.bin/babel src --out-dir lib
