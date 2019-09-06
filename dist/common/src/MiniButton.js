'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('../styles/MiniButton.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MiniButton = function MiniButton(_ref) {
    var className = _ref.className,
        onClick = _ref.onClick,
        children = _ref.children;
    return _react2.default.createElement(
        'div',
        {
            className: 'btns ' + className,
            onClick: className !== 'disabled' ? function (e) {
                return onClick(e);
            } : null
        },
        children
    );
};

MiniButton.propTypes = {
    /**
    * The class to pass to the root node
    */
    className: _propTypes2.default.string,
    /**
    * On click handler
    */
    onClick: _propTypes2.default.func,
    /**
    * The children for the component to render
    */
    children: _propTypes2.default.node
};

MiniButton.defaultProps = {
    // onClick: () => { },
};

exports.default = MiniButton;