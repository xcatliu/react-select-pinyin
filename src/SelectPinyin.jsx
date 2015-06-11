'use strict';

var React = require('react');
var pinyin = require('pinyin');
var Select = require('react-select');
var xtend = require('xtend');

var SelectPinyin = React.createClass({
  getProps: function() {
    var props = xtend({
      filterOption: function(op, filterValue) {
        // Forked from Select.js
        var valueText = String(op.value),
            labelText = String(op.label),
            pinyinText = String(op.pinyin),
            pyText = String(op.py);
        return (
          !filterValue || this.props.matchPos === 'start' ? (
            pinyinText.substr(0, filterValue.length) === filterValue ||
            pyText.substr(0, filterValue.length) === filterValue ||
            this.props.matchProp !== 'label' &&
            valueText.toLowerCase().substr(0, filterValue.length) === filterValue ||
            this.props.matchProp !== 'value' &&
            labelText.toLowerCase().substr(0, filterValue.length) === filterValue
          ) : (
            pinyinText.indexOf(filterValue.toLowerCase()) >= 0 ||
            pyText.indexOf(filterValue.toLowerCase()) >= 0 ||
            this.props.matchProp !== 'label' &&
            valueText.toLowerCase().indexOf(filterValue.toLowerCase()) >= 0 ||
            this.props.matchProp !== 'value' &&
            labelText.toLowerCase().indexOf(filterValue.toLowerCase()) >= 0
          )
        );
      },
      noResultsText: '找不到结果，请重新搜索'
    }, this.props);
    if (props.options.length === 0) {
      props.value = '';
    }
    props.options.forEach(function(option) {
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
  render: function() {
    return <Select ref="select" {...this.getProps()} />;
  }
});

module.exports = SelectPinyin;
