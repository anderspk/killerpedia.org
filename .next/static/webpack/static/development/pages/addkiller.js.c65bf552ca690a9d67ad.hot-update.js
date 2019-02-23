webpackHotUpdate("static\\development\\pages\\addkiller.js",{

/***/ "./pages/addkiller.js":
/*!****************************!*\
  !*** ./pages/addkiller.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-final-form */ "./node_modules/react-final-form/dist/react-final-form.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);














var AddPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AddPage, _React$Component);

  function AddPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AddPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(AddPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "state", {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "onInputChange", function (e) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, e.target.name, e.target.value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "onImageSelect", function (e) {
      console.log("image", e.target.files[0]);

      _this.setState({
        avatar: URL.createObjectURL(e.target.files[0])
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "handleOnSubmit",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_12___default.a.post("http://localhost:3001/killers", data);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AddPage, [{
    key: "render",
    value: function render() {
      console.log("state", this.state);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_11__["Form"], {
        onSubmit: this.handleOnSubmit,
        render: function render(_ref2) {
          var handleSubmit = _ref2.handleSubmit,
              submitting = _ref2.submitting;
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form", {
            onSubmit: handleSubmit
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, " ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
            htmlFor: "name"
          }, "Name:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_11__["Field"], {
            type: "text",
            component: "input",
            name: "name"
          })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, " ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", null, "Avatar:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_11__["Field"], {
            component: "input",
            name: "avatar"
          })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
            htmlFor: "classification"
          }, "Classification:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_11__["Field"], {
            type: "text",
            component: "input",
            name: "classification"
          })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, " ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
            htmlFor: "characteristics"
          }, "Characteristics:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_11__["Field"], {
            type: "text",
            component: "input",
            name: "characteristics"
          })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, " ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
            htmlFor: "number_of_victims"
          }, "Number of victims:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_11__["Field"], {
            type: "text",
            component: "input",
            name: "number_of_victims"
          })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, " ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
            htmlFor: "date_of_murders"
          }, "Date of murders:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_11__["Field"], {
            type: "text",
            component: "input",
            name: "date_of_murders"
          })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, " ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
            htmlFor: "date_of_arrest"
          }, "Date of arrest:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_11__["Field"], {
            type: "text",
            component: "input",
            name: "date_of_arrest"
          })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, " ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
            htmlFor: "date_of_birth"
          }, "Date of birth:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_11__["Field"], {
            type: "text",
            component: "input",
            name: "date_of_birth"
          })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, " ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
            htmlFor: "victims_profile"
          }, "Victims profile:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_11__["Field"], {
            type: "text",
            component: "input",
            name: "victims_profile"
          })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, " ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
            htmlFor: "method_of_muruder"
          }, "Method of murder:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_11__["Field"], {
            type: "text",
            component: "input",
            name: "method_of_muruder"
          })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, " ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
            htmlFor: "location"
          }, "Location:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_11__["Field"], {
            type: "text",
            component: "input",
            name: "location"
          })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, " ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
            htmlFor: "status"
          }, "Status:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_11__["Field"], {
            type: "text",
            component: "input",
            name: "status"
          })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, " ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
            htmlFor: "summary"
          }, "Summary"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("textarea", {
            id: "summary",
            name: "summary"
          })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
            type: "submit"
          }, "Submit"));
        }
      }));
    }
  }]);

  return AddPage;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AddPage);

/***/ })

})
//# sourceMappingURL=addkiller.js.c65bf552ca690a9d67ad.hot-update.js.map