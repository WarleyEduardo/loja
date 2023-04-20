webpackHotUpdate("static\\development\\pages\\checkout.js",{

/***/ "./containers/Checkout/SubmitDadosCliente.js":
/*!***************************************************!*\
  !*** ./containers/Checkout/SubmitDadosCliente.js ***!
  \***************************************************/
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
/* harmony import */ var _components_Alert_Geral__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Alert/Geral */ "./components/Alert/Geral.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _utils_validade__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/validade */ "./utils/validade.js");








var _jsxFileName = "D:\\javaScript\\lojavirtual\\lojavirtual\\containers\\Checkout\\SubmitDadosCliente.js";
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/* modulo 42 - pagina de Checkout - criando o componente de enviar os dados do cliente e entrega */




/* Modulo 49 - submit dados do cliente - fazendo a integração e ativando validações (1/2) */

/*modulo 49 - submit dados do cliente - fazendo a integreção e ativando dados do cliente (2/2) */




var SubmitDadosCliente = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SubmitDadosCliente, _Component);
  var _super = _createSuper(SubmitDadosCliente);
  function SubmitDadosCliente() {
    var _this;
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SubmitDadosCliente);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      aviso: null
    });
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "callback", function (error) {
      if (!error) {
        _this.props.permitir();
        _this.setState({
          aviso: null
        });
      } else {
        _this.setState({
          aviso: {
            status: false,
            message: error.message
          }
        });
      }
    });
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "validate", function () {
      var _this$props$form = _this.props.form,
        email = _this$props$form.email,
        senha = _this$props$form.senha,
        nome = _this$props$form.nome,
        cpf = _this$props$form.cpf,
        dataDeNascimento = _this$props$form.dataDeNascimento,
        telefone = _this$props$form.telefone,
        local = _this$props$form.local,
        numero = _this$props$form.numero,
        bairro = _this$props$form.bairro,
        cidade = _this$props$form.cidade,
        estado = _this$props$form.estado,
        CEP = _this$props$form.CEP;
      var usuario = _this.props.usuario;
      var erros = {};
      var temErro = false;
      if (!usuario && !email) temErro = true;
      if (!usuario && !senha) temErro = true;
      if (!nome) {
        erros.nome = 'Nome não informado';
        temErro = true;
      }
      ;
      if (!cpf || cpf.length === 14 && !Object(_utils_validade__WEBPACK_IMPORTED_MODULE_12__["validateCPF"])(cpf)) {
        erros.cpf = "cpf inválido";
        temErro = true;
      }
      ;
      if (!dataDeNascimento || dataDeNascimento.length !== 10) {
        erros.dataDeNascimento = 'data de nascimento inválida';
        temErro = true;
      }
      ;
      if (!telefone || telefone.length < 11) {
        erros.telefone = 'telefone inválido';
        temErro = true;
      }
      ;
      if (!local) {
        erros.local = 'local inválido';
        temErro = true;
      }
      ;
      if (!numero) {
        erros.numero = "número inválido";
        temErro = true;
      }
      ;
      if (!bairro) {
        erros.bairro = "bairro inválido";
        temErro = true;
      }
      ;
      if (!cidade) {
        erros.cidade = 'cidade inválida';
        temErro = true;
      }
      ;
      if (!estado) {
        erros.estado = 'estado inválido';
        temErro = true;
      }
      ;
      if (!CEP || CEP.length !== 9) {
        erros.CEP = "cep inválido";
        temErro = true;
      }
      ;

      // console.log('erros:' , erros)

      return !temErro;
    });
    return _this;
  }
  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SubmitDadosCliente, [{
    key: "handleSubmit",
    value: function handleSubmit() {
      if (!this.validate()) return null;
      var _this$props = this.props,
        token = _this$props.token,
        form = _this$props.form,
        cliente = _this$props.cliente;
      if (!token) this.props.newCliente(form, this.callback);else this.props.updateCliente(form, cliente._id, token, this.callback);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Alert_Geral__WEBPACK_IMPORTED_MODULE_9__["default"], {
        aviso: this.state.aviso,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex flex-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "btn btn-success btn-cta",
        onClick: function onClick() {
          return _this2.handleSubmit();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 6
        }
      }, "CONTINUAR PEDIDO")));
    }
  }]);
  return SubmitDadosCliente;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
var mapStateToProps = function mapStateToProps(state) {
  return {
    usuario: state.auth.usuario,
    token: state.auth.token,
    cliente: state.cliente.cliente,
    form: state.checkout.form
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_11__["default"])(SubmitDadosCliente));

/***/ })

})
//# sourceMappingURL=checkout.js.221fbcbe3559bc3f3ffa.hot-update.js.map