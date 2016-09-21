/* @flow */
const React = require('react');

const ExcelColumnShape = {
  name: React.PropTypes.node.isRequired,
  key: React.PropTypes.any.isRequired,
  width: React.PropTypes.number.isRequired,
  filterable: React.PropTypes.bool
};

module.exports = ExcelColumnShape;
