webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _authReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authReducers */ "./redux/reducers/authReducers.js");
/* harmony import */ var _categoriaReducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categoriaReducers */ "./redux/reducers/categoriaReducers.js");
/* harmony import */ var _lojaReducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lojaReducers */ "./redux/reducers/lojaReducers.js");
/* harmony import */ var _produtoReducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./produtoReducers */ "./redux/reducers/produtoReducers.js");
/* harmony import */ var _carrinhoReducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carrinhoReducers */ "./redux/reducers/carrinhoReducers.js");
/* harmony import */ var _clienteReducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clienteReducers */ "./redux/reducers/clienteReducers.js");
/* harmony import */ var _checkoutReducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkoutReducers */ "./redux/reducers/checkoutReducers.js");
/* harmony import */ var _pedidoReducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pedidoReducers */ "./redux/reducers/pedidoReducers.js");
/* modulo 39 - loja virtual -  desenvolvimento a configuração base do redux  */



/* modulo 40 - loja virtual - criando helper para inicialização*/


/* modulo 44 - Criando actions e reduces para integração 1/2*/



/* modulo 44 - Criando actions e reduces para integração 2/2*/



/* modulo 48 -  criando as actions e reducers necessários (2/2) */


/*modulo 49 - Criando as funções e error handlign para os dados do cliente 2/2*/


/*modulo 49 - integração checkout - desenvolvendo o container dos dados do cliente */


/*Módulo 51 -  menu -  criando actionse reducers ...*/


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _authReducers__WEBPACK_IMPORTED_MODULE_1__["default"],
  categoria: _categoriaReducers__WEBPACK_IMPORTED_MODULE_2__["default"],
  loja: _lojaReducers__WEBPACK_IMPORTED_MODULE_3__["default"],
  produto: _produtoReducers__WEBPACK_IMPORTED_MODULE_4__["default"],
  carrinho: _carrinhoReducers__WEBPACK_IMPORTED_MODULE_5__["default"],
  cliente: _clienteReducers__WEBPACK_IMPORTED_MODULE_6__["default"],
  checkout: _checkoutReducers__WEBPACK_IMPORTED_MODULE_7__["default"]
}));

/***/ }),

/***/ "./redux/reducers/pedidoReducers.js":
/*!******************************************!*\
  !*** ./redux/reducers/pedidoReducers.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./redux/types.js");

/*Módulo 51 -  menu -  criando actionse reducers ...*/

var initialState = {
  pedidos: null,
  pedido: null
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PEDIDOS"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        pedidos: action.payload.pedidos
      });
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PEDIDO"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        pedido: action.payload.pedido,
        pedidoRegistro: action.payload.registro
      });
    case _types__WEBPACK_IMPORTED_MODULE_1__["CLEAN_PEDIDO"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        pedidos: null,
        pedidoRegistro: null
      });
    case _types__WEBPACK_IMPORTED_MODULE_1__["CANCELAR_PEDIDO"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        pedido: state.pedido ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          cancelado: true
        }) : null
      });
    default:
      return state;
  }
  ;
});

/***/ })

})
//# sourceMappingURL=_app.js.e50c6765733f433d324f.hot-update.js.map