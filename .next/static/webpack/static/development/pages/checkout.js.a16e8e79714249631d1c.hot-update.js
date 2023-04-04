webpackHotUpdate("static\\development\\pages\\checkout.js",{

/***/ "./redux/actions/authActions.js":
/*!**************************************!*\
  !*** ./redux/actions/authActions.js ***!
  \**************************************/
/*! exports provided: reauthenticate, getUser, autenticar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reauthenticate", function() { return reauthenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autenticar", function() { return autenticar; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config.js */ "./config.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/cookie */ "./utils/cookie.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./errorHandling */ "./redux/actions/errorHandling.js");
/* modulo 40 - loja virtual - criando helper para inicialização*/

/* modulo 44 - Criando actions e reduces para integração 1/2*/





/* modulo 47 - integrando o componente de avaliações 2/2 */
//const getHeaders = token => ({ headers: { "Authorization": `Ecommerce ${token}` } });


/* modulo 49  - Criando as funções e error handlign para os dados do cliente 1/2*/




var reauthenticate = function reauthenticate(token) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["AUTENTICAR_TOKEN"],
    payload: token
  };
};
var getUser = function getUser(_ref) {
  var token = _ref.token;
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["url"], "/api/usuarios"), Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getHeaders"])(token)).then(function (response) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["USER"],
        payload: response.data.usuario
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  };
};

/*Criando as funções e error handlign para os dados do cliente 1/2*/

var autenticar = function autenticar(_ref2) {
  var email = _ref2.email,
    password = _ref2.password;
  var goTo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : fase;
  var cb = arguments.length > 2 ? arguments[2] : undefined;
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["url"], "/api/usuarios/login"), {
      email: email,
      password: password
    }).then(function (response) {
      Object(_utils_cookie__WEBPACK_IMPORTED_MODULE_4__["setCookie"])('token', response.data.usuario.token);
      if (goTo) next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(goTo);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["AUTENTICAR_TOKEN"],
        payload: response.data
      });
      //dispatch(fetchCliente(response.data.usuario._id,response.data.usuario.token))  
    })["catch"](function (e) {
      return cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_7__["default"])(e));
    });
  };
};
/* harmony default export */ __webpack_exports__["default"] = ({
  reauthenticate: reauthenticate,
  getUser: getUser,
  postUser: postUser
});

/***/ }),

/***/ "./redux/actions/errorHandling.js":
/*!****************************************!*\
  !*** ./redux/actions/errorHandling.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);


/*Criando as funções e error handlign para os dados do cliente 1/2*/
var errorHandling = function errorHandling(error) {
  console.log(error, error.response.data);
  if (!error.response || !error.data) {
    return {
      status: 500,
      message: "Ocorreu um erro no servidor. Tente novamente."
    };
  }
  if (error.response.data.status === 401) {
    return {
      status: 401,
      message: "Você não tem autorização para acessar esses dados."
    };
  }
  var _errors = error.response.data.errors || error.response.data.error;
  if (_errors && typeof _errors === "string") return {
    status: 400,
    message: _erros
  };
  var msg = 'Erro: ';
  if (!_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(_errors)) {
    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_errors).forEach(function (erro, index) {
      msg += "".concat(erro, " ").concat(_errors[erro].message || _errors[erro], "\n");
    });
  } else {
    msg += "Preenchar corretamente ".concat(_errors.length > 1 ? "os campos " : "o campo ", " de:");
    _errors.forEach(function (item, index) {
      var field = item.field[item.field.length - 1];
      msg += " ".concat(field, " ").concat(index === _errors.length - 1 ? "." : ",");
    });
  }
  return {
    status: 400,
    message: msg
  };
};
/* harmony default export */ __webpack_exports__["default"] = (errorHandling);

/***/ })

})
//# sourceMappingURL=checkout.js.a16e8e79714249631d1c.hot-update.js.map