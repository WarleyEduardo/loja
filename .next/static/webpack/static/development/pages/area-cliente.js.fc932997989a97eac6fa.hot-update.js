webpackHotUpdate("static\\development\\pages\\area-cliente.js",{

/***/ "./containers/AreaDoCliente/Acesso/Cadastro.js":
/*!*****************************************************!*\
  !*** ./containers/AreaDoCliente/Acesso/Cadastro.js ***!
  \*****************************************************/
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils */ "./utils/index.js");
/* harmony import */ var _components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/Inputs/FormSimples */ "./components/Inputs/FormSimples.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _components_alert_Geral__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/alert/Geral */ "./components/alert/Geral.js");
/* harmony import */ var _utils_validade__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../utils/validade */ "./utils/validade.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../utils/format */ "./utils/format.js");
/* harmony import */ var _utils_ConsultaCep__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../utils/ConsultaCep */ "./utils/ConsultaCep.js");









var _jsxFileName = "D:\\javaScript\\lojavirtual\\lojavirtual\\containers\\AreaDoCliente\\Acesso\\Cadastro.js";
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/* modulo 43 - pagina de aceso a area do cliente -  
criando componentes de acesso login e cadastro 1/2 */





/*modulo 51 -  acesso - cadastro - realizando integração*/







var CadastroContainer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CadastroContainer, _Component);
  var _super = _createSuper(CadastroContainer);
  function CadastroContainer() {
    var _this;
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CadastroContainer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      email: '',
      senha: '',
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
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onchange", function (field, value) {
      return _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, field, value), function () {
        return _this.validate();
      });
    });
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onchangeCep", function (field, value) {
      if (value.length === 9) {
        var endereco = Object(_utils_ConsultaCep__WEBPACK_IMPORTED_MODULE_17__["consultaCep"])(value);
        console.log('teste', endereco);
        var local = endereco.local;
        console.log('l', local);

        //console.log(typeof endereco.local);

        //const endereco = JSON.parse(_endereco);

        //console.log('endereco', endereco);

        //console.log('meulocal', this.local);

        //this.setState({ local: 'oi' },
        //	() => { console.log('local', this.state.local); });

        /*
        		const endereco = consultaCep(value).then( () =>
        			this.setState(
        	{
        		local: endereco.local,
        		bairro: endereco.bairro,
        		cidade: endereco.cidade,
        		estado: endereco.estado,
        	},
        	() => this.validate()
           )
        
        );
        		*/
      }
      //this.setState({ [field]: value }, () => this.validate());
    });
    return _this;
  }
  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(CadastroContainer, [{
    key: "validate",
    value: function validate() {
      var _this$state = this.state,
        email = _this$state.email,
        senha = _this$state.senha,
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
      if (!email) erros.email = "Informe  o email";
      if (!senha) erros.senha = 'Informe a senha';
      if (!nome) erros.nome = 'Informe aqui o nome';
      if (!cpf || cpf.length !== 14) erros.cpf = 'Informe aqui o cpf';
      if (cpf && cpf.length === 14 && !Object(_utils_validade__WEBPACK_IMPORTED_MODULE_15__["validateCPF"])(cpf)) erros.cpf = 'Informe aqui o cpf corretamente';
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
      return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(erros) === 0;
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit() {
      var _this2 = this;
      if (!this.validate()) return;
      this.props.newCliente(this.state, function (error) {
        if (error) _this2.setState({
          aviso: {
            status: false,
            message: error.message
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$state2 = this.state,
        email = _this$state2.email,
        senha = _this$state2.senha,
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
        erros = _this$state2.erros,
        aviso = _this$state2.aviso;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "Cadastro-Container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        className: "text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 5
        }
      }, "Criar Conta"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-cadastro",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_11__["default"], {
        erro: erros.email,
        value: email,
        name: "email",
        type: "email",
        placeholder: "Email",
        onChange: function onChange(e) {
          return _this3.onchange('email', e.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_11__["default"], {
        erro: erros.senha,
        value: senha,
        name: "senha",
        type: "password",
        placeholder: "Senha",
        onChange: function onChange(e) {
          return _this3.onchange('senha', e.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_11__["default"], {
        erro: erros.nome,
        value: nome,
        name: "nome",
        type: "text",
        placeholder: "Nome",
        onChange: function onChange(e) {
          return _this3.onchange('nome', e.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_11__["default"], {
        erro: erros.cpf,
        value: cpf,
        name: "cpf",
        type: "text",
        placeholder: "CPF",
        onChange: function onChange(e) {
          return _this3.onchange('cpf', Object(_utils_format__WEBPACK_IMPORTED_MODULE_16__["formatCPF"])(e.target.value));
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_11__["default"], {
        erro: erros.telefone,
        label: "Telefone",
        value: telefone,
        name: "telefone",
        type: "text",
        placeholder: "Telefone",
        onchange: function onchange(e) {
          return _this3.onchange('telefone', Object(_utils_format__WEBPACK_IMPORTED_MODULE_16__["formatTelefone"])(e.target.value));
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 8
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_11__["default"], {
        erro: erros.dataDeNascimento,
        value: dataDeNascimento,
        name: "dataDeNascimento",
        type: "text",
        placeholder: "DD/MM/YYYY",
        label: "Data de nascimento",
        onChange: function onChange(e) {
          return _this3.onchange('dataDeNascimento', Object(_utils_format__WEBPACK_IMPORTED_MODULE_16__["formatDataDeNascimento"])(e.target.value));
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 8
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_11__["default"], {
        erro: erros.local,
        value: local,
        name: "local",
        placeholder: "Endere\xE7o",
        onChange: function onChange(e) {
          return _this3.onchange('local', e.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 8
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_11__["default"], {
        erro: erros.numero,
        value: numero,
        name: "numero",
        placeholder: "N\xFAmero",
        onChange: function onChange(e) {
          return _this3.onchange('numero', Object(_utils_format__WEBPACK_IMPORTED_MODULE_16__["formatNumber"])(e.target.value));
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 8
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_11__["default"], {
        value: complemento,
        name: "complemento",
        placeholder: "Complemento",
        onChange: function onChange(e) {
          return _this3.onchange('complemento', e.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 8
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_11__["default"], {
        erro: erros.bairro,
        value: bairro,
        name: "bairro",
        placeholder: "Bairro",
        onChange: function onChange(e) {
          return _this3.onchange('bairro', e.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 8
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_11__["default"], {
        erro: erros.cidade,
        value: cidade,
        name: "cidade",
        placeholder: "Cidade",
        label: "Cidade",
        onChange: function onChange(e) {
          return _this3.onchange('cidade', e.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 8
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 8
        }
      }, "Estado"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
        name: "estado",
        value: estado,
        onChange: function onChange(e) {
          return _this3.onchange('estado', e.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 8
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 9
        }
      }, "Selecione seu Estado"), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(_utils__WEBPACK_IMPORTED_MODULE_10__["ESTADOS"]).map(function (abbr) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          key: abbr,
          value: abbr,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 10
          }
        }, _utils__WEBPACK_IMPORTED_MODULE_10__["ESTADOS"][abbr]);
      })), erros.estado && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("small", {
        className: "erro",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 25
        }
      }, erros.estado))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_11__["default"], {
        erro: erros.CEP,
        value: CEP,
        name: "CEP",
        placeholder: "12345-789",
        label: "CEP",
        onChange: function onChange(e) {
          return _this3.onchangeCep('CEP', e.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_alert_Geral__WEBPACK_IMPORTED_MODULE_14__["default"], {
        aviso: aviso,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "flex flex-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: function onClick() {
          return _this3.handleSubmit();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 7
        }
      }, "CADASTRAR")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("hr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "link-acesso text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        onClick: this.props.changeAcesso,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 7
        }
      }, "J\xE1 tem conta? clique aqui para logar"))));
    }
  }]);
  return CadastroContainer;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(null, _redux_actions__WEBPACK_IMPORTED_MODULE_13__["default"])(CadastroContainer));

/***/ })

})
//# sourceMappingURL=area-cliente.js.fc932997989a97eac6fa.hot-update.js.map