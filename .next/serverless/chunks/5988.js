exports.id = 5988;
exports.ids = [5988];
exports.modules = {

/***/ 27884:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports["default"] = JSXStyle;

var _react = _interopRequireDefault(__webpack_require__(67294));

var _stylesheetRegistry = __webpack_require__(28122);

var _hash = __webpack_require__(39035);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Opt-into the new `useInsertionEffect` API in React 18, fallback to `useLayoutEffect`.
// https://github.com/reactwg/react-18/discussions/110
var useInsertionEffect = _react["default"].useInsertionEffect || _react["default"].useLayoutEffect;

function JSXStyle(props) {
  var registry = (0, _stylesheetRegistry.useStyleRegistry)(); // If `registry` does not exist, we do nothing here.

  if (!registry) {
    return null;
  }

  if (typeof window === 'undefined') {
    registry.add(props);
    return null;
  }

  useInsertionEffect(function () {
    registry.add(props);
    return function () {
      registry.remove(props);
    }; // props.children can be string[], will be striped since id is identical
  }, [props.id, String(props.dynamic)]);
  return null;
}

JSXStyle.dynamic = function (info) {
  return info.map(function (tagInfo) {
    var baseId = tagInfo[0];
    var props = tagInfo[1];
    return (0, _hash.computeId)(baseId, props);
  }).join(' ');
};

/***/ }),

/***/ 65988:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(27884)


/***/ })

};
;