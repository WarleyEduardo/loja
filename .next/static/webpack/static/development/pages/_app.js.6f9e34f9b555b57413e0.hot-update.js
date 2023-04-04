webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/reducers/authReducers.js":
/*!****************************************!*\
  !*** ./redux/reducers/authReducers.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./redux/types.js");

/* modulo 40 - loja virtual - criando helper para inicialização*/

var initialState = {
  token: null,
  usuario: null
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["USER"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        usuario: action.payload,
        token: action.payload ? action.payload.token : null
      });
    case _types__WEBPACK_IMPORTED_MODULE_1__["AUTENTICAR_TOKEN"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        token: action.payload
      });
    default:
      return state;
  }
});

/***/ })

})
//# sourceMappingURL=_app.js.6f9e34f9b555b57413e0.hot-update.js.map