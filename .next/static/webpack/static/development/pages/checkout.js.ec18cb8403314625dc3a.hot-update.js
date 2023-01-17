webpackHotUpdate("static\\development\\pages\\checkout.js",{

/***/ "./containers/Checkout/DadosEntrega.js":
/*!*********************************************!*\
  !*** ./containers/Checkout/DadosEntrega.js ***!
  \*********************************************/
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
/* harmony import */ var _components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Inputs/FormSimples */ "./components/Inputs/FormSimples.js");








var _jsxFileName = "D:\\javaScript\\lojavirtual\\lojavirtual\\containers\\Checkout\\DadosEntrega.js";
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/* modulo 42 - pagina de Checkout - criando o componente de dados de entrega 1/2  */



var DadosClienteContainer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DadosClienteContainer, _Component);
  var _super = _createSuper(DadosClienteContainer);
  function DadosClienteContainer() {
    var _this;
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DadosClienteContainer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      dadosEntregaIgualDadosCobranca: true,
      local: '',
      numero: '',
      bairro: '',
      complemento: '',
      cidade: '',
      estado: '',
      CEP: '',
      dadosCobranca: {
        local: '',
        numero: '',
        bairro: '',
        complemento: '',
        cidade: '',
        estado: '',
        CEP: ''
      }
    });
    return _this;
  }
  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DadosClienteContainer, [{
    key: "renderDadosDeEntrega",
    value: function renderDadosDeEntrega() {
      var _this2 = this;
      var _this$state = this.state,
        dadosEntregaIgualDadosCobranca = _this$state.dadosEntregaIgualDadosCobranca,
        local = _this$state.local,
        numero = _this$state.numero,
        bairro = _this$state.bairro,
        complemento = _this$state.complemento,
        cidade = _this$state.cidade,
        estado = _this$state.estado,
        CEP = _this$state.CEP;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex-1 flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: CEP,
        name: "CEP",
        placeholder: "12345-789",
        label: "CEP",
        onChange: function onChange(e) {
          return _this2.onChange('CEP', e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 6
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex-1 flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex-1 flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: local,
        name: "local",
        placeholder: "Rua , Avenida",
        label: "Endere\xE7o (Rua, Avenida)...",
        onChange: function onChange(e) {
          return _this2.onChange('local', e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 7
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex-1 flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: numero,
        name: "numero",
        placeholder: "999",
        label: "N\xFAmero",
        onChange: function onChange(e) {
          return _this2.onChange('numero', e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 7
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex-1 flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: bairro,
        name: "bairro",
        placeholder: "Bairro",
        label: "Bairro",
        onChange: function onChange(e) {
          return _this2.onChange('bairro', e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 7
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex-1 flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: complemento,
        name: "complemento",
        placeholder: "Complemento",
        label: "Complemento",
        onChange: function onChange(e) {
          return _this2.onChange('complemento', e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 7
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex-1 flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: bairro,
        name: "bairro",
        placeholder: "Bairro",
        label: "Bairro",
        onChange: function onChange(e) {
          return _this2.onChange('bairro', e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 7
        }
      }))));
    }
  }, {
    key: "renderDadosUsuario",
    value: function renderDadosUsuario() {
      var _this3 = this;
      var _this$state2 = this.state,
        nome = _this$state2.nome,
        CPF = _this$state2.CPF,
        dataDeNascimento = _this$state2.dataDeNascimento,
        telefone = _this$state2.telefone;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex-1 flex vertical",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: nome,
        name: "nome",
        placeholder: "Nome",
        label: "Nome",
        onChange: function onChange(e) {
          return _this3.onChange('nome', e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 6
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: CPF,
        name: "CPF",
        placeholder: "CPF",
        label: "CPF",
        onChange: function onChange(e) {
          return _this3.onChange('CPF', e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 6
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex-1 flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: dataDeNascimento,
        name: "dataDeNascimento",
        placeholder: "DD/MM/YYYY",
        label: "Data de Nascimento",
        onChange: function onChange(e) {
          return _this3.onChange('dataDeNascimento', e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 7
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: telefone,
        name: "telefone",
        placeholder: "(34) 1234-5678",
        label: "Telefone/Celular",
        onChange: function onChange(e) {
          return _this3.onChange('telefone', e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 7
        }
      }))));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 6
        }
      }, "DADOS DE ENTREGA")), this.renderDadosDeEntrega(), this.renderDadosDeCobranca());
    }
  }]);
  return DadosClienteContainer;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (DadosClienteContainer);

/***/ })

})
//# sourceMappingURL=checkout.js.ec18cb8403314625dc3a.hot-update.js.map