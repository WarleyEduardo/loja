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
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./errorHandling */ "./redux/actions/errorHandling.js");
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
        type: _types__WEBPACK_IMPORTED_MODULE_0__["AUTENTICAR"],
        payload: response.data
      });
      //dispatch(fetchCliente(response.data.usuario._id,response.data.usuario.token))  
    })["catch"](function (e) {
      return cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_6__["default"])(e));
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

/*Criando as funções e error handlign para os dados do cliente 2/2*/
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

/***/ }),

/***/ "./redux/types.js":
/*!************************!*\
  !*** ./redux/types.js ***!
  \************************/
/*! exports provided: REGISTER, AUTENTICAR_TOKEN, FETCH_CATEGORIAS, FETCH_LOJA, FETCH_PRODUTOS, FETCH_CATEGORIA, FETCH_PRODUTOS_CATEGORIA, USER, FETCH_PESQUISA, FETCH_PRODUTOS_PESQUISA, FETCH_PRODUTO, FETCH_PRODUTO_VARIACOES, FETCH_PRODUTO_AVALIACOES, NOVA_AVALIACAO, SET_CARRINHO, CLEAN_CARRINHO, FETCH_PRODUTO_CARRINHO, FETCH_VARIACAO_CARRINHO, FETCH_VALOR_ENTREGA, UPDATE_QTD_CART, REMOVE_PRODUTO_CART, CLEAN_FRETES, UPDATE_FRETE_CART, AUTENTICAR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTENTICAR_TOKEN", function() { return AUTENTICAR_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATEGORIAS", function() { return FETCH_CATEGORIAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_LOJA", function() { return FETCH_LOJA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTOS", function() { return FETCH_PRODUTOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATEGORIA", function() { return FETCH_CATEGORIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTOS_CATEGORIA", function() { return FETCH_PRODUTOS_CATEGORIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER", function() { return USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PESQUISA", function() { return FETCH_PESQUISA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTOS_PESQUISA", function() { return FETCH_PRODUTOS_PESQUISA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO", function() { return FETCH_PRODUTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO_VARIACOES", function() { return FETCH_PRODUTO_VARIACOES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO_AVALIACOES", function() { return FETCH_PRODUTO_AVALIACOES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOVA_AVALIACAO", function() { return NOVA_AVALIACAO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CARRINHO", function() { return SET_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_CARRINHO", function() { return CLEAN_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO_CARRINHO", function() { return FETCH_PRODUTO_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VARIACAO_CARRINHO", function() { return FETCH_VARIACAO_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VALOR_ENTREGA", function() { return FETCH_VALOR_ENTREGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_QTD_CART", function() { return UPDATE_QTD_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_PRODUTO_CART", function() { return REMOVE_PRODUTO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_FRETES", function() { return CLEAN_FRETES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FRETE_CART", function() { return UPDATE_FRETE_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTENTICAR", function() { return AUTENTICAR; });
/* modulo 40 - loja virtual - criando helper para inicialização*/

/* modulo 45 - Criando actions e reduces e atualizando os componentes das categorias*/

/*modulo 46 - adicionando actions e reducers e alterando os componentes para integração*/

/* modulo 47 -  integração -  detalhes do produto */

var REGISTER = 'REGISTER',
  AUTENTICAR_TOKEN = 'AUTENTICAR_TOKEN',
  FETCH_CATEGORIAS = 'FETCH_CATEGORIAS',
  FETCH_LOJA = 'FETCH_LOJA',
  FETCH_PRODUTOS = 'FETCH_PRODUTOS',
  FETCH_CATEGORIA = 'FETCH_CATEGORIA',
  FETCH_PRODUTOS_CATEGORIA = 'FETCH_PRODUTOS_CATEGORIA',
  USER = 'USER',
  FETCH_PESQUISA = 'FETCH_PESQUISA',
  FETCH_PRODUTOS_PESQUISA = 'FETCH_PRODUTOS_PESQUISA',
  FETCH_PRODUTO = 'FETCH_PRODUTO',
  FETCH_PRODUTO_VARIACOES = 'FETCH_PRODUTO_VARIACOES',
  FETCH_PRODUTO_AVALIACOES = 'FETCH_PRODUTO_AVALIACOES',
  NOVA_AVALIACAO = 'NOVA_AVALIACAO',
  SET_CARRINHO = 'SET_CARRINHO',
  CLEAN_CARRINHO = 'CLEAN_CARRINHO',
  FETCH_PRODUTO_CARRINHO = 'FETCH_PRODUTO_CARRINHO',
  FETCH_VARIACAO_CARRINHO = 'FETCH_VARIACAO_CARRINHO',
  FETCH_VALOR_ENTREGA = 'FETCH_VALOR_ENTREGA',
  UPDATE_QTD_CART = 'UPDATE_QTD_CART',
  REMOVE_PRODUTO_CART = 'REMOVE_PRODUTO_CART',
  CLEAN_FRETES = 'CLEAN_FRETES',
  UPDATE_FRETE_CART = 'UPDATE_FRETE_CART',
  AUTENTICAR = 'AUTENTICAR';

/***/ })

})
//# sourceMappingURL=checkout.js.d43924daf401b3756adb.hot-update.js.map