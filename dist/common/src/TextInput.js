"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import "../styles/TextInput.css";

var TextInput = function TextInput(_ref) {
    var _ref$type = _ref.type,
        type = _ref$type === undefined ? "text" : _ref$type,
        label = _ref.label,
        value = _ref.value,
        _onChange = _ref.onChange;
    return _react2.default.createElement(
        "div",
        { className: "simple-form-group" },
        label && _react2.default.createElement(
            "label",
            { className: "simple-text-label" },
            label
        ),
        _react2.default.createElement("input", {
            type: type,
            className: "simple-text-input",
            value: value,
            onChange: function onChange(e) {
                return _onChange && _onChange(e.target.value);
            }
        })
    );
};

exports.default = TextInput;