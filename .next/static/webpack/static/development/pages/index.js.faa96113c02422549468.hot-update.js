webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./utils/fetch.js":
/*!************************!*\
  !*** ./utils/fetch.js ***!
  \************************/
/*! exports provided: fetchData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchData", function() { return fetchData; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);

/* modulo 40 - loja virtual - criando helper para cookie*/

var fetchData = function fetchData(action, ctx) {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(action()).then(function (response) {
    return ctx.store.dispatch(response);
  })["catch"](function (e) {
    return console.log(e);
  });
};

/***/ })

})
//# sourceMappingURL=index.js.faa96113c02422549468.hot-update.js.map