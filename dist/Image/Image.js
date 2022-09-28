"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DEFAULT_IMAGE = "/assets/images/img_common_placeholder_pic_n.png";

var imgOnErrorHandler = function imgOnErrorHandler(e) {
  e.currentTarget.src = DEFAULT_IMAGE;
  e.currentTarget.className += ' bg-imagePlaceholder';
};

var Image = /*#__PURE__*/_react["default"].memo(function (_ref) {
  var className = _ref.className,
      fileExtension = _ref.fileExtension,
      filename = _ref.filename,
      url = _ref.url;
  var imageSource = url || "/assets/images/".concat(filename, ".").concat(fileExtension);
  return /*#__PURE__*/_react["default"].createElement("img", {
    alt: "",
    className: className,
    src: imageSource,
    onError: imgOnErrorHandler
  });
});

Image.propTypes = {
  className: _propTypes["default"].string,
  fileExtension: _propTypes["default"].string,
  filename: _propTypes["default"].string,
  url: _propTypes["default"].string
};
Image.defaultProps = {
  className: '',
  filename: '',
  fileExtension: 'png',
  url: ''
};
var _default = Image;
exports["default"] = _default;