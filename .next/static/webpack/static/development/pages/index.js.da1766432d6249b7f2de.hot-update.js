webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./redux/actions/lojaActions.js":
/*!**************************************!*\
  !*** ./redux/actions/lojaActions.js ***!
  \**************************************/
/*! exports provided: fetchLoja, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLoja", function() { return fetchLoja; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config.js */ "./config.js");
/* modulo 44 - Criando actions e reduces para integração 1/2*/




var fetchLoja = function fetchLoja() {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["url"], "/api/lojas/").concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["loja"], "?lojas").concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["loja"])).then(function (response) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_LOJA"],
        payload: response.data
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  };
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchLoja: fetchLoja
});

/***/ })

})
//# sourceMappingURL=index.js.da1766432d6249b7f2de.hot-update.js.map