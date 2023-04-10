webpackHotUpdate("static\\development\\pages\\carrinho.js",{

/***/ "./redux/actions/clienteActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/clienteActions.js ***!
  \*****************************************/
/*! exports provided: fetchCliente, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCliente", function() { return fetchCliente; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config.js */ "./config.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");
/*modulo 49 - Criando as funções e error handlign para os dados do cliente 2/2*/




var fetchCliente = function fetchCliente(id, token) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["url"], "/api/clientes/").concat(id, "?loja=").concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["loja"]), Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getHeaders"])(token)).then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CLIENTE"],
        payload: response.data
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  };
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchCliente: fetchCliente
});

/***/ })

})
//# sourceMappingURL=carrinho.js.c8c43d3f83ae476c05f8.hot-update.js.map