webpackHotUpdate("static\\development\\pages\\categoria\\[categoria].js",{

/***/ "./redux/actions/checkoutActions.js":
/*!******************************************!*\
  !*** ./redux/actions/checkoutActions.js ***!
  \******************************************/
/*! exports provided: setForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setForm", function() { return setForm; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./redux/types.js");

/*modulo 49 - integração checkout - desenvolvendo o container dos dados do cliente */


var setForm = function setForm(payload, prefix) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_FORM"],
      payload: payload,
      prefix: prefix
    });
    return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve();
  };
};
/* harmony default export */ __webpack_exports__["default"] = ({
  setForm: setForm
});

/***/ }),

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _authActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authActions */ "./redux/actions/authActions.js");
/* harmony import */ var _categoriaActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categoriaActions */ "./redux/actions/categoriaActions.js");
/* harmony import */ var _lojaActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lojaActions */ "./redux/actions/lojaActions.js");
/* harmony import */ var _produtoActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./produtoActions */ "./redux/actions/produtoActions.js");
/* harmony import */ var _carrinhoActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carrinhoActions */ "./redux/actions/carrinhoActions.js");
/* harmony import */ var _clienteActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clienteActions */ "./redux/actions/clienteActions.js");
/* harmony import */ var _checkoutActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkoutActions */ "./redux/actions/checkoutActions.js");

/* modulo 40 - loja virtual - criando helper para inicialização*/


/* modulo 44 - Criando actions e reduces para integração 1/2*/



/* modulo 44 - Criando actions e reduces para integração 2/2*/


/* modulo 48 -  criando as actions e reducers necessários (1/2) */


/*modulo 49 - Criando as funções e error handlign para os dados do cliente 2/2*/



/*modulo 49 - Criando as funções e error handlign para os dados do cliente 2/2*/

/* harmony default export */ __webpack_exports__["default"] = (Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _authActions__WEBPACK_IMPORTED_MODULE_1__["default"], _categoriaActions__WEBPACK_IMPORTED_MODULE_2__["default"], _lojaActions__WEBPACK_IMPORTED_MODULE_3__["default"], _produtoActions__WEBPACK_IMPORTED_MODULE_4__["default"], _carrinhoActions__WEBPACK_IMPORTED_MODULE_5__["default"], _clienteActions__WEBPACK_IMPORTED_MODULE_6__["default"], _checkoutActions__WEBPACK_IMPORTED_MODULE_7__["default"]));

/***/ })

})
//# sourceMappingURL=[categoria].js.c12a455103e85c83c9e0.hot-update.js.map