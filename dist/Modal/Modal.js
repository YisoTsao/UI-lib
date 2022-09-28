"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Image = _interopRequireDefault(require("../Image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      hiddenCloseIcon = _ref.hiddenCloseIcon,
      className = _ref.className,
      topContent = _ref.topContent,
      content = _ref.content,
      bottomContent = _ref.bottomContent,
      backgroundColor = _ref.backgroundColor;
  return isOpen && /*#__PURE__*/_react["default"].createElement("div", {
    className: ['fixed inset-y-0 z-50 duration-300 transition-opacity w-full max-w-screen-xs', "".concat(backgroundColor)].join(' ')
  }, !hiddenCloseIcon && /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "absolute relate top-[19px] left-[19px] z-[1000]",
    onClick: onClose
  }, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    className: "w-[17px] h-[17px]",
    filename: "btn_nav_close_darkbg_n"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full h-full flex justify-center items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: className
  }, topContent && topContent, content, bottomContent && bottomContent)));
};

var _default = Modal;
exports["default"] = _default;
Modal.propTypes = {
  isOpen: _propTypes["default"].bool,
  onClose: _propTypes["default"].func,
  hiddenCloseIcon: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  backgroundColor: _propTypes["default"].string,
  content: _propTypes["default"].element.isRequired,
  bottomContent: _propTypes["default"].element,
  topContent: _propTypes["default"].element
};
Modal.defaultProps = {
  isOpen: false,
  onClose: function onClose() {},
  hiddenCloseIcon: false,
  className: '',
  bottomContent: null,
  topContent: null,
  backgroundColor: 'bg-[#000000b3]'
};