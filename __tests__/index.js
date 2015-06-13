/* global jest, describe, it, expect */
'use strict';

jest.dontMock('../lib/SelectPinyin');
jest.dontMock('../example/data');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var SelectPinyin = require('../lib/SelectPinyin');
var Select = require('react-select');
var options = require('../example/data').options;

describe('Basic usage', function() {
  var selectPinyin = TestUtils.renderIntoDocument(
    <SelectPinyin
      name="cityName"
      value="110100"
      options={options}
      onChange={this.handleChange}/>
  );
  var select = TestUtils.findRenderedComponentWithType(selectPinyin, Select);
  var selectInput = TestUtils.findRenderedDOMComponentWithClass(select, 'Select-input');
  var input = TestUtils.findRenderedDOMComponentWithTag(selectInput, 'input');
  var inputDOM = input.getDOMNode();
  it('should filters to one result if typing beijingshi', function() {
    TestUtils.Simulate.change(inputDOM, {target: {value: 'beijingshi'}});
    expect(select.state.filteredOptions.length).toEqual(1);
  });
  it('should filters to three results if typing bjs', function() {
    TestUtils.Simulate.change(inputDOM, {target: {value: 'bjs'}});
    expect(select.state.filteredOptions.length).toEqual(3);
  });
});
