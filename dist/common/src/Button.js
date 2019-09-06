'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Glyphicon = require('./Glyphicon');

var _Glyphicon2 = _interopRequireDefault(_Glyphicon);

require('../styles/Button.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
    var disabled = _ref.disabled,
        fill = _ref.fill,
        icon = _ref.icon,
        label = _ref.label;
    return _react2.default.createElement(
        'div',
        {
            className: 'Button ' + (disabled ? 'disabled' : fill ? 'fill' : 'no-fill')
        },
        icon && _react2.default.createElement(_Glyphicon2.default, { icon: icon }),
        label
    );
};

Button.propTypes = {
    disabled: _propTypes2.default.bool
};

Button.defaultProps = {
    disabled: false
};

exports.default = Button;