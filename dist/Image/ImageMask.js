"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Image = _interopRequireDefault(require("./Image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ImageMask = /*#__PURE__*/_react["default"].memo(function (_ref) {
  var imgUrl = _ref.imgUrl,
      imgRadius = _ref.imgRadius,
      imgFileExtension = _ref.imgFileExtension,
      imgFileName = _ref.imgFileName,
      iconClassName = _ref.iconClassName,
      iconFileName = _ref.iconFileName,
      title = _ref.title,
      titleSize = _ref.titleSize,
      titleColor = _ref.titleColor,
      subTitle = _ref.subTitle,
      subTitleSize = _ref.subTitleSize,
      subTitleColor = _ref.subTitleColor,
      maskShow = _ref.maskShow;
  var maskStyle = "".concat(imgRadius, " bg-imageMask w-full h-full p-1 absolute top-0 left-0 flex flex-wrap flex-col justify-center items-center overflow-hidden");
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full h-full relative"
  }, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    className: "object-cover w-full h-full ".concat(imgRadius),
    filename: imgFileName,
    fileExtension: imgFileExtension,
    url: imgUrl
  }), maskShow && /*#__PURE__*/_react["default"].createElement("div", {
    className: maskStyle
  }, iconFileName && /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    className: iconClassName,
    filename: iconFileName
  }), title && /*#__PURE__*/_react["default"].createElement("span", {
    className: " ".concat(titleSize, " ").concat(titleColor)
  }, title), subTitle && /*#__PURE__*/_react["default"].createElement("span", {
    className: "mt-2.5 ".concat(subTitleSize, " ").concat(subTitleColor)
  }, subTitle)));
});

ImageMask.propTypes = {
  imgUrl: _propTypes["default"].string,
  imgRadius: _propTypes["default"].string,
  imgFileName: _propTypes["default"].string,
  imgFileExtension: _propTypes["default"].string,
  iconClassName: _propTypes["default"].string,
  iconFileName: _propTypes["default"].string,
  title: _propTypes["default"].string,
  titleSize: _propTypes["default"].string,
  titleColor: _propTypes["default"].string,
  subTitle: _propTypes["default"].string,
  subTitleSize: _propTypes["default"].string,
  subTitleColor: _propTypes["default"].string,
  maskShow: _propTypes["default"].bool
};
ImageMask.defaultProps = {
  imgUrl: '',
  imgRadius: '',
  imgFileName: '',
  imgFileExtension: 'png',
  iconClassName: '',
  iconFileName: '',
  title: '',
  titleSize: 'text-l',
  titleColor: 'text-fixedWhite',
  subTitle: '',
  subTitleSize: 'text-m',
  subTitleColor: 'text-fixedWhite',
  maskShow: true
};
var _default = ImageMask;
exports["default"] = _default;