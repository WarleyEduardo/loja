webpackHotUpdate("static\\development\\pages\\_app.js",{

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
        pedidoRegistros: action.payload.registros
      });
    case _types__WEBPACK_IMPORTED_MODULE_1__["CLEAN_PEDIDO"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        pedido: null,
        pedidoRegistros: null
      });
    case _types__WEBPACK_IMPORTED_MODULE_1__["CANCELAR_PEDIDO"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        pedido: state.pedido ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.pedido, {
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
//# sourceMappingURL=_app.js.ae30f68a0a6daed837e3.hot-update.js.map