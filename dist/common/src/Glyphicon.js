'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('config/fontawesome');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Glyphicon = function Glyphicon(_ref) {
    var icon = _ref.icon,
        onClick = _ref.onClick,
        size = _ref.size,
        style = _ref.style,
        rest = _objectWithoutProperties(_ref, ['icon', 'onClick', 'size', 'style']);

    return _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, _extends({
        icon: icon,
        onClick: onClick,
        size: size,
        style: style
    }, rest));
};

Glyphicon.propTypes = {
    /**
     * The font awesome icon to render
     */
    icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]).isRequired,
    /**
    * The function to call on click
    */
    onClick: _propTypes2.default.func,
    /**
    *  Size of the icon
    */
    size: _propTypes2.default.string,
    /**
    * The style object to apply to the icon
    */
    style: _propTypes2.default.object
};

Glyphicon.defaultProps = {};

exports.default = Glyphicon;