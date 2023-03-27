webpackHotUpdate("static\\development\\pages\\carrinho.js",{

/***/ "./redux/actions/carrinhoActions.js":
/*!******************************************!*\
  !*** ./redux/actions/carrinhoActions.js ***!
  \******************************************/
/*! exports provided: setCarrinho, cleanCarrinho, fetchProdutoCarrinho, fetchVariacoesCarrinho, calcularFrete, removerProduto, updateQuantidade, selecionarFrete, cleanFretes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCarrinho", function() { return setCarrinho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanCarrinho", function() { return cleanCarrinho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProdutoCarrinho", function() { return fetchProdutoCarrinho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchVariacoesCarrinho", function() { return fetchVariacoesCarrinho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcularFrete", function() { return calcularFrete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removerProduto", function() { return removerProduto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateQuantidade", function() { return updateQuantidade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selecionarFrete", function() { return selecionarFrete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanFretes", function() { return cleanFretes; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.js */ "./config.js");
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* modulo 48 -  criando as actions e reducers necessários (1/2) */

/* modulo 48 -  criando as actions e reducers necessários (2/2) */




var setCarrinho = function setCarrinho() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_3__["SET_CARRINHO"],
    carrinho: Object(_utils_cart__WEBPACK_IMPORTED_MODULE_2__["getCart"])()
  };
};
var cleanCarrinho = function cleanCarrinho() {
  Object(_utils_cart__WEBPACK_IMPORTED_MODULE_2__["cleanCart"])();
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_3__["CLEAN_CARRINHO"]
  };
};
var fetchProdutoCarrinho = function fetchProdutoCarrinho(id, idxCarrinho) {
  return function (dispatch) {
    console.log('entrou no fetchprodutocarrinho');
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config_js__WEBPACK_IMPORTED_MODULE_1__["url"], "/api/produtos/").concat(id, "?loja=").concat(_config_js__WEBPACK_IMPORTED_MODULE_1__["loja"])).then(function (response) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["FETCH_PRODUTO_CARRINHO"],
        payload: response.data,
        idxCarrinho: idxCarrinho
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  };
};
var fetchVariacoesCarrinho = function fetchVariacoesCarrinho(id, produto, idxCarrinho) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config_js__WEBPACK_IMPORTED_MODULE_1__["url"], "/api/variacoes/").concat(id, "?produto=").concat(produto, "&loja=").concat(_config_js__WEBPACK_IMPORTED_MODULE_1__["loja"])).then(function (response) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["FETCH_VARIACAO_CARRINHO"],
        payload: response.data,
        idxCarrinho: idxCarrinho
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  };
};
var calcularFrete = function calcularFrete(cep, carrinho) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config_js__WEBPACK_IMPORTED_MODULE_1__["url"], "/api/entregas/calcular"), {
      cep: cep,
      carrinho: carrinho
    }).then(function (response) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["FETCH_VALOR_ENTREGA"],
        payload: response.data,
        cep: cep
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  };
};
var removerProduto = function removerProduto(index) {
  Object(_utils_cart__WEBPACK_IMPORTED_MODULE_2__["removeCart"])(index);
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_3__["REMOVE_PRODUTO_CART"],
    idxCarrinho: index
  };
};
var updateQuantidade = function updateQuantidade(change, index) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_3__["UPDATE_QTD_CART"],
    change: change,
    idxCarrinho: index
  };
};
var selecionarFrete = function selecionarFrete(freteSelecionado) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_3__["UPDATE_FRETE_CART"],
    freteSelecionado: freteSelecionado
  };
};
var cleanFretes = function cleanFretes() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_3__["CLEAN_FRETES"]
  };
};
/* harmony default export */ __webpack_exports__["default"] = ({
  setCarrinho: setCarrinho,
  cleanCarrinho: cleanCarrinho,
  fetchProdutoCarrinho: fetchProdutoCarrinho,
  fetchVariacoesCarrinho: fetchVariacoesCarrinho,
  calcularFrete: calcularFrete,
  updateQuantidade: updateQuantidade,
  selecionarFrete: selecionarFrete,
  removerProduto: removerProduto,
  cleanFretes: cleanFretes
});

/***/ })

})
//# sourceMappingURL=carrinho.js.d45cf8898fc324e564dd.hot-update.js.map