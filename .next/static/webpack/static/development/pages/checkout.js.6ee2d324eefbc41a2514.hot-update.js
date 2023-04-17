webpackHotUpdate("static\\development\\pages\\checkout.js",{

/***/ "./redux/actions/clienteActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/clienteActions.js ***!
  \*****************************************/
/*! exports provided: getRawData, newCliente, updateCliente, fetchCliente, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRawData", function() { return getRawData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newCliente", function() { return newCliente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCliente", function() { return updateCliente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCliente", function() { return fetchCliente; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config.js */ "./config.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");
/* harmony import */ var _authActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authActions */ "./redux/actions/authActions.js");
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errorHandling */ "./redux/actions/errorHandling.js");
/*modulo 49 - Criando as funções e error handlign para os dados do cliente 2/2*/





/*modulo 49 - Dados de entrega - criando funções e preparando a base */



var getRawData = function getRawData(data) {
  var _data = data.split('/');
  var ano = _data[2];
  var _mes = _data[1] - 1;
  var mes = _mes < 10 ? "0" + _mes : _mes;
  var _dia = Number(_data[0]);
  var dia = _dia < 10 ? "0" + _dia : _dia;
  console.log("".concat(ano, "-").concat(mes, "-").concat(dia));
  return "".concat(ano, "-").concat(mes, "-").concat(dia);
};
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
      },
      dataDeNascimento: getRawData(form.dataDeNascimento)
    }).then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CLIENTE"],
        payload: response.data
      });
      dispatch(Object(_authActions__WEBPACK_IMPORTED_MODULE_4__["autenticar"])({
        email: form.email,
        password: form.senha
      }));
      cb(null);
    })["catch"](function (e) {
      return cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_5__["default"])(e));
    });
  };
};
var updateCliente = function updateCliente(form, id, token, cb) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("".concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["url"], "/api/clientes/").concat(id, "?loja=").concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["loja"]), {
      nome: form.nome,
      cpf: form.cpf,
      telefones: [form.telefone],
      endereco: {
        local: form.local,
        numero: form.numero,
        complemento: form.complemento,
        bairro: form.bairro,
        cidade: form.cidade,
        estado: form.estado,
        CEP: form.CEP
      },
      dataDeNascimento: getRawData(form.dataDeNascimento)
    }, Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getHeaders"])(token)).then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CLIENTE"],
        payload: response.data
      });
      cb(null);
    })["catch"](function (e) {
      return cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_5__["default"])(e));
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
  fetchCliente: fetchCliente,
  newCliente: newCliente,
  updateCliente: updateCliente
});

/***/ })

})
//# sourceMappingURL=checkout.js.6ee2d324eefbc41a2514.hot-update.js.map