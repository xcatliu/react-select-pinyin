var React = require('react');
var Select = require('../src/SelectPinyin.jsx');
var options = require('./options');

var fs = require('fs');
var path = require('path');
var css = fs.readFileSync(path.resolve(__dirname, '../lib/default.css'), {encoding:'utf8'});
var insertCss = require('insert-css');

var styles = {
  container: {
    width: '600px',
    margin: '0 auto'
  }
}

var App = React.createClass({
  componentWillMount: function() {
    if (typeof window !== 'undefined') {
      insertCss(css);
    }
  },
  handleChange: function(val) {
    console.log('选择了：' + val);
  },
  render: function() {
    return (
      <div style={styles.container}>
        <h1>React 选择控件（支持拼音搜索）</h1>
        <p><a href="https://github.com/JedWatson">JedWatson</a> 写的 <a href="https://github.com/JedWatson/react-select">react-select</a> 挺好用，但是不支持拼音搜索。</p>
        <p><a href="https://github.com/xcatliu/react-select-pinyin">react-select-pinyin</a> 基于 <a href="https://github.com/JedWatson/react-select">react-select</a> 开发，添加了如下特性：</p>
        <ul>
          <li>支持输入全拼匹配（如 beijingshi, beijing, beij, b 会匹配北京市）</li>
          <li>支持输入声母匹配（如 bjs, bj, b 会匹配北京市）</li>
          <li>支持非开始位置的匹配（如 jingshi, ijins, eij 会匹配北京市）</li>
          <li><strong><em>不支持</em></strong>子串匹配（如 beishi <strong><em>不会</em></strong>匹配北京市）</li>
        </ul>
        <h2>简单示例</h2>
        <Select
          name="cityName"
          value="110100"
          options={options}
          onChange={this.handleChange}
        />
      </div>
    );
  }
});

React.render(
  <App/>,
  document.getElementById('app')
);
