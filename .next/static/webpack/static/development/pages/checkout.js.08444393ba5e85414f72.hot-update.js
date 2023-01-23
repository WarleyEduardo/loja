webpackHotUpdate("static\\development\\pages\\checkout.js",{

/***/ "./containers/Checkout/DadosFrete.js":
/*!*******************************************!*\
  !*** ./containers/Checkout/DadosFrete.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Inputs_FormRadio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Inputs/FormRadio */ "./components/Inputs/FormRadio.js");








var _jsxFileName = "D:\\javaScript\\lojavirtual\\lojavirtual\\containers\\Checkout\\DadosFrete.js";
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/* modulo 42 - pagina de Checkout - criando o componente de dados de frete  */


var DadosFrete = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DadosFrete, _Component);
  var _super = _createSuper(DadosFrete);
  function DadosFrete() {
    var _this;
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DadosFrete);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      frete_selecionado: "PAC"
    });
    return _this;
  }
  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DadosFrete, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var frete_selecionado = this.state.frete_selecionado;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "Dados-Frete",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 5
        }
      }, "M\xC9TODOS DE ENTREGA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Inputs_FormRadio__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "frete_selecionado",
        checked: frete_selecionado === 'PAC',
        label: "PAC (8 dias \xFAteis) -  R$ 18,90",
        onChange: function onChange() {
          return _this2.setState({
            frete_selecionado: "PAC"
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 7
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Inputs_FormRadio__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "frete_selecionado",
        checked: frete_selecionado === 'SEDEX',
        label: "SEDEX (3 dias \xFAteis) -  R$ 35,90",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 7
        }
      }))));
    }
  }]);
  return DadosFrete;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (DadosFrete);

/***/ })

})
//# sourceMappingURL=checkout.js.08444393ba5e85414f72.hot-update.js.map