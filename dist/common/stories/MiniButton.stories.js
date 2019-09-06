"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _react3 = require("@storybook/react");

var _MiniButton = require("../src/MiniButton");

var _MiniButton2 = _interopRequireDefault(_MiniButton);

var _Glyphicon = require("../src/Glyphicon");

var _Glyphicon2 = _interopRequireDefault(_Glyphicon);

var _jestTestResults = require("../../../../src/jest-test-results.json");

var _jestTestResults2 = _interopRequireDefault(_jestTestResults);

var _addonJest = require("@storybook/addon-jest");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)("MiniButton", module).addDecorator((0, _addonJest.withTests)({ results: _jestTestResults2.default })).addParameters({ jest: ['MiniButton.spec.js'] }).add("W/ Font Awesome icon", function () {
    return _react2.default.createElement(
        _MiniButton2.default,
        null,
        _react2.default.createElement(_Glyphicon2.default, { icon: 'home' })
    );
}).add("With 'success' classname", function () {
    return _react2.default.createElement(
        _MiniButton2.default,
        { className: "success" },
        _react2.default.createElement(_Glyphicon2.default, { icon: 'plus' })
    );
}).add("disabled", function () {
    return _react2.default.createElement(
        _MiniButton2.default,
        { className: "disabled" },
        _react2.default.createElement(_Glyphicon2.default, { icon: 'plus' })
    );
});