webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/reducers/produtoReducers.js":
/*!*******************************************!*\
  !*** ./redux/reducers/produtoReducers.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./redux/types.js");

/* modulo 44 - Criando actions e reduces para integração 2/2*/
/* modulo 44 - Criando actions e reduces para integração 1/2*/

/*modulo 46 - adicionando actions e reducers e alterando os componentes para integração*/


var initialState = {
  produtos: null,
  termo: "",
  produtosPesquisa: null,
  produto: null
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTOS"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        produtos: action.payload.produtos
      });
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PESQUISA"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        termo: action.termo
      });
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTOS_PESQUISA"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        produtosPesquisa: action.payload.produtos,
        termo: action.termo
      });
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTO"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        produto: action.payload.produto
      });
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTO_AVALIACOES"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        avaliacoes: action.payload.avaliacoes
      });
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTO_VARIACOES"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        variacoes: action.payload.variacoes
      });
    case _types__WEBPACK_IMPORTED_MODULE_1__["NOVA_AVALIACAO"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        avaliacoes: state.avaliacoes.concat([action.payload.avaliacao])
      });
    default:
      return state;
  }
});

/***/ })

})
//# sourceMappingURL=_app.js.9fa5ec982d517d1902b0.hot-update.js.map