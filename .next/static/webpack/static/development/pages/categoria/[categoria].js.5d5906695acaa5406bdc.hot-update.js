webpackHotUpdate("static\\development\\pages\\categoria\\[categoria].js",{

/***/ "./components/Paginacao/index.js":
/*!***************************************!*\
  !*** ./components/Paginacao/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./containers/Lista/ProdutosCategoria/index.js":
/*!*****************************************************!*\
  !*** ./containers/Lista/ProdutosCategoria/index.js ***!
  \*****************************************************/
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
/* harmony import */ var _components_Listas_Produtos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Listas/Produtos */ "./components/Listas/Produtos.js");
/* harmony import */ var _components_Paginacao__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Paginacao */ "./components/Paginacao/index.js");
/* harmony import */ var _components_Paginacao__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_Paginacao__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "D:\\javaScript\\lojavirtual\\lojavirtual\\containers\\Lista\\ProdutosCategoria\\index.js";
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/* modulo 41 - loja virtual -  paginas de categoria preparando a base ...  */
/* modulo 41 - loja virtual -  adicionando paginação configurações e estilo */




var PRODUTOS = [{
  id: 1,
  fotos: ['/static/img/mouse-1.png'],
  titulo: 'Mouser Gamer 1',
  preco: 25,
  promocao: 25
}, {
  id: 2,
  fotos: ['/static/img/mouse-4.png'],
  titulo: 'Mouser Gamer 2 para ',
  preco: 35,
  promocao: 25
}, {
  id: 3,
  fotos: ['/static/img/mouse-5.png'],
  titulo: 'Mouser Gamer 3',
  preco: 50,
  promocao: 40
}, {
  id: 4,
  fotos: ['/static/img/mouse-2.png'],
  titulo: 'Mouser Gamer 4',
  preco: 135,
  promocao: 125
}, {
  id: 5,
  fotos: ['/static/img/mouse-1.png'],
  titulo: 'Mouser Gamer 1',
  preco: 25,
  promocao: 25
}, {
  id: 6,
  fotos: ['/static/img/mouse-4.png'],
  titulo: 'Mouser Gamer 2 para ',
  preco: 35,
  promocao: 25
}, {
  id: 7,
  fotos: ['/static/img/mouse-5.png'],
  titulo: 'Mouser Gamer 3',
  preco: 50,
  promocao: 40
}, {
  id: 8,
  fotos: ['/static/img/mouse-2.png'],
  titulo: 'Mouser Gamer 4',
  preco: 135,
  promocao: 125
}, {
  id: 9,
  fotos: ['/static/img/mouse-1.png'],
  titulo: 'Mouser Gamer 1',
  preco: 25,
  promocao: 25
}, {
  id: 10,
  fotos: ['/static/img/mouse-4.png'],
  titulo: 'Mouser Gamer 2 para ',
  preco: 35,
  promocao: 25
}, {
  id: 11,
  fotos: ['/static/img/mouse-5.png'],
  titulo: 'Mouser Gamer 3',
  preco: 50,
  promocao: 40
}, {
  id: 12,
  fotos: ['/static/img/mouse-2.png'],
  titulo: 'Mouser Gamer 4',
  preco: 135,
  promocao: 125
}, {
  id: 13,
  fotos: ['/static/img/mouse-1.png'],
  titulo: 'Mouser Gamer 1',
  preco: 25,
  promocao: 25
}, {
  id: 14,
  fotos: ['/static/img/mouse-4.png'],
  titulo: 'Mouser Gamer 2 para ',
  preco: 35,
  promocao: 25
}, {
  id: 15,
  fotos: ['/static/img/mouse-5.png'],
  titulo: 'Mouser Gamer 3',
  preco: 50,
  promocao: 40
}, {
  id: 16,
  fotos: ['/static/img/mouse-2.png'],
  titulo: 'Mouser Gamer 4',
  preco: 135,
  promocao: 125
}];
var ProdutosCategoria = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ProdutosCategoria, _Component);
  var _super = _createSuper(ProdutosCategoria);
  function ProdutosCategoria() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProdutosCategoria);
    return _super.apply(this, arguments);
  }
  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ProdutosCategoria, [{
    key: "render",
    value: function render() {
      var _this = this;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container Categoria-Produtos",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex flex-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 6
        }
      }, "ACESS\xD3RIOS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Listas_Produtos__WEBPACK_IMPORTED_MODULE_7__["default"], {
        produtos: PRODUTOS,
        itensPorLinha: 4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Paginacao__WEBPACK_IMPORTED_MODULE_9___default.a, {
        atual: this.state.atual || 0,
        total: PRODUTOS.length * 4,
        limite: PRODUTOS.length,
        onClick: function onClick(numeroAtual) {
          return _this.setState({
            atual: 0
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 5
        }
      }));
    }
  }]);
  return ProdutosCategoria;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (ProdutosCategoria);

/***/ })

})
//# sourceMappingURL=[categoria].js.5d5906695acaa5406bdc.hot-update.js.map