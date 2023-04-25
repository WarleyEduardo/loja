webpackHotUpdate("static\\development\\pages\\carrinho.js",{

/***/ "./redux/actions/checkoutActions.js":
/*!******************************************!*\
  !*** ./redux/actions/checkoutActions.js ***!
  \******************************************/
/*! exports provided: novoPedido, cleanForm, setTipoPagamento, getSessionPagamento, setForm, pagarPedido, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "novoPedido", function() { return novoPedido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanForm", function() { return cleanForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTipoPagamento", function() { return setTipoPagamento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSessionPagamento", function() { return getSessionPagamento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setForm", function() { return setForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pagarPedido", function() { return pagarPedido; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./errorHandling */ "./redux/actions/errorHandling.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _carrinhoActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./carrinhoActions */ "./redux/actions/carrinhoActions.js");

/*modulo 49 - integração checkout - desenvolvendo o container dos dados do cliente */



/* módulo 49 -  Dados de pagamento - preparando a base, actions e  funções do pagseguro */





/*modulo 49 - Botão final de checkout -  preprando base , actions e reducers */




var novoPedido = function novoPedido(form, freteSelecionado, tipoPagamentoSelecionado, valorTotal, token, senderHash) {
  var carrinho = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : Object(_utils_cart__WEBPACK_IMPORTED_MODULE_4__["getCart"])();
  var cb = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["url"], "/api/pedidos/loja").concat(_config__WEBPACK_IMPORTED_MODULE_3__["loja"]), {
      carrinho: carrinho,
      entrega: {
        custo: freteSelecionado.Valor.replace(',', '.'),
        tipo: freteSelecionado.Codigo.toString(),
        prazo: freteSelecionado.prazoEntrega,
        endereco: {
          local: form.local,
          numero: form.numero,
          complemento: form.complemento,
          bairro: form.bairro,
          cidade: form.cidade,
          estado: form.estado,
          CEP: form.CEP
        }
      },
      pagamento: {
        valor: tipoPagamentoSelecionado === 'cartao' ? form.parcelasCartaoSelecionada.totalAmount : valorTotal,
        forma: tipoPagamentoSelecionado === 'cartao' ? 'creditCard' : 'boleto',
        parcelas: tipoPagamentoSelecionado === 'cartao' ? form.parcelasCartaoSelecionada.quantity : 1,
        enderecoEntregaIgualCobranca: form.enderecoEntregaIgualCobranca,
        endereco: {
          local: form.enderecoEntregaIgualCobranca ? form.local : form.dadosCobranca.local,
          numero: form.enderecoEntregaIgualCobranca ? form.numero : form.dadosCobranca.numero,
          complemento: form.enderecoEntregaIgualCobranca ? form.complemento : form.dadosCobranca.complemento,
          bairro: form.enderecoEntregaIgualCobranca ? form.bairro : form.dadosCobranca.bairro,
          cidade: form.enderecoEntregaIgualCobranca ? form.cidade : form.dadosCobranca.cidade,
          estado: form.enderecoEntregaIgualCobranca ? form.estado : form.dadosCobranca.estado,
          CEP: form.enderecoEntregaIgualCobranca ? form.CEP : form.dadosCobranca.CEP
        },
        cartao: tipoPagamentoSelecionado === "cartao" ? {
          nomeCompleto: form.nomeCartao.trim(),
          codigoArea: form.telefone.slice(0, 2),
          telefone: form.telefone.slice(2).trim(),
          dataDeNascimento: form.dataDeNascimento,
          credit_card_token: form.credit_card_token,
          cpf: form.cpf
        } : undefined
      }
    }, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getHeaders"])(token)).then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["NOVO_PEDIDO"],
        payload: response.data
      });
      dispatch(pagarPedido(response.data.pedido.pagamento._id, token, senderHash));
      cb(null);
    })["catch"](function (e) {
      return cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_6__["default"])(e));
    });
  };
};
var cleanForm = function cleanForm() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__["CLEAN_FORM"]
  };
};
var setTipoPagamento = function setTipoPagamento(tipoPagamentoSelecionado) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_TIPO_PAGAMENTO"],
    tipoPagamentoSelecionado: tipoPagamentoSelecionado
  };
};
var getSessionPagamento = function getSessionPagamento() {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["url"], "/api/pagamentos/session")).then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_SESSION_ID"],
        payload: response.data
      });
      PagSeguroDirectPayment.setSessionId(response.data.sessionId);
      var senderHash = PagSeguroDirectPayment.getSenderHash();
      /*
      PagSeguroDirectPayment.onSenderHashReady((response) => {
      	if (response.status == 'error') {
      		console.log(response.message);
      		return false;
      	}
      	 console.log(response.senderHash);
      	
      }
      );
      */

      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_SENDER_HASH"],
        senderHash: senderHash
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  };
};
var setForm = function setForm(payload, prefix) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_FORM"],
      payload: payload,
      prefix: prefix
    });
    return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve();
  };
};
var pagarPedido = function pagarPedido(id, token, senderHash) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["url"], "/api/pagamentos/pagar/").concat(id, "?loja=").concat(_config__WEBPACK_IMPORTED_MODULE_3__["loja"])), {
      senderHash: senderHash
    }, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getHeaders"])(token).then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["PAGAR_PEDIDO"],
        payload: response.data
      });
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/sucesso');
      dispatch(Object(_carrinhoActions__WEBPACK_IMPORTED_MODULE_8__["cleanCarrinho"])());
      dispatch(cleanForm());
    })["catch"](function (e) {
      return console.log(e);
    });
  };
};
/* harmony default export */ __webpack_exports__["default"] = ({
  setForm: setForm,
  getSessionPagamento: getSessionPagamento,
  setTipoPagamento: setTipoPagamento,
  cleanForm: cleanForm,
  novoPedido: novoPedido,
  pagarPedido: pagarPedido
});

/***/ }),

/***/ "./redux/types.js":
/*!************************!*\
  !*** ./redux/types.js ***!
  \************************/
/*! exports provided: REGISTER, AUTENTICAR_TOKEN, FETCH_CATEGORIAS, FETCH_LOJA, FETCH_PRODUTOS, FETCH_CATEGORIA, FETCH_PRODUTOS_CATEGORIA, USER, FETCH_PESQUISA, FETCH_PRODUTOS_PESQUISA, FETCH_PRODUTO, FETCH_PRODUTO_VARIACOES, FETCH_PRODUTO_AVALIACOES, NOVA_AVALIACAO, SET_CARRINHO, CLEAN_CARRINHO, FETCH_PRODUTO_CARRINHO, FETCH_VARIACAO_CARRINHO, FETCH_VALOR_ENTREGA, UPDATE_QTD_CART, REMOVE_PRODUTO_CART, CLEAN_FRETES, UPDATE_FRETE_CART, AUTENTICAR, FETCH_CLIENTE, SET_FORM, CLEAN_FORM, SET_TIPO_PAGAMENTO, FETCH_SESSION_ID, FETCH_SENDER_HASH, NOVO_PEDIDO, PAGAR_PEDIDO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTENTICAR_TOKEN", function() { return AUTENTICAR_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATEGORIAS", function() { return FETCH_CATEGORIAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_LOJA", function() { return FETCH_LOJA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTOS", function() { return FETCH_PRODUTOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATEGORIA", function() { return FETCH_CATEGORIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTOS_CATEGORIA", function() { return FETCH_PRODUTOS_CATEGORIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER", function() { return USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PESQUISA", function() { return FETCH_PESQUISA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTOS_PESQUISA", function() { return FETCH_PRODUTOS_PESQUISA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO", function() { return FETCH_PRODUTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO_VARIACOES", function() { return FETCH_PRODUTO_VARIACOES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO_AVALIACOES", function() { return FETCH_PRODUTO_AVALIACOES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOVA_AVALIACAO", function() { return NOVA_AVALIACAO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CARRINHO", function() { return SET_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_CARRINHO", function() { return CLEAN_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO_CARRINHO", function() { return FETCH_PRODUTO_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VARIACAO_CARRINHO", function() { return FETCH_VARIACAO_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VALOR_ENTREGA", function() { return FETCH_VALOR_ENTREGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_QTD_CART", function() { return UPDATE_QTD_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_PRODUTO_CART", function() { return REMOVE_PRODUTO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_FRETES", function() { return CLEAN_FRETES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FRETE_CART", function() { return UPDATE_FRETE_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTENTICAR", function() { return AUTENTICAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CLIENTE", function() { return FETCH_CLIENTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FORM", function() { return SET_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_FORM", function() { return CLEAN_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TIPO_PAGAMENTO", function() { return SET_TIPO_PAGAMENTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SESSION_ID", function() { return FETCH_SESSION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SENDER_HASH", function() { return FETCH_SENDER_HASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOVO_PEDIDO", function() { return NOVO_PEDIDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGAR_PEDIDO", function() { return PAGAR_PEDIDO; });
/* modulo 40 - loja virtual - criando helper para inicialização*/

/* modulo 45 - Criando actions e reduces e atualizando os componentes das categorias*/

/*modulo 46 - adicionando actions e reducers e alterando os componentes para integração*/

/* modulo 47 -  integração -  detalhes do produto */

/*modulo 49 - Criando as funções e error handlign para os dados do cliente 2/2*/

/*modulo 49 - integração checkout - desenvolvendo o container dos dados do cliente */

/* módulo 49 -  Dados de pagamento - preparando a base, actions e  funções do pagseguro */

/*modulo 49 - Botão final de checkout -  preprando base , actions e reducers */

var REGISTER = 'REGISTER',
  AUTENTICAR_TOKEN = 'AUTENTICAR_TOKEN',
  FETCH_CATEGORIAS = 'FETCH_CATEGORIAS',
  FETCH_LOJA = 'FETCH_LOJA',
  FETCH_PRODUTOS = 'FETCH_PRODUTOS',
  FETCH_CATEGORIA = 'FETCH_CATEGORIA',
  FETCH_PRODUTOS_CATEGORIA = 'FETCH_PRODUTOS_CATEGORIA',
  USER = 'USER',
  FETCH_PESQUISA = 'FETCH_PESQUISA',
  FETCH_PRODUTOS_PESQUISA = 'FETCH_PRODUTOS_PESQUISA',
  FETCH_PRODUTO = 'FETCH_PRODUTO',
  FETCH_PRODUTO_VARIACOES = 'FETCH_PRODUTO_VARIACOES',
  FETCH_PRODUTO_AVALIACOES = 'FETCH_PRODUTO_AVALIACOES',
  NOVA_AVALIACAO = 'NOVA_AVALIACAO',
  SET_CARRINHO = 'SET_CARRINHO',
  CLEAN_CARRINHO = 'CLEAN_CARRINHO',
  FETCH_PRODUTO_CARRINHO = 'FETCH_PRODUTO_CARRINHO',
  FETCH_VARIACAO_CARRINHO = 'FETCH_VARIACAO_CARRINHO',
  FETCH_VALOR_ENTREGA = 'FETCH_VALOR_ENTREGA',
  UPDATE_QTD_CART = 'UPDATE_QTD_CART',
  REMOVE_PRODUTO_CART = 'REMOVE_PRODUTO_CART',
  CLEAN_FRETES = 'CLEAN_FRETES',
  UPDATE_FRETE_CART = 'UPDATE_FRETE_CART',
  AUTENTICAR = 'AUTENTICAR',
  FETCH_CLIENTE = 'FETCH_CLIENTE',
  SET_FORM = 'SET_FORM',
  CLEAN_FORM = 'CLEAN_FORM',
  SET_TIPO_PAGAMENTO = 'SET_TIPO_PAGAMENTO',
  FETCH_SESSION_ID = 'FETCH_SESSION_ID',
  FETCH_SENDER_HASH = 'FETCH_SENDER_HASH',
  NOVO_PEDIDO = 'NOVO_PEDIDO',
  PAGAR_PEDIDO = 'PAGAR_PEDIDO';

/***/ })

})
//# sourceMappingURL=carrinho.js.57a4b51c56b13191c144.hot-update.js.map