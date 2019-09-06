"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _react3 = require("@storybook/react");

var _Glyphicon = require("../src/Glyphicon");

var _Glyphicon2 = _interopRequireDefault(_Glyphicon);

var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = [];

Object.keys(_fontawesomeSvgCore.library.definitions).forEach(function (key) {

    Object.keys(_fontawesomeSvgCore.library.definitions[key]).map(function (nestedKey) {

        if (key === 'fas') {
            return icons.push(nestedKey);
        } else {
            return icons.push(["" + key, nestedKey]);
        }
    });
});

(0, _react3.storiesOf)("GlyphiconAll", module).add("All Icons", function () {
    return icons.map(function (icon) {
        return _react2.default.createElement(
            "span",
            {
                key: icon,
                style: {
                    boxShadow: '0.2rem 0.2rem 0.4rem 0rem rgba(0,0,0,0.2)',
                    borderRadius: '5px',
                    height: '3rem',
                    width: '6rem',
                    display: 'inline-flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0.5rem',
                    marginRight: '0'
                }
            },
            _react2.default.createElement(_Glyphicon2.default, { icon: icon }),
            _react2.default.createElement(
                "p",
                { style: { margin: '0.1rem 0', fontSize: '10px' } },
                Array.isArray(icon) ? icon[1] : icon
            )
        );
    });
});

icons.forEach(function (icon) {
    (0, _react3.storiesOf)("Glyphicon", module).add("" + (Array.isArray(icon) ? icon[1] : icon), function () {
        return _react2.default.createElement(_Glyphicon2.default, { icon: icon });
    });
});