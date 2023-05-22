webpackHotUpdate("static\\development\\pages\\area-cliente\\pedido\\[pedido].js",{

/***/ "./containers/Pedido/PedidoDetalhes/DadosDoPedido.js":
/*!***********************************************************!*\
  !*** ./containers/Pedido/PedidoDetalhes/DadosDoPedido.js ***!
  \***********************************************************/
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
/* harmony import */ var _components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Texto/Dados */ "./components/Texto/Dados.js");
/* harmony import */ var _components_Tabela_Simples_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Tabela/Simples.js */ "./components/Tabela/Simples.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils */ "./utils/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);






var _jsxFileName = "D:\\javaScript\\lojavirtual\\lojavirtual\\containers\\Pedido\\PedidoDetalhes\\DadosDoPedido.js";
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/* modulo 43 - Area do cliente -  Detalhes do pedido - 
 criando a página, componentes e todo o estilo  1/3
*/






/* Detalhes do Pedido - realizando a integração 2/2 */




var DadosDoPedido = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(DadosDoPedido, _Component);
  var _super = _createSuper(DadosDoPedido);
  function DadosDoPedido() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DadosDoPedido);
    return _super.apply(this, arguments);
  }
  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DadosDoPedido, [{
    key: "renderDadosDoCliente",
    value: function renderDadosDoCliente() {
      var pedido = this.props.pedido;
      if (!pedido) return null;
      var cliente = pedido.cliente;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "hedadline",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 5
        }
      }, "DADOS DO CLIENTE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "Nome",
        valor: cliente.nome,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "CPF",
        valor: cliente.cpf,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "Telefone",
        valor: cliente.telefones[0],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "Data de Nascimento",
        valor: moment__WEBPACK_IMPORTED_MODULE_11___default()(cliente.dataDeNascimento).format('DD/MM/YYYY'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 5
        }
      }));
    }
  }, {
    key: "renderDadosDoCarrinho",
    value: function renderDadosDoCarrinho() {
      var pedido = this.props.pedido;
      if (!pedido) return null;
      var carrinho = pedido.carrinho;
      var dados = [];
      carrinho.forEach(function (item) {
        dados.push({
          Produto: item.produto.titulo + ' - ' + item.variacao.nome,
          'Preço Und': Object(_utils__WEBPACK_IMPORTED_MODULE_9__["formatMoney"])(item.precoUnitario),
          Quantidade: item.quantidade,
          'Preço Total': Object(_utils__WEBPACK_IMPORTED_MODULE_9__["formatMoney"])(item.precoUnitario * item.quantidade)
        });
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "headline",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 5
        }
      }, "CARRINHO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Tabela_Simples_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        cabecalho: ['Produto', 'Preço Und', 'Quantidade', 'Preço Total'],
        dados: dados,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 5
        }
      }));
    }

    /* modulo 43 - Area do cliente -  Detalhes do pedido - 
    criando a página, componentes e todo o estilo  2/3
    */
  }, {
    key: "renderDadosDeEntrega",
    value: function renderDadosDeEntrega() {
      var pedido = this.props.pedido;
      if (!pedido) return null;
      var entrega = pedido.entrega;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "headline",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 5
        }
      }, "DADOS DE ENTREGA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "Endereco",
        valor: entrega.endereco.local,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "N\xFAmero",
        valor: entrega.endereco.numero,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "Bairro",
        valor: entrega.endereco.bairro,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "Complemento",
        valor: entrega.endereco.complemento || '',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "Cidade",
        valor: entrega.endereco.cidade,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "Estado",
        valor: entrega.endereco.estado,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "CEP",
        valor: entrega.endereco.CEP,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "C\xF3digo de rastreamento",
        valor: entrega.codigoRastreamento,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 5
        }
      }));
    }
  }, {
    key: "renderDadosDePagamento",
    value: function renderDadosDePagamento() {
      var pedido = this.props.pedido;
      if (!pedido) return null;
      var entrega = pedido.entrega,
        pagamento = pedido.pagamento;
      console.log('entrega', entrega);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "headline",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 5
        }
      }, "DADOS DE PAGAMENTO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "Taxa de Entrega",
        valor: " ".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_9__["formatMoney"])(entrega.custo), " \n\t\t\t\t (").concat(_utils__WEBPACK_IMPORTED_MODULE_9__["codigosCorreios"][entrega.tipo], " - ").concat(entrega.prazo, ")\t"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "Valor do Pedido",
        valor: Object(_utils__WEBPACK_IMPORTED_MODULE_9__["formatMoney"])(pagamento.valor - entrega.custo),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "Valor Total",
        valor: Object(_utils__WEBPACK_IMPORTED_MODULE_9__["formatMoney"])(pagamento.valor),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "Forma de pagamento",
        valor: "".concat(pagamento.forma === "boleto" ? "Boleto " : " Cartão de crédito", " -\n\t\t\t\t\t ").concat(pagamento.parcelas, "x"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 5
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Detalhes-do-Pedido",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 5
        }
      }, this.renderDadosDoCliente(), this.renderDadosDoCarrinho()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 5
        }
      }, this.renderDadosDeEntrega(), this.renderDadosDePagamento()));
    }
  }]);
  return DadosDoPedido;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
var mapStateToProps = function mapStateToProps(state) {
  return {
    pedido: state.pedido.pedido
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps)(DadosDoPedido));

/***/ })

})
//# sourceMappingURL=[pedido].js.0947ebb1d7fb2005014e.hot-update.js.map