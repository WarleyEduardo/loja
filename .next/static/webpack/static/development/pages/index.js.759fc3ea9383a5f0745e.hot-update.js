webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./redux/actions/produtoActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/produtoActions.js ***!
  \*****************************************/
/*! exports provided: fetchProdutosPaginaInicial, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProdutosPaginaInicial", function() { return fetchProdutosPaginaInicial; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config.js */ "./config.js");
/* modulo 44 - Criando actions e reduces para integração 2/2*/



var fetchProdutosPaginaInicial = function fetchProdutosPaginaInicial() {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["url"], "/api/produtos/disponiveis?loja=").concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["loja"], "&offset=", 0, "&limit=", 4, "&sortType=", "preco-crescente")).then(function (response) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTOS"],
        payload: response.data
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  };
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchProdutosPaginaInicial: fetchProdutosPaginaInicial
});

/***/ })

})
//# sourceMappingURL=index.js.759fc3ea9383a5f0745e.hot-update.js.map