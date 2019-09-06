'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../styles/ModalTrigger.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalTrigger = function ModalTrigger(_ref) {
    var buttonRef = _ref.buttonRef,
        show = _ref.show,
        text = _ref.text;
    return _react2.default.createElement(
        'button',
        {
            className: 'c-btn',
            'aria-label': 'Open Modal',
            ref: buttonRef,
            onClick: show
        },
        text
    );
};

exports.default = ModalTrigger;