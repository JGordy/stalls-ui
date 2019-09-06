'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Glyphicon = require('./Glyphicon');

var _Glyphicon2 = _interopRequireDefault(_Glyphicon);

require('../styles/ProfileImage.css');

require('config/fontawesome');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfileImage = function ProfileImage(_ref) {
    var roundImage = _ref.roundImage,
        mainImage = _ref.mainImage,
        bgImage = _ref.bgImage;
    return _react2.default.createElement(
        'div',
        {
            className: 'ProfileImage',
            style: {
                borderRadius: roundImage ? '50%' : '10%',
                backgroundImage: mainImage && 'url(' + mainImage + ')',
                backgroundColor: bgImage ? '' : 'var(--white)',
                display: mainImage ? 'block' : 'flex',
                alignContent: 'center',
                justifyContent: 'center'
            }
        },
        !mainImage && _react2.default.createElement(_Glyphicon2.default, { icon: 'camera' })
    );
};

ProfileImage.propTypes = {
    /**
    *   Boolean to render round or squircle shaped image
    */
    roundImage: _propTypes2.default.bool,
    /**
    * The url of the image to render
    */
    mainImage: _propTypes2.default.string,
    /**
    * TODO I honestly don't remember what this is used for...
    */
    bgImage: _propTypes2.default.string
};

ProfileImage.defaultProps = {};

exports.default = ProfileImage;