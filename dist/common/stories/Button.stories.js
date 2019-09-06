"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _react3 = require("@storybook/react");

var _Button = require("../src/Button");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)("Button", module).add("active with fill", function () {
    return _react2.default.createElement(_Button2.default, { label: "continue", fill: true });
}).add("active with no fill", function () {
    return _react2.default.createElement(_Button2.default, { label: "sign up", fill: false });
}).add("disabled", function () {
    return _react2.default.createElement(_Button2.default, { label: "continue", disabled: true });
}).add("with Icon", function () {
    return _react2.default.createElement(_Button2.default, { label: "share", icon: "share-alt", fill: true });
});