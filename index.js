'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleView = function ToggleView(_ref) {
  var show = _ref.show;
  var children = _ref.children;
  return show ? children : null;
};

ToggleView.propTypes = {
  children: _react2.default.PropTypes.any.isRequired,
  show: _react2.default.PropTypes.bool.isRequired
};

exports.default = ToggleView;
