webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./redux/actions/produtoActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/produtoActions.js ***!
  \*****************************************/
/*! exports provided: fetchProdutosPaginaInicial, fetchTermo, fetchProdutosPesquisa, fetchProduto, fetchAvaliacoes, fetchVariacoes, novaAvaliacao, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProdutosPaginaInicial", function() { return fetchProdutosPaginaInicial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTermo", function() { return fetchTermo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProdutosPesquisa", function() { return fetchProdutosPesquisa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProduto", function() { return fetchProduto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAvaliacoes", function() { return fetchAvaliacoes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchVariacoes", function() { return fetchVariacoes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "novaAvaliacao", function() { return novaAvaliacao; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config.js */ "./config.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_helpers__WEBPACK_IMPORTED_MODULE_3__);
/* modulo 44 - Criando actions e reduces para integração 2/2*/

/*modulo 46 - adicionando actions e reducers e alterando os componentes para integração*/

/* modulo 47 -  integração -  detalhes do produto */





/* modulo 47 - integrando o componente de avaliações 2/2 */

var fetchProdutosPaginaInicial = function fetchProdutosPaginaInicial() {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["url"], "/api/produtos/disponiveis?loja=").concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["loja"], "&offset=", 0, "&limit=", 8, "&sortType=", "preco-crescente")).then(function (response) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTOS"],
        payload: response.data
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  };
};
var fetchTermo = function fetchTermo(termo) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PESQUISA"],
    termo: termo
  };
};
var fetchProdutosPesquisa = function fetchProdutosPesquisa(termo) {
  var atual = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["url"], "/api/produtos/search/").concat(termo, "?loja=").concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["loja"], "&offset=").concat(atual, "&limit=").concat(limit)).then(function (response) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTOS_PESQUISA"],
        payload: response.data,
        termo: termo
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  };
};
var fetchProduto = function fetchProduto(id) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["url"], "/api/produtos/").concat(id, "?loja=").concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["loja"])).then(function (response) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTO"],
        payload: response.data
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  };
};
var fetchAvaliacoes = function fetchAvaliacoes(id) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["url"], "/api/produtos/").concat(id, "/avaliacoes?loja=").concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["loja"], "&id=").concat(id)).then(function (response) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTO_AVALIACOES"],
        payload: response.data
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  };
};
var fetchVariacoes = function fetchVariacoes(id) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["url"], "/api/produtos/").concat(id, "/variacoes?loja=").concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["loja"], "&id=").concat(id)).then(function (response) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTO_VARIACOES"],
        payload: response.data
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  };
};

/* modulo 47 - integrando o componente de avaliações 2/2 */

var novaAvaliacao = ({
  nome: nome,
  token: token,
  produto: produto,
  texto: texto,
  pontuacao: pontuacao
}, function (cb) {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["url"], "/api/avaliacoes?loja=").concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["loja"], "&produto=").concat(produto), {
    nome: nome,
    texto: texto,
    pontuacao: pontuacao
  }, Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getHeaders"])(token)).then(function (response) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["NOVA_AVALIACAO"],
      payload: response.data
    });
    cb(null);
  })["catch"](function (e) {
    return cb(e);
  });
});
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchProdutosPaginaInicial: fetchProdutosPaginaInicial,
  fetchTermo: fetchTermo,
  fetchProdutosPesquisa: fetchProdutosPesquisa,
  fetchProduto: fetchProduto,
  fetchAvaliacoes: fetchAvaliacoes,
  fetchVariacoes: fetchVariacoes,
  novaAvaliacao: novaAvaliacao
});

/***/ })

})
//# sourceMappingURL=index.js.30eff6aa6e6f2b54086c.hot-update.js.map