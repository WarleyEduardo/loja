webpackHotUpdate("static\\development\\pages\\checkout.js",{

/***/ "./redux/actions/clienteActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/clienteActions.js ***!
  \*****************************************/
/*! exports provided: newCliente, fetchCliente, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newCliente", function() { return newCliente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCliente", function() { return fetchCliente; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config.js */ "./config.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");
/* harmony import */ var _authActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authActions */ "./redux/actions/authActions.js");
/*modulo 49 - Criando as funções e error handlign para os dados do cliente 2/2*/





/*modulo 49 - Dados de entrega - criando funções e preparando a base */


var newCliente = function newCliente(form, cb) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["url"], "/api/clientes?loja=").concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["loja"]), {
      nome: form.nome,
      paswword: form.senha,
      cpf: form.cpf,
      email: form.email,
      telefones: [form.telefone],
      endereco: {
        local: form.local,
        numero: form.numero,
        complemento: form.complemento,
        bairro: form.bairro,
        cidade: form.cidade,
        estado: form.estado,
        CEP: form.CEP
      }
    }).then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CLIENTE"],
        payload: response.data
      });
      dispatch(Object(_authActions__WEBPACK_IMPORTED_MODULE_4__["autenticar"])({
        email: form.email,
        password: form.senha
      }));
    })["catch"](function (e) {
      return console.log(e);
    });
  };
};
var fetchCliente = function fetchCliente(id, token) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["url"], "/api/clientes/").concat(id, "?loja=").concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["loja"]), Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getHeaders"])(token)).then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CLIENTE"],
        payload: response.data
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  };
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchCliente: fetchCliente
});

/***/ })

})
//# sourceMappingURL=checkout.js.87df3907fe8fe9161ae8.hot-update.js.map