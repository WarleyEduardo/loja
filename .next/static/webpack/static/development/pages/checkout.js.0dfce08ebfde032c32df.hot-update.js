webpackHotUpdate("static\\development\\pages\\checkout.js",{

/***/ "./containers/Checkout/index.js":
/*!**************************************!*\
  !*** ./containers/Checkout/index.js ***!
  \**************************************/
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
/* harmony import */ var _DadosCliente__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DadosCliente */ "./containers/Checkout/DadosCliente.js");
/* harmony import */ var _DadosEntrega__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DadosEntrega */ "./containers/Checkout/DadosEntrega.js");
/* harmony import */ var _SubmitDadosCliente__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SubmitDadosCliente */ "./containers/Checkout/SubmitDadosCliente.js");
/* harmony import */ var _DadosFrete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DadosFrete */ "./containers/Checkout/DadosFrete.js");
/* harmony import */ var _DadosPagamento__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DadosPagamento */ "./containers/Checkout/DadosPagamento.js");
/* harmony import */ var _DadosPedido__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DadosPedido */ "./containers/Checkout/DadosPedido.js");
/* harmony import */ var _CheckoutButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CheckoutButton */ "./containers/Checkout/CheckoutButton.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");








var _jsxFileName = "D:\\javaScript\\lojavirtual\\lojavirtual\\containers\\Checkout\\index.js";
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/* modulo 42 - pagina de Checkout - criando  a base da pagina de checkout*/










/*Módulo 49 explicando como funciona a parte dos dados do cliente*/




/* Modulo 49 - submit dados do cliente - fazendo a integração e ativando validações (1/2) */
var CheckoutContainer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CheckoutContainer, _Component);
  var _super = _createSuper(CheckoutContainer);
  function CheckoutContainer() {
    var _this;
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CheckoutContainer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      permissaoInicial: false,
      permissaoCheckout: false
    });
    return _this;
  }
  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CheckoutContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$state = this.state,
        permissaoInicial = _this$state.permissaoInicial,
        permissaoCheckout = _this$state.permissaoCheckout;
      var usuario = this.props.usuario;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "Checkout container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 5
        }
      }, "CONCLU\xCDNDO SEU PEDIDO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_DadosCliente__WEBPACK_IMPORTED_MODULE_9__["default"], {
        usuario: usuario,
        permissaoInicial: permissaoInicial,
        permitir: function permitir() {
          return _this2.setState({
            permissaoInicial: true
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 5
        }
      }), (permissaoInicial || usuario) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_DadosEntrega__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 39
        }
      }), (permissaoInicial || usuario) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_SubmitDadosCliente__WEBPACK_IMPORTED_MODULE_11__["default"], {
        permitir: function permitir() {
          return _this2.setState({
            permissaoCheckout: true
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 6
        }
      }), permissaoCheckout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_DadosFrete__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 27
        }
      }), permissaoCheckout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_DadosPagamento__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 27
        }
      }), permissaoCheckout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_DadosPedido__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 27
        }
      }), permissaoCheckout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_CheckoutButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 27
        }
      }));
    }
  }]);
  return CheckoutContainer;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
var mapStateToProps = function mapStateToProps(state) {
  return {
    usuario: state.auth.usuario
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_17__["default"])(CheckoutContainer));

/***/ })

})
//# sourceMappingURL=checkout.js.0dfce08ebfde032c32df.hot-update.js.map