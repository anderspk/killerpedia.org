webpackHotUpdate("static\\development\\pages\\killerprofile.js",{

/***/ "./pages/killerprofile.js":
/*!********************************!*\
  !*** ./pages/killerprofile.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");






var KillerProfile = function KillerProfile(_ref) {
  var killer = _ref.killer;
  console.log("({killer})", killer);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: killer.img,
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("table", null, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(killer.Profile).map(function (key) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr", {
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, key.replace("_", " ")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, killer.Profile[key]));
  }))));
};

KillerProfile.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var killer;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            killer = context.query.data;
            console.log("output", killer);
            return _context.abrupt("return", {
              killer: killer
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (KillerProfile);

/***/ })

})
//# sourceMappingURL=killerprofile.js.f33f170a5f8e62b50b6a.hot-update.js.map