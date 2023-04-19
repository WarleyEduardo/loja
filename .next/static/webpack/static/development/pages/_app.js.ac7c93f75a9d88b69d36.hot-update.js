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

/* módulo 49 -  Dados de pagamento - preparando a base, actions e  funções do pagseguro */


var initialState = {
  form: {
    dadosCobranca: {},
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
    case _types__WEBPACK_IMPORTED_MODULE_2__["CLEAN_FORM"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, initialState);
    case _types__WEBPACK_IMPORTED_MODULE_2__["SET_TIPO_PAGAMENTO"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        tipoPagamentoSelecionado: action.tipoPagamentoSelecionado
      });
    case _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_SESSION_ID"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        sessionId: action.payload.sessionId
      });
    case _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_SENDER_HASH"]:
      console.log(action.senderHash);
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        senderHash: action.senderHash
      });
    default:
      return state;
  }
});

/***/ })

})
//# sourceMappingURL=_app.js.ac7c93f75a9d88b69d36.hot-update.js.map