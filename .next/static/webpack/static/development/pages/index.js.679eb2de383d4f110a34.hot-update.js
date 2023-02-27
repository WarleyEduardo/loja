webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./utils/callBaseData.js":
/*!*******************************!*\
  !*** ./utils/callBaseData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetch */ "./utils/fetch.js");


/* modulo 40 - loja virtual - criando helper para cookie*/


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var calls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var ctx = arguments.length > 1 ? arguments[1] : undefined;
  console.log('entrou no base data');
  return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all([Object(_fetch__WEBPACK_IMPORTED_MODULE_3__["fetchData"])(_redux_actions__WEBPACK_IMPORTED_MODULE_2__["default"].fetchCategorias, ctx), Object(_fetch__WEBPACK_IMPORTED_MODULE_3__["fetchData"])(_redux_actions__WEBPACK_IMPORTED_MODULE_2__["default"].fetchLoja, ctx), Object(_fetch__WEBPACK_IMPORTED_MODULE_3__["fetchData"])(_redux_actions__WEBPACK_IMPORTED_MODULE_2__["default"].fetchProdutosPaginaInicial, ctx)].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(calls.map(function (action) {
    return Object(_fetch__WEBPACK_IMPORTED_MODULE_3__["fetchData"])(action, ctx);
  }))));
});

/***/ })

})
//# sourceMappingURL=index.js.679eb2de383d4f110a34.hot-update.js.map