"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var convertHeight = function convertHeight(height) {
  var heightType = '';
  if (height === 'small') heightType = '10px';
  if (height === 'middle') heightType = '20px';
  if (height === 'large') heightType = '25px';
  return heightType;
};

var Progress = _styledComponents["default"].progress(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: ", ";\n  ::-webkit-progress-bar {\n    background: ", ";\n    border-radius: 5px;\n  }\n  ::-webkit-progress-value {\n    background: ", ";\n    border-radius: ", ";\n  }\n  ::-moz-progress-bar {\n    background: ", ";\n    border-radius: 5px;\n  }\n  ::-moz-progress-value {\n    background: ", ";\n    border-radius: ", ";\n  }\n"])), function (props) {
  return convertHeight(props.height);
}, function (props) {
  return props.bgColor;
}, function (props) {
  return props.valueColor;
}, function (props) {
  return props.height !== 'small' && props.value < props.max ? '5px 0px 0px 5px' : '5px';
}, function (props) {
  return props.bgColor;
}, function (props) {
  return props.valueColor;
}, function (props) {
  return props.height !== 'small' && props.value < props.max ? '5px 0px 0px 5px' : '5px';
});

var _default = Progress;
exports["default"] = _default;