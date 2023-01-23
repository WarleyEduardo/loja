webpackHotUpdate("static\\development\\pages\\checkout.js",{

/***/ "./containers/Carrinho/ListaDeProdutos.js":
/*!************************************************!*\
  !*** ./containers/Carrinho/ListaDeProdutos.js ***!
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






var _jsxFileName = "D:\\javaScript\\lojavirtual\\lojavirtual\\containers\\Carrinho\\ListaDeProdutos.js";
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/* modulo 42 - pagina de Carrinho - criando a estrutura da pagina e componentes 1/3 */
/* modulo 42 - pagina de Carrinho - criando a estrutura da pagina e componentes 2/3 */



var PRODUTOS = [{
  id: 1,
  fotos: ['/static/img/mouse-1.png'],
  titulo: 'Mouser Gamer 1 - M',
  precoUnitario: 25,
  quantidade: 1
}, {
  id: 2,
  fotos: ['/static/img/mouse-4.png'],
  titulo: 'Mouser Gamer 2 - G ',
  precoUnitario: 55,
  quantidade: 1
}];
var ListaDeProdutos = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ListaDeProdutos, _Component);
  var _super = _createSuper(ListaDeProdutos);
  function ListaDeProdutos() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ListaDeProdutos);
    return _super.apply(this, arguments);
  }
  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ListaDeProdutos, [{
    key: "renderCabecalhoCarrinho",
    value: function renderCabecalhoCarrinho(semAlteracoes) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "carrinho-cabecalho no-mb-flex flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "headline flex-1 flex-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 6
        }
      }, "Quantidade")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "headline flex-1 flex-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 6
        }
      }, "Pre\xE7o Unit\xE1rio")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "headline flex-1 flex-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 6
        }
      }, "Pre\xE7o total")), semAlteracoes && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 23
        }
      }));
    }
  }, {
    key: "renderProduto",
    value: function renderProduto(item, semAlteracoes) {
      var foto = item.fotos[0];
      var nome = item.titulo;
      var quantidade = item.quantidade,
        precoUnitario = item.precoUnitario;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        key: item.id,
        className: "carrinho-item flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex-4 flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "produto-image flex-2 flex flex-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: foto,
        alt: nome,
        width: "100px",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 7
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "produto-titulo flex-4 flex flex-start",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: "text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 7
        }
      }, nome))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex-1 flex flex-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 5
        }
      }, semAlteracoes ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 23
        }
      }, quantidade) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "number",
        defaultValue: quantidade,
        className: "produto-quantidade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 51
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex-1 flex flex-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 6
        }
      }, Object(_utils__WEBPACK_IMPORTED_MODULE_7__["formatMoney"])(precoUnitario))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex-1 flex flex-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 6
        }
      }, Object(_utils__WEBPACK_IMPORTED_MODULE_7__["formatMoney"])(precoUnitario * quantidade))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex-1 flex flex-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 5
        }
      }, !semAlteracoes && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "btn-remover",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 65
        }
      }, "Remover")));
    }
  }, {
    key: "renderProdutos",
    value: function renderProdutos(semAlteracoes) {
      var _this = this;
      return PRODUTOS.map(function (item) {
        return _this.renderProduto(item, semAlteracoes);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var semAlteracoes = this.props.semAlteracoes;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Lista-De-Produtos flex vertical",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 4
        }
      }, this.renderCabecalhoCarrinho(semAlteracoes), this.renderProdutos(semAlteracoes));
    }
  }]);
  return ListaDeProdutos;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (ListaDeProdutos);

/***/ })

})
//# sourceMappingURL=checkout.js.bea4eaa19d3560edf7c3.hot-update.js.map