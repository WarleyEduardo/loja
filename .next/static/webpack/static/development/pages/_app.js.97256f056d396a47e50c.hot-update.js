webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/reducers/checkoutReducers.js":
/*!********************************************!*\
  !*** ./redux/reducers/checkoutReducers.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./redux/types.js");


/*modulo 49 - integração checkout - desenvolvendo o container dos dados do cliente */


var initialState = {
  form: {
    billing: {},
    tipoPagamentoSelecionado: "cartao_credito"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_2__["SET_FORM"]:
      var form = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.form);
      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(action.payload).forEach(function (item) {
        if (action.prefix) form[action.prefix][item] = action.payload[item];else form[item] = action.payload[item];
      });
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        form: form
      });
    default:
      return state;
  }
});

/***/ }),

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
/* modulo 39 - loja virtual -  desenvolvimento a configuração base do redux  */



/* modulo 40 - loja virtual - criando helper para inicialização*/


/* modulo 44 - Criando actions e reduces para integração 1/2*/



/* modulo 44 - Criando actions e reduces para integração 2/2*/



/* modulo 48 -  criando as actions e reducers necessários (2/2) */


/*modulo 49 - Criando as funções e error handlign para os dados do cliente 2/2*/


/*modulo 49 - integração checkout - desenvolvendo o container dos dados do cliente */

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _authReducers__WEBPACK_IMPORTED_MODULE_1__["default"],
  categoria: _categoriaReducers__WEBPACK_IMPORTED_MODULE_2__["default"],
  loja: _lojaReducers__WEBPACK_IMPORTED_MODULE_3__["default"],
  produto: _produtoReducers__WEBPACK_IMPORTED_MODULE_4__["default"],
  carrinho: _carrinhoReducers__WEBPACK_IMPORTED_MODULE_5__["default"],
  cliente: _clienteReducers__WEBPACK_IMPORTED_MODULE_6__["default"],
  checkout: _checkoutReducers__WEBPACK_IMPORTED_MODULE_7__["default"]
}));

/***/ })

})
//# sourceMappingURL=_app.js.97256f056d396a47e50c.hot-update.js.map