webpackHotUpdate("static\\development\\pages\\checkout.js",{

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
        type: NOVO_PEDIDO,
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
        type: PAGAR_PEDIDO,
        payload: response.data
      });
      Router.push('/sucesso');
      dispatch(cleanCarrinho());
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

/***/ })

})
//# sourceMappingURL=checkout.js.e8d23f7bd4f2940736a7.hot-update.js.map