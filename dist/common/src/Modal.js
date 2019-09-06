'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ModalTrigger = require('./ModalTrigger');

var _ModalTrigger2 = _interopRequireDefault(_ModalTrigger);

var _ModalContent = require('./ModalContent');

var _ModalContent2 = _interopRequireDefault(_ModalContent);

require('../styles/Modal.css');

var _reactHooksLib = require('@jgordy24/react-hooks-lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(_ref) {
    var ariaLabel = _ref.ariaLabel,
        children = _ref.children,
        role = _ref.role,
        triggerText = _ref.triggerText;

    var buttonRef = (0, _react.useRef)();
    var modalRef = (0, _react.useRef)();

    var _useModal = (0, _reactHooksLib.useModal)(),
        isShowing = _useModal.isShowing,
        toggle = _useModal.toggle;

    var showModal = function showModal() {
        toggle();
        modalRef.current.focus();
    };

    var hideModal = function hideModal() {
        toggle();
        buttonRef.current.focus();
    };

    var onKeyDown = function onKeyDown(_ref2) {
        var keyCode = _ref2.keyCode;
        return keyCode === 27 && hideModal();
    };

    var onClickAway = function onClickAway(e) {
        if (modalRef && modalRef.current.contains(e.target)) return; // Does this work??
        toggle();
    };

    return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_ModalTrigger2.default, {
            text: triggerText,
            show: showModal,
            buttonRef: buttonRef
        }),
        isShowing && _react2.default.createElement(
            _ModalContent2.default,
            {
                ariaLabel: ariaLabel,
                buttonRef: buttonRef,
                hide: hideModal,
                modalRef: modalRef,
                onClickAway: onClickAway,
                onKeyDown: onKeyDown,
                role: role
            },
            children
        )
    );
};

exports.default = Modal;