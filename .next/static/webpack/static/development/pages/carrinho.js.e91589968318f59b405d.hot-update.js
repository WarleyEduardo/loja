webpackHotUpdate("static\\development\\pages\\carrinho.js",{

/***/ "./containers/Carrinho/DadosDoCarrinho.js":
/*!************************************************!*\
  !*** ./containers/Carrinho/DadosDoCarrinho.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _components_Item_Frete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Item/Frete */ "./components/Item/Frete.js");






var _jsxFileName = "D:\\javaScript\\lojavirtual\\lojavirtual\\containers\\Carrinho\\DadosDoCarrinho.js";
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/* modulo 42 - pagina de Carrinho - criando a estrutura da pagina e componentes 2/3 */




var DadosDoCarrinho = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(DadosDoCarrinho, _Component);
  var _super = _createSuper(DadosDoCarrinho);
  function DadosDoCarrinho() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DadosDoCarrinho);
    return _super.apply(this, arguments);
  }
  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DadosDoCarrinho, [{
    key: "renderDadosDoCarrinho",
    value: function renderDadosDoCarrinho() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "dados-do-carrinho-container  flex-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "dados-do-carrinho-item flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex-1 flex-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "headline",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 7
        }
      }, "Valor do Pedido:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex-1 flex flex-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 6
        }
      }, Object(_utils__WEBPACK_IMPORTED_MODULE_7__["formatMoney"])(85.35))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Item_Frete__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "dados-do-carrinho-item  flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: " flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "headline",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 7
        }
      }, "Valor Total:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex-1 flex flex-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 6
        }
      }, Object(_utils__WEBPACK_IMPORTED_MODULE_7__["formatMoney"])(105.35))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "dados-do-carrinho-item flex flex-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "btn btn-success btn-cta",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 7
        }
      }, "Finalizar Pedido"))));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Dados-Do-Carrinho flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 5
        }
      }), this.renderDadosDoCarrinho());
    }
  }]);
  return DadosDoCarrinho;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (DadosDoCarrinho);

/***/ })

})
//# sourceMappingURL=carrinho.js.e91589968318f59b405d.hot-update.js.map