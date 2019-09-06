"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _react3 = require("@storybook/react");

var _ProfileImage = require("../src/ProfileImage");

var _ProfileImage2 = _interopRequireDefault(_ProfileImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mockImage = 'https://homepages.cae.wisc.edu/~ece533/images/girl.png';

(0, _react3.storiesOf)("ProfileImage", module).add("default", function () {
    return _react2.default.createElement(_ProfileImage2.default, { mainImage: mockImage });
}).add("rounded", function () {
    return _react2.default.createElement(_ProfileImage2.default, { roundImage: true, mainImage: mockImage });
}).add("missing url fallback", function () {
    return _react2.default.createElement(_ProfileImage2.default, { mainImage: '' });
});