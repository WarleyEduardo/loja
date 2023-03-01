webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./redux/actions/categoriaActions.js":
/*!*******************************************!*\
  !*** ./redux/actions/categoriaActions.js ***!
  \*******************************************/
/*! exports provided: fetchCategorias, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCategorias", function() { return fetchCategorias; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.js */ "./config.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* modulo 44 - Criando actions e reduces para integração 1/2*/




var fetchCategorias = function fetchCategorias() {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config_js__WEBPACK_IMPORTED_MODULE_1__["url"], "/api/categorias/disponiveis?loja=").concat(_config_js__WEBPACK_IMPORTED_MODULE_1__["loja"])).then(function (response) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_CATEGORIAS"],
        payload: response.data
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  };
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchCategorias: fetchCategorias
});

/***/ })

})
//# sourceMappingURL=index.js.5f6a0612308cf8daf93f.hot-update.js.map