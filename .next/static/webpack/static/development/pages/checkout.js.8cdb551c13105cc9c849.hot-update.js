webpackHotUpdate("static\\development\\pages\\checkout.js",{

/***/ "./containers/Checkout/DadosPagamento.js":
/*!***********************************************!*\
  !*** ./containers/Checkout/DadosPagamento.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Inputs_FormRadio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Inputs/FormRadio */ "./components/Inputs/FormRadio.js");
/* harmony import */ var _components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Inputs/FormSimples */ "./components/Inputs/FormSimples.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/format */ "./utils/format.js");








var _jsxFileName = "D:\\javaScript\\lojavirtual\\lojavirtual\\containers\\Checkout\\DadosPagamento.js";
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/* modulo 42 - pagina de Checkout - criando o componente de dados  de pagamento 1/2 */




/* módulo 49 -  Dados de pagamento - preparando a base, actions e  funções do pagseguro */




/* modulo 49 -  Dados de pagamento integrando componentes e funcionalidades*/


var DadosPagamento = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DadosPagamento, _Component);
  var _super = _createSuper(DadosPagamento);
  function DadosPagamento() {
    var _this;
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DadosPagamento);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      opcaoPagamentoSelecionada: 'boleto',
      CPF: "",
      numeroCartao: "",
      nomeCartao: "",
      CVVCartao: "",
      mesCartao: "",
      anoCartao: ""
    });
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "onChange", function (field, value) {
      return _this.props.setForm(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, field, value)).then(function () {
        return _this.validate();
      });
    });
    return _this;
  }
  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DadosPagamento, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getSessionPagamento();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props$form = this.props.form,
        numeroCartao = _this$props$form.numeroCartao,
        nomeCartao = _this$props$form.nomeCartao,
        CVVCartao = _this$props$form.CVVCartao,
        mesCartao = _this$props$form.mesCartao,
        anoCartao = _this$props$form.anoCartao,
        credit_card_token = _this$props$form.credit_card_token,
        bandeira_cartao = _this$props$form.bandeira_cartao,
        parcelasCartao = _this$props$form.parcelasCartao;
      if (!bandeira_cartao && numeroCartao && numeroCartao.split(' ').join('').length > 7) {
        this.getBrand();
      }
      if (!credit_card_token && numeroCartao && numeroCartao.splic(' ').join('').length === 16 && mesCartao && mesCartao.length === 2 && anoCartao && anoCartao.length === 4 && CVVCartao && CVVCartao.length === 3 && bandeira_cartao) this.submitCartaoHash();
      if (!parcelasCartao && bandeira_cartao && parcelasCartao && bandeira_cartao && prevProps.freteSelecionado !== this.props.freteSelecionado) this.getParcelas();
    }
  }, {
    key: "renderOpcoesPagamento",
    value: function renderOpcoesPagamento() {
      var _this2 = this;
      var tipoPagamentoSelecionado = this.props.tipoPagamentoSelecionado;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Inputs_FormRadio__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "tipo_pagamento_selecionado",
        checked: tipoPagamentoSelecionado === 'boleto',
        onChange: function onChange() {
          return _this2.props.setTipoPagamento('boleto');
        },
        label: "Boleto Banc\xE1rio",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 6
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Inputs_FormRadio__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "tipo_pagamento_selecionado",
        checked: tipoPagamentoSelecionado === 'cartao',
        onChange: function onChange() {
          return _this2.setTipoPagamento('cartao');
        },
        label: "Cart\xE3o de Cr\xE9dito",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 6
        }
      })));
    }
  }, {
    key: "validate",
    value: function validate() {}
  }, {
    key: "renderPagamentoComBoleto",
    value: function renderPagamentoComBoleto() {
      var _this3 = this;
      var _this$props$form2 = this.props.form,
        cpf = _this$props$form2.cpf,
        cpfBoleto = _this$props$form2.cpfBoleto;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "Dados-Pagamento",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: cpfBoleto || cpf,
        nome: "CPF",
        placeholder: "CPF",
        label: "CPF",
        onChange: function onChange(e) {
          return _this3.onChange("cpfBoleto", Object(_utils_format__WEBPACK_IMPORTED_MODULE_13__["formatCPF"])(e.target.value));
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 5
        }
      }));
    }
  }, {
    key: "renderPagamentoComCartao",
    value: function renderPagamentoComCartao() {
      var _this4 = this;
      var _this$state = this.state,
        nomeCartao = _this$state.nomeCartao,
        numeroCartao = _this$state.numeroCartao,
        CVVCartao = _this$state.CVVCartao,
        mesCartao = _this$state.mesCartao,
        anoCartao = _this$state.anoCartao;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "Dados-Pagamento",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: nomeCartao,
        nome: "nomeCartao",
        placeholder: "Nome como escrito no cart\xE3o",
        label: "Nome completo no cart\xE3o",
        onChange: function onChange() {
          return _this4.onChange('nomeCartao', e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: numeroCartao,
        nome: "numeroCartao",
        placeholder: "xxxx xxxx xxxx xxxx",
        label: "N\xFAmero do cart\xE3o",
        onChange: function onChange() {
          return _this4.onChange('numeroCartao', e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 7
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: CVVCartao,
        nome: "CVVCartao",
        placeholder: "xxxx",
        label: "C\xF3digo de Seguran\xE7a do Cart\xE3o",
        onChange: function onChange() {
          return _this4.onChange('CVVCartao', e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 7
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 6
        }
      }, "Data de Validade")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: mesCartao,
        nome: "mesCartao",
        placeholder: "MM",
        label: "M\xCAs",
        onChange: function onChange() {
          return _this4.onChange('mesCartao', e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "slash-pagamento",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 6
        }
      }, "\xA0/\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: anoCartao,
        nome: "anoCartao",
        placeholder: "AAAA",
        label: "Ano",
        onChange: function onChange() {
          return _this4.onChange('anoCartao', e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 6
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 6
        }
      }, "Parcelas")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("select", {
        name: "parcela",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 7
        }
      }, "Selecione a quantidade de parcelas para pagamento"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 7
        }
      }, "1x de R$ de 105,00 sem juros"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 7
        }
      }, "2x de R$ de 62,50 sem juros"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 7
        }
      }, "3x de R$ de 35,00 sem juros"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 7
        }
      }, "4x de R$ de 31,75 sem juros"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 7
        }
      }, "5x de R$ de 21,00 sem juros"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 7
        }
      }, "6x de R$ de 17,50 sem juros"))));
    }
  }, {
    key: "render",
    value: function render() {
      var tipoPagamentoSelecionado = this.props.tipoPagamentoSelecionado;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "Dados-Pagamento-Container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 5
        }
      }, "DADOS DE PAGAMENTO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 5
        }
      }), this.renderOpcoesPagamento(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 5
        }
      }), tipoPagamentoSelecionado === 'boleto' && this.renderPagamentoComBoleto(), tipoPagamentoSelecionado === 'cartao' && this.renderPagamentoComCartao());
    }
  }]);
  return DadosPagamento;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
var mapStateToProps = function mapStateToProps(state) {
  return {
    usuario: state.auth.usuario,
    carrinho: state.carrinho.carrinho,
    cliente: state.cliente.cliente,
    form: state.checkout.form,
    tipoPagamentoSelecionado: state.checkout.tipoPagamentoSelecionado,
    sessionId: state.checkout.senderId,
    senderHash: state.checkout.senderHash,
    freteSelecionado: state.carrinho.freteSelecionado
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_12__["default"])(DadosPagamento));

/***/ })

})
//# sourceMappingURL=checkout.js.8cdb551c13105cc9c849.hot-update.js.map