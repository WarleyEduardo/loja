webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./utils/callBaseData.js":
/*!*******************************!*\
  !*** ./utils/callBaseData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch */ "./utils/fetch.js");

/* modulo 40 - loja virtual - criando helper para cookie*/


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var calls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var ctx = arguments.length > 1 ? arguments[1] : undefined;
  console.log('entrou no base data');
  return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all([Object(_fetch__WEBPACK_IMPORTED_MODULE_2__["fetchData"])(_redux_actions__WEBPACK_IMPORTED_MODULE_1__["default"].fetchCategorias, ctx)
  //fetchData(actions.fetchLoja, ctx),
  //...calls.map((action) => fetchData(action, ctx))		
  ]);

  //console.log('passou aqui', calls);

  //return Promise(...calls.map((action) => action));	
});

/***/ })

})
//# sourceMappingURL=index.js.4b5f1de85f55bfa17ab8.hot-update.js.map