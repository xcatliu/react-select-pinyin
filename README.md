React-Select
============

A Select control in which pinyin can be used for searching, forked from [JedWatson/react-select](https://github.com/JedWatson/react-select).


## Demo & Examples

Live demo: [xcatliu.github.io/react-select-pinyin](http://xcatliu.github.io/react-select-pinyin/)

To build the examples locally, run:

```
npm install
gulp dev
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Project Status

This project is quite stable and ready for production use.

For more infomation, please checkout [react-select#project-status](https://github.com/JedWatson/react-select#project-status).


## Installation

The easiest way to use React-Select is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), etc).

```
npm install react-select-pinyin --save
```


## Usage

React-Select-Pinyin has the same api with [react-select#usage](https://github.com/JedWatson/react-select#usage).

```
var Select = require('react-select');

var options = [
	{ value: '110000', label: '北京市' },
	{ value: '120000', label: '天津市' }
];

function logChange(val) {
	console.log("Selected: " + val);
}

<Select
	name="form-field-name"
	value="110000"
	options={options}
	onChange={logChange}
/>
```


# Contributing

See our [CONTRIBUTING.md](https://github.com/xcatliu/react-select-pinyin/blob/master/CONTRIBUTING.md) for information on how to contribute.


# License

MIT Licensed. Copyright (c) xcatliu 2015.
