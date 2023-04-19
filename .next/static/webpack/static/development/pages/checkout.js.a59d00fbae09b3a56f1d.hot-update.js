webpackHotUpdate("static\\development\\pages\\checkout.js",{

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./config.js");

/*modulo 49 - integração checkout - desenvolvendo o container dos dados do cliente */



/* módulo 49 -  Dados de pagamento - preparando a base, actions e  funções do pagseguro */


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

/***/ })

})
//# sourceMappingURL=checkout.js.a59d00fbae09b3a56f1d.hot-update.js.map