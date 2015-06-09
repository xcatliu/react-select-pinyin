var React = require('react');
var SelectPinyin = require('../src/SelectPinyin.jsx');

var fs = require('fs');
var path = require('path');
var css = fs.readFileSync(path.resolve(__dirname, '../lib/default.css'), {encoding:'utf8'});
var insertCss = require('insert-css');

var App = React.createClass({
  componentWillMount: function() {
    if (typeof window !== 'undefined') {
      insertCss(css);
    }
  },
  getOptions: function() {
    return [
      { value: '100000', label: '北京市' },
      { value: '110000', label: '天津市' }
    ];
  },
  handleChange: function(val) {
    console.log('选择了：' + val);
  },
  render: function() {
    return (
      <SelectPinyin
        name="cityName"
        value="100000"
        options={this.getOptions()}
        onChange={this.handleChange}
      />
    );
  }
});

React.render(
  <App/>,
  document.getElementById('app')
);
