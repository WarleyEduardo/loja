webpackHotUpdate("static\\development\\pages\\area-cliente\\dados.js",{

/***/ "./containers/AreaDoCliente/Dados/FormularioDados.js":
/*!***********************************************************!*\
  !*** ./containers/AreaDoCliente/Dados/FormularioDados.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/Inputs/FormSimples */ "./components/Inputs/FormSimples.js");
/* harmony import */ var _components_Texto_Dados__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/Texto/Dados */ "./components/Texto/Dados.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../utils */ "./utils/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _components_Alert_Geral__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/Alert/Geral */ "./components/Alert/Geral.js");
/* harmony import */ var _utils_validade__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../utils/validade */ "./utils/validade.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../utils/format */ "./utils/format.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_18__);









var _jsxFileName = "D:\\javaScript\\lojavirtual\\lojavirtual\\containers\\AreaDoCliente\\Dados\\FormularioDados.js";
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/* modulo 43 - Area do cliente -  dados do cliente e senha - 
  criando  a pagina, componentes e todos o estilo final 1/3
*/






/* Meus dados - realizando a integração 1/2 */

/* Meus dados - realizando a integração 2/2 */







var FormularioDados = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(FormularioDados, _Component);
  var _super = _createSuper(FormularioDados);
  function FormularioDados() {
    var _this;
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, FormularioDados);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      nome: '',
      cpf: '',
      telefone: '',
      dataDeNascimento: '',
      local: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
      CEP: '',
      aviso: null,
      erros: {}
    });
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "updateState", function (cliente) {
      _this.setState({
        nome: cliente.nome,
        cpf: cliente.cpf,
        telefone: cliente.telefones[0],
        dataDeNascimento: moment__WEBPACK_IMPORTED_MODULE_18___default()(cliente.dataDeNascimento).format('DD/MM/YYYY'),
        local: cliente.endereco.local,
        numero: cliente.endereco.numero,
        complemento: cliente.endereco.complemento || '',
        bairro: cliente.endereco.bairro,
        cidade: cliente.endereco.cidade,
        estado: cliente.endereco.estado,
        CEP: cliente.endereco.CEP
      });
    });
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChange", function (field, valor) {
      return _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, field, valor), function () {
        return _this.validate();
      });
    });
    return _this;
  }
  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(FormularioDados, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.cliente) this.updateState(this.props.cliente);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.cliente && this.props.cliente || prevProps.cliente && this.props.cliente && prevProps.cliente.updatedAt !== this.props.cliente.updatedAt) this.updateState(this.props.cliente);
    }
  }, {
    key: "validate",
    value: function validate() {
      var _this$state = this.state,
        nome = _this$state.nome,
        cpf = _this$state.cpf,
        telefone = _this$state.telefone,
        dataDeNascimento = _this$state.dataDeNascimento,
        local = _this$state.local,
        numero = _this$state.numero,
        bairro = _this$state.bairro,
        cidade = _this$state.cidade,
        estado = _this$state.estado,
        CEP = _this$state.CEP;
      var erros = {};
      if (!nome) erros.nome = 'Informe aqui o nome';
      if (!cpf || cpf.length !== 14) erros.cpf = 'Informe aqui o cpf';
      if (cpf && cpf.length === 14 && !Object(_utils_validade__WEBPACK_IMPORTED_MODULE_16__["validateCPF"])(cpf)) erros.cpf = 'Informe aqui o cpf corretamente';
      if (!telefone || telefone.length < 11) erros.telefone = 'Informe aqui o telefone';
      if (!dataDeNascimento || dataDeNascimento.length !== 10) erros.dataDeNascimento = 'Informe aqui a data de nascimento';
      if (!local) erros.local = 'Informe aqui o endereço';
      if (!numero) erros.numero = 'Informe aqui o numero';
      if (!bairro) erros.bairro = 'Informe aqui o bairro';
      if (!cidade) erros.cidade = 'Informe aqui a cidade';
      if (!estado) erros.estado = 'Informe aqui o estado';
      if (!CEP || CEP.length !== 9) erros.CEP = 'Informe aqui o CEP';
      this.setState({
        erros: erros,
        aviso: null
      });
      return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(erros).length === 0;
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit() {
      var _this2 = this;
      var _this$props = this.props,
        cliente = _this$props.cliente,
        token = _this$props.token;
      if (!cliente || !token || !this.validate()) return null;
      this.props.updateCliente(this.state, cliente._id, token, function (error) {
        if (error) _this2.setState({
          aviso: {
            status: false,
            message: error.message
          }
        });else alert('Dados atualizados com sucesso!');
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$state2 = this.state,
        nome = _this$state2.nome,
        cpf = _this$state2.cpf,
        telefone = _this$state2.telefone,
        dataDeNascimento = _this$state2.dataDeNascimento,
        local = _this$state2.local,
        numero = _this$state2.numero,
        complemento = _this$state2.complemento,
        bairro = _this$state2.bairro,
        cidade = _this$state2.cidade,
        estado = _this$state2.estado,
        CEP = _this$state2.CEP,
        erros = _this$state2.erros;
      var usuario = this.props.usuario;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-4 conteudo-area-cliente",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 5
        }
      }, "MEUS DADOS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-dados",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Texto_Dados__WEBPACK_IMPORTED_MODULE_11__["default"], {
        chave: "E-mail",
        valor: usuario ? usuario.email : '',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 7
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Nome",
        erro: erros.nome,
        onChange: function onChange(e) {
          return _this3.onChange('nome', e.target.value);
        },
        value: nome,
        name: "nome",
        type: "text",
        placeholder: "Nome",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "CPF",
        erro: erros.cpf,
        onChange: function onChange(e) {
          return _this3.onChange('cpf', Object(_utils_format__WEBPACK_IMPORTED_MODULE_17__["formatCPF"])(e.target.value));
        },
        value: cpf,
        name: "cpf",
        type: "text",
        placeholder: "CPF",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        erro: erros.telefone,
        onChange: function onChange(e) {
          return _this3.onChange('telefone', Object(_utils_format__WEBPACK_IMPORTED_MODULE_17__["formatTelefone"])(e.target.value));
        },
        label: "Telefone",
        value: telefone,
        name: "telefone",
        type: "text",
        placeholder: "Telefone",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 8
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        erro: erros.dataDeNascimento,
        onChange: function onChange(e) {
          return _this3.onChange('dataDeNascimento', e.target.value);
        },
        value: dataDeNascimento,
        name: "dataDeNascimento",
        type: "text",
        placeholder: "DD/MM/YYYY",
        label: "Data de nascimento",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 8
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Local",
        erro: erros.local,
        onChange: function onChange(e) {
          return _this3.onChange('local', e.target.value);
        },
        value: local,
        name: "local",
        placeholder: "Endere\xE7o",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 8
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "N\xFAmero",
        erro: erros.numero,
        onChange: function onChange(e) {
          return _this3.onChange('numero', Object(_utils_format__WEBPACK_IMPORTED_MODULE_17__["formatNumber"])(e.target.value));
        },
        value: numero,
        name: "numero",
        placeholder: "N\xFAmero",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 8
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Complemento",
        onChange: function onChange(e) {
          return _this3.onChange('complemento', e.target.value);
        },
        value: complemento,
        name: "complemento",
        placeholder: "Complemento",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 8
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Bairro",
        erro: erros.bairro,
        onChange: function onChange(e) {
          return _this3.onChange('bairro', e.target.value);
        },
        value: bairro,
        name: "bairro",
        placeholder: "Bairro",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 8
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        erro: erros.cidade,
        onChange: function onChange(e) {
          return _this3.onChange('cidade', e.target.value);
        },
        value: cidade,
        name: "cidade",
        placeholder: "Cidade",
        label: "Cidade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 8
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 8
        }
      }, "Estado"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
        name: "estado",
        value: estado,
        onChange: function onChange(e) {
          return _this3.onChange('estado', e.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 8
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 9
        }
      }, "Selecione seu Estado"), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(_utils__WEBPACK_IMPORTED_MODULE_12__["ESTADOS"]).map(function (abbr) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          key: abbr,
          value: abbr,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 10
          }
        }, _utils__WEBPACK_IMPORTED_MODULE_12__["ESTADOS"][abbr]);
      })), erros.estado && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("small", {
        className: "erro",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 25
        }
      }, erros.estado))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        erro: erros.cep,
        onChange: function onChange(e) {
          return _this3.onChange('cep', Object(_utils_format__WEBPACK_IMPORTED_MODULE_17__["formatCEP"])(e.target.value));
        },
        value: CEP,
        name: "CEP",
        placeholder: "12345-789",
        label: "CEP",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 6
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Alert_Geral__WEBPACK_IMPORTED_MODULE_15__["default"], {
        aviso: this.state.aviso,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex flex-start",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: function onClick() {
          return _this3.handleSubmit();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 6
        }
      }, "SALVAR")));
    }
  }]);
  return FormularioDados;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);
var mapStateToProps = function mapStateToProps(state) {
  return {
    token: state.auth.token,
    usuario: state.auth.usuario,
    cliente: state.cliente.cliente
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_14__["default"])(FormularioDados));

/***/ })

})
//# sourceMappingURL=dados.js.e90e99e6d89f0ad73a08.hot-update.js.map