'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var pinyin = require('pinyin');
var Select = require('react-select');
var xtend = require('xtend');

var SelectPinyin = React.createClass({
  displayName: 'SelectPinyin',

  getProps: function getProps() {
    var props = xtend({
      filterOption: function filterOption(op, filterValue) {
        // Forked from Select.js
        var valueText = String(op.value),
            labelText = String(op.label),
            pinyinText = String(op.pinyin),
            pyText = String(op.py);
        return !filterValue || this.props.matchPos === 'start' ? pinyinText.substr(0, filterValue.length) === filterValue || pyText.substr(0, filterValue.length) === filterValue || this.props.matchProp !== 'label' && valueText.toLowerCase().substr(0, filterValue.length) === filterValue || this.props.matchProp !== 'value' && labelText.toLowerCase().substr(0, filterValue.length) === filterValue : pinyinText.indexOf(filterValue.toLowerCase()) >= 0 || pyText.indexOf(filterValue.toLowerCase()) >= 0 || this.props.matchProp !== 'label' && valueText.toLowerCase().indexOf(filterValue.toLowerCase()) >= 0 || this.props.matchProp !== 'value' && labelText.toLowerCase().indexOf(filterValue.toLowerCase()) >= 0;
      },
      noResultsText: '找不到结果，请重新搜索',
      clearAllText: '清除所有已选',
      clearValueText: '清除已选',
      placeholder: '请选择...',
      searchPromptText: '请输入搜索'
    }, this.props);
    if (props.options.length === 0) {
      props.value = '';
    }
    props.options.forEach(function (option) {
      option.pinyin = pinyin(option.label, {
        style: pinyin.STYLE_NORMAL
      }).join('').toLowerCase();
      option.py = pinyin(option.label, {
        style: pinyin.STYLE_FIRST_LETTER
      }).join('').toLowerCase();
      return option;
    });
    return props;
  },
  render: function render() {
    return React.createElement(Select, _extends({ ref: 'select' }, this.getProps()));
  }
});

module.exports = SelectPinyin;