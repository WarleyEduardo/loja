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
/* harmony import */ var _components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Inputs/FormSimples */ "./components/Inputs/FormSimples.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/format */ "./utils/format.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);









var _jsxFileName = "D:\\javaScript\\lojavirtual\\lojavirtual\\containers\\Checkout\\DadosEntrega.js";
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/* modulo 42 - pagina de Checkout - criando o componente de dados de entrega 1/2  */





/*modulo 49 - Dados de entrega - fazendo alterações no formulário de entrega */





/* Modulo 49 - colocando validação  nos campos e finalizando o componente */

/*modulo 49 -  extra -  adicionando função para preenchimento

automático dos dados de endereço a partir do cep.
*/

var DadosClienteContainer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DadosClienteContainer, _Component);
  var _super = _createSuper(DadosClienteContainer);
  function DadosClienteContainer() {
    var _this;
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DadosClienteContainer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      erros: {
        dadosCobranca: {}
      }
    });
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChange", function (field, value, prefix) {
      return _this.props.setForm(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, field, value), prefix).then(function () {
        return _this.validate();
      });
    });
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChangeCEP", function (field, value, prefix) {
      _this.props.setForm(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, field, value), prefix).then(function () {
        _this.validate();
        if (value.length === 9) {
          axios__WEBPACK_IMPORTED_MODULE_15___default.a.get("https://viacep.com.br/ws/".concat(value.replace('-', ''), "/json")).then(function (response) {
            _this.props.setForm({
              "local": response.data["logradouro"],
              "bairro": response.data["bairro"],
              "cidade": response.data["localidade"],
              "estado": response.data["uf"]
            }, prefix).then(function () {
              return _this.validate();
            });
          })["catch"](function (e) {
            return console.log(e);
          });
        }
      });
    });
    return _this;
  }
  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DadosClienteContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchCliente();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.cliente && this.props.cliente) this.fetchCliente();
    }
  }, {
    key: "fetchCliente",
    value: function fetchCliente() {
      var cliente = this.props.cliente;
      this.props.setForm({
        dadosEntregaIgualDadosCobranca: true,
        local: cliente ? cliente.endereco.local : '',
        numero: cliente ? cliente.endereco.numero : '',
        bairro: cliente ? cliente.endereco.bairro : '',
        complemento: cliente ? cliente.endereco.complemento : '',
        cidade: cliente ? cliente.endereco.cidade : '',
        estado: cliente ? cliente.endereco.estado : '',
        CEP: cliente ? cliente.endereco.CEP : '',
        dadosCobranca: {
          local: cliente ? cliente.endereco.local : '',
          numero: cliente ? cliente.endereco.numero : '',
          bairro: cliente ? cliente.endereco.bairro : '',
          complemento: cliente ? cliente.endereco.complemento : '',
          cidade: cliente ? cliente.endereco.cidade : '',
          estado: cliente ? cliente.endereco.estado : '',
          CEP: cliente ? cliente.endereco.CEP : ''
        }
      });
    }
  }, {
    key: "validate",
    value: function validate() {
      var _this$props$form = this.props.form,
        dadosEntregaIgualDadosCobranca = _this$props$form.dadosEntregaIgualDadosCobranca,
        local = _this$props$form.local,
        numero = _this$props$form.numero,
        bairro = _this$props$form.bairro,
        cidade = _this$props$form.cidade,
        estado = _this$props$form.estado,
        CEP = _this$props$form.CEP,
        dadosCobranca = _this$props$form.dadosCobranca;
      var erros = {
        dadosCobranca: {}
      };
      if (!local) erros.local = 'Preenchar aqui com o seu endereço';
      if (!numero) erros.numero = 'Preenchar aqui com o seu número';
      if (!bairro) erros.bairro = 'Preenchar aqui com o seu bairro';
      if (!cidade) erros.cidade = 'Preenchar aqui com o a sua cidade';
      if (!estado) erros.estado = 'Selecione o seu estado';
      if (!CEP || !CEP.length == 9) erros.CEP = 'Digite aqui o seu CEP';
      if (!dadosEntregaIgualDadosCobranca) {
        if (!dadosCobranca.local) erros.dadosCobranca.local = 'Preenchar aqui com o seu endereço';
        if (!dadosCobranca.numero) erros.dadosCobranca.numero = 'Preenchar aqui com o seu número';
        if (!dadosCobranca.bairro) erros.dadosCobranca.bairro = 'Preenchar aqui com o seu bairro';
        if (!dadosCobranca.cidade) erros.dadosCobranca.cidade = 'Preenchar aqui com o a sua cidade';
        if (!dadosCobranca.estado) erros.dadosCobranca.estado = 'Selecione o seu estado';
        if (!dadosCobranca.CEP || !dadosCobranca.CEP.length == 9) erros.dadosCobranca.CEP = 'Digite aqui o seu CEP';
      }
      this.setState({
        erros: erros
      });
      return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(erros).length === 1 & _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(erros.dadosCobranca).length === 0;
    }
  }, {
    key: "renderDadosDeEntrega",
    value:
    /*
    onChangeCobranca = (field, e) => {
    	const { state } = this;
    	state.dadosCobranca[field] = e.target.value;
    	this.setState(state);
    };
    */

    function renderDadosDeEntrega() {
      var _this2 = this;
      if (!this.props.form) return null;
      var _this$props$form2 = this.props.form,
        dadosEntregaIgualDadosCobranca = _this$props$form2.dadosEntregaIgualDadosCobranca,
        local = _this$props$form2.local,
        numero = _this$props$form2.numero,
        bairro = _this$props$form2.bairro,
        complemento = _this$props$form2.complemento,
        cidade = _this$props$form2.cidade,
        estado = _this$props$form2.estado,
        CEP = _this$props$form2.CEP;
      var erros = this.state.erros;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1 flex vertical",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 6
        }
      }, "DADOS DE ENTREGA ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: CEP || '',
        erro: erros.CEP,
        name: "CEP",
        placeholder: "12345-789",
        label: "CEP",
        onChange: function onChange(e) {
          return _this2.onChangeCEP('CEP', Object(_utils_format__WEBPACK_IMPORTED_MODULE_14__["formatCEP"])(e.target.value));
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 6
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1 flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1 flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: local || '',
        erro: erros.local,
        name: "local",
        placeholder: "Rua , Avenida",
        label: "Endere\xE7o (Rua, Avenida)...",
        onChange: function onChange(e) {
          return _this2.onChange('local', e.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 7
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1 flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: numero || '',
        name: "numero",
        erro: erros.numero,
        placeholder: "999",
        label: "N\xFAmero",
        onChange: function onChange(e) {
          return _this2.onChange('numero', Object(_utils_format__WEBPACK_IMPORTED_MODULE_14__["formatNumber"])(e.target.value));
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 7
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1 flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1 flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: bairro || '',
        erro: erros.bairro,
        name: "bairro",
        placeholder: "Bairro",
        label: "Bairro",
        onChange: function onChange(e) {
          return _this2.onChange('bairro', e.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 7
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1 flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: complemento || '',
        erro: erros.complemento,
        name: "complemento",
        placeholder: "Complemento",
        label: "Complemento",
        onChange: function onChange(e) {
          return _this2.onChange('complemento', e.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 7
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1 flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1 flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: cidade || '',
        erro: erros.cidade,
        name: "cidade",
        placeholder: "Cidade",
        label: "Cidade",
        onChange: function onChange(e) {
          return _this2.onChange('cidade', e.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 7
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1 flex vertical form-input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 7
        }
      }, "Estado"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
        value: estado || '',
        onChange: function onChange(e) {
          return _this2.onChange('estado', e.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 8
        }
      }, "Selecione..."), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(_utils__WEBPACK_IMPORTED_MODULE_11__["ESTADOS"]).map(function (abbr) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          key: abbr,
          value: abbr,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 9
          }
        }, _utils__WEBPACK_IMPORTED_MODULE_11__["ESTADOS"][abbr]);
      })), erros.estado && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("smal", {
        className: "erro",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 24
        }
      }, erros.estado))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        checked: dadosEntregaIgualDadosCobranca,
        type: "checkbox",
        onChange: function onChange() {
          return _this2.props.setForm({
            dadosEntregaIgualDadosCobranca: !dadosEntregaIgualDadosCobranca
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 6
        }
      }, "\xA0Os dados de entrega s\xE3o iguais aos dados de cobran\xE7a")));
    }
  }, {
    key: "renderDadosDeCobranca",
    value: function renderDadosDeCobranca() {
      var _this3 = this;
      if (!this.props.form || !this.props.form.dadosCobranca) return null;
      var _this$props$form$dado = this.props.form.dadosCobranca,
        local = _this$props$form$dado.local,
        numero = _this$props$form$dado.numero,
        bairro = _this$props$form$dado.bairro,
        complemento = _this$props$form$dado.complemento,
        cidade = _this$props$form$dado.cidade,
        estado = _this$props$form$dado.estado,
        CEP = _this$props$form$dado.CEP;
      var erros = this.state.erros;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1 flex vertical",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 6
        }
      }, "DADOS DE COBRAN\xC7A ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: CEP || '',
        erro: erros.dadosCobranca.CEP,
        name: "CEP",
        placeholder: "12345-789",
        label: "CEP",
        onChange: function onChange(e) {
          return _this3.onChangeCEP('CEP', Object(_utils_format__WEBPACK_IMPORTED_MODULE_14__["formatCEP"])(e.target.value), 'dadosCobranca');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 6
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1 flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1 flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: local || '',
        erro: erros.dadosCobranca.local,
        name: "local",
        placeholder: "Rua , Avenida",
        label: "Endere\xE7o (Rua, Avenida)...",
        onChange: function onChange(e) {
          return _this3.onChange('local', e.target.value, 'dadosCobranca');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 7
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1 flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: numero || '',
        erro: erros.dadosCobranca.numero,
        name: "numero",
        placeholder: "999",
        label: "N\xFAmero",
        onChange: function onChange(e) {
          return _this3.onChange('numero', Object(_utils_format__WEBPACK_IMPORTED_MODULE_14__["formatNumber"])(e.target.value), 'dadosCobranca');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 7
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1 flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1 flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: bairro || '',
        erro: erros.dadosCobranca.bairro,
        name: "bairro",
        placeholder: "Bairro",
        label: "Bairro",
        onChange: function onChange(e) {
          return _this3.onChange('bairro', e.target.value, 'dadosCobranca');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 7
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1 flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: complemento || '',
        erro: erros.dadosCobranca.complemento,
        name: "complemento",
        placeholder: "Complemento",
        label: "Complemento",
        onChange: function onChange(e) {
          return _this3.onChange('complemento', e.target.value, 'dadosCobranca');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 7
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1 flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1 flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: cidade || '',
        erro: erros.dadosCobranca.cidade,
        name: "cidade",
        placeholder: "Cidade",
        label: "Cidade",
        onChange: function onChange(e) {
          return _this3.onChange('cidade', e.target.value, 'dadosCobranca');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 7
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1 flex vertical form-input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 7
        }
      }, "Estado"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
        value: estado,
        onChange: function onChange(e) {
          return _this3.onChange('estado', e.target.value, 'dadosCobranca');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 8
        }
      }, "Selecione..."), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(_utils__WEBPACK_IMPORTED_MODULE_11__["ESTADOS"]).map(function (abbr) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          key: abbr,
          value: abbr,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 320,
            columnNumber: 9
          }
        }, _utils__WEBPACK_IMPORTED_MODULE_11__["ESTADOS"][abbr]);
      })), erros.dadosCobranca.estado && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("smal", {
        className: "erro",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 38
        }
      }, erros.dadosCobranca.estado))));
    }

    /*
    renderDadosUsuario() {
    	const { nome, CPF, dataDeNascimento, telefone } = this.state;
    
    	return (
    		<div className='flex-1 flex vertical'>
    			<div className='flex-1'>
    				<FormSimples value={nome} name='nome' placeholder='Nome' label='Nome' onChange={(e) => this.onChange('nome', e)} />
    			</div>
    
    			<div className='flex-1'>
    				<FormSimples value={CPF} name='CPF' placeholder='CPF' label='CPF' onChange={(e) => this.onChange('CPF', e)} />
    			</div>
    
    			<div className='flex-1 flex horizontal'>
    				<div className='flex-1'>
    					<FormSimples
    						value={dataDeNascimento}
    						name='dataDeNascimento'
    						placeholder='DD/MM/YYYY'
    						label='Data de Nascimento'
    						onChange={(e) => this.onChange('dataDeNascimento', e)}
    					/>
    				</div>
    
    				<div className='flex-1'>
    					<FormSimples value={telefone} name='telefone' placeholder='(34) 1234-5678' label='Telefone/Celular' onChange={(e) => this.onChange('telefone', e)} />
    				</div>
    			</div>
    		</div>
    	);
    }
    */
  }, {
    key: "render",
    value: function render() {
      var dadosEntregaIgualDadosCobranca = this.props.form.dadosEntregaIgualDadosCobranca;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 4
        }
      }, this.renderDadosDeEntrega(), !dadosEntregaIgualDadosCobranca && this.renderDadosDeCobranca());
    }
  }]);
  return DadosClienteContainer;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);
var mapStateToProps = function mapStateToProps(state) {
  return {
    usuario: state.auth.usuario,
    cliente: state.cliente.cliente,
    form: state.checkout.form
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_13__["default"])(DadosClienteContainer));

/***/ })

})
//# sourceMappingURL=checkout.js.9246760cdea052ed386b.hot-update.js.map