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
          lineNumber: 27,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "hedadline",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 5
        }
      }, "DADOS DO CLIENTE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "Nome",
        valor: cliente.nome,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "CPF",
        valor: cliente.cpf,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "CPF",
        valor: cliente.telefone,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "Data de Nascimento",
        valor: moment__WEBPACK_IMPORTED_MODULE_11___default()(cliente.dataDeNascimento).format('DD/MM/YYYY'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
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
          lineNumber: 59,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "headline",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 5
        }
      }, "CARRINHO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Tabela_Simples_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        cabecalho: ['Produto', 'Preço Und', 'Quantidade', 'Preço Total'],
        dados: dados,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "headline",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 5
        }
      }, "DADOS DE ENTREGA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "Endereco",
        valor: "Rua teste",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "N\xFAmero",
        valor: "123",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "Bairro",
        valor: "Centro",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "Complemento",
        valor: "casa",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "Cidade",
        valor: "Uberaba",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "Estado",
        valor: "MG",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "CEP",
        valor: "12345-789",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 5
        }
      }));
    }
  }, {
    key: "renderDadosDePagamento",
    value: function renderDadosDePagamento() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "headline",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 5
        }
      }, "DADOS DE PAGAMENTO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "Taxa de Entrega",
        valor: Object(_utils__WEBPACK_IMPORTED_MODULE_9__["formatMoney"])(20),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "Valor do Pedido",
        valor: Object(_utils__WEBPACK_IMPORTED_MODULE_9__["formatMoney"])(265),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "Valor Total",
        valor: Object(_utils__WEBPACK_IMPORTED_MODULE_9__["formatMoney"])(285),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chave: "Forma de pagamento",
        valor: "cartao de cr\xE9dito - 2x",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
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
          lineNumber: 102,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 5
        }
      }, this.renderDadosDoCliente(), this.renderDadosDoCarrinho()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
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
//# sourceMappingURL=[pedido].js.d21f2551d49484fe1b13.hot-update.js.map