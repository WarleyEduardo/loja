webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Listas/Produtos.js":
/*!***************************************!*\
  !*** ./components/Listas/Produtos.js ***!
  \***************************************/
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
/* harmony import */ var _item_Produto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../item/Produto */ "./components/item/Produto.js");






var _jsxFileName = "D:\\javaScript\\lojavirtual\\lojavirtual\\components\\Listas\\Produtos.js";
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/* modulo 41 - loja virtual - criando componente de lista de produto e o card do produto 1/2 */



var Produtos = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Produtos, _Component);
  var _super = _createSuper(Produtos);
  function Produtos() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Produtos);
    return _super.apply(this, arguments);
  }
  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Produtos, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var highest = 0;
      var produtosListados = document.querySelectorAll('.produto-title');
      produtosListados.forEach(function (item) {
        if (highest < item.clientHeight) highest = item.clientHeight;
      });
      produtosListados.forEach(function (item) {
        item.style.height = highest + 10 + 'px';
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      {
        var _this$props = this.props,
          produtos = _this$props.produtos,
          itensPorLinha = _this$props.itensPorLinha;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "Produtos flex wrap",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 5
          }
        }, produtos.map(function (item) {
          return (
            /*#__PURE__*/
            /* Modulo 44 - adicionando dados e realizando integração dos componentes da pagina inicial */
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_item_Produto__WEBPACK_IMPORTED_MODULE_7__["default"], {
              item: item,
              key: item._id,
              porLinha: itensPorLinha,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 7
              }
            })
          );
        }));
      }
    }
  }]);
  return Produtos;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Produtos);

/***/ })

})
//# sourceMappingURL=index.js.ea414a2010d965e38018.hot-update.js.map