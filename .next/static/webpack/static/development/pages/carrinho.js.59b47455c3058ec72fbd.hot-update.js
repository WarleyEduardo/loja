webpackHotUpdate("static\\development\\pages\\carrinho.js",{

/***/ "./redux/actions/errorHandling.js":
/*!****************************************!*\
  !*** ./redux/actions/errorHandling.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);


/* modulo 49 - Criando as funções e error handlign para os dados do cliente 1/2*/

/*modulo 49 - Criando as funções e error handlign para os dados do cliente 2/2*/
var errorHandling = function errorHandling(error) {
  console.log(error, error.response ? error.response.data : null);
  if (!error.response || !error.response.data) {
    return {
      status: 500,
      message: "Ocorreu um erro no servidor. Tente novamente."
    };
  }
  if (error.response.data.status === 401) {
    return {
      status: 401,
      message: 'Você não tem autorização para acessar esses dados.'
    };
  }
  var _errors = error.response.data.errors || error.response.data.error;
  if (_errors && typeof _errors === "string") return {
    status: 400,
    message: _errors
  };
  var msg = 'Erro: ';
  if (!_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(_errors)) {
    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_errors).forEach(function (erro, index) {
      /*modulo 49 - submit dados do cliente - fazendo a integreção e ativando dados do cliente (2/2) */

      msg += "".concat(erro, " ").concat(_errors[erro].message || _errors[erro], "\n");
      //msg += `${erro} ${_errors[erro].message || (_errors[erro].properties ? _errors[erro].properties.message : '') || _errors[erro]}\n`;
    });
  } else {
    msg += "Preenchar corretamente ".concat(_errors.length > 1 ? "os campos " : "o campo ", " de:");
    _errors.forEach(function (item, index) {
      var field = item.field[item.field.length - 1];
      msg += " ".concat(field, " ").concat(index === _errors.length - 1 ? "." : ",");
    });
  }
  return {
    status: 400,
    message: msg
  };
};
/* harmony default export */ __webpack_exports__["default"] = (errorHandling);

/***/ })

})
//# sourceMappingURL=carrinho.js.59b47455c3058ec72fbd.hot-update.js.map