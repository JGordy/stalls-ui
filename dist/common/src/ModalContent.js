'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('../styles/ModalContent.css');

var _reactHooksLib = require('@jgordy24/react-hooks-lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderCloseButton = function renderCloseButton(buttonRef, hide) {
    return _react2.default.createElement(
        'button',
        {
            className: 'c-modal__close',
            'aria-labelledby': 'close-modal',
            onClick: hide,
            ref: buttonRef
        },
        _react2.default.createElement(
            'span',
            { id: 'close-modal', className: 'u-hide-visually' },
            'Close Modal'
        ),
        _react2.default.createElement(
            'svg',
            {
                className: 'c-modal__close-icon',
                viewBox: '0 0 40 40'
            },
            _react2.default.createElement('path', { d: 'M 10,10 L 30,30 M 30,10 L 10,30' })
        )
    );
};

var ModalContent = function ModalContent(_ref) {
    var ariaLabel = _ref.ariaLabel,
        buttonRef = _ref.buttonRef,
        children = _ref.children,
        hide = _ref.hide,
        modalRef = _ref.modalRef,
        onClickAway = _ref.onClickAway,
        onKeyDown = _ref.onKeyDown,
        _ref$role = _ref.role,
        role = _ref$role === undefined ? 'dialog' : _ref$role;


    (0, _reactHooksLib.useLockBodyScroll)();

    return _reactDom2.default.createPortal(_react2.default.createElement(
        'aside',
        {
            className: 'c-modal-cover',
            'aria-modal': 'true',
            'aria-label': ariaLabel,
            onClickAway: onClickAway,
            onKeyDown: onKeyDown,
            role: role,
            tabIndex: '-1'
        },
        _react2.default.createElement(
            'div',
            {
                className: 'c-modal',
                ref: modalRef
            },
            renderCloseButton(buttonRef, hide),
            _react2.default.createElement(
                'div',
                { className: 'c-modal__body' },
                children
            )
        )
    ), document.body);
};

exports.default = ModalContent;