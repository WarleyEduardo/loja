webpackHotUpdate("static\\development\\pages\\area-cliente.js",{

/***/ "./redux/actions/pedidoActions.js":
/*!****************************************!*\
  !*** ./redux/actions/pedidoActions.js ***!
  \****************************************/
/*! exports provided: fetchPedidos, fetchPedidosData, fetchPedido, cancelarPedido, cleanPedido, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPedidos", function() { return fetchPedidos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPedidosData", function() { return fetchPedidosData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPedido", function() { return fetchPedido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelarPedido", function() { return cancelarPedido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanPedido", function() { return cleanPedido; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errorHandling */ "./redux/actions/errorHandling.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");
/*Módulo 51 -  menu -  criando actionse reducers ...*/





var fetchPedidos = function fetchPedidos(_ref) {
  var offset = _ref.offset,
    limit = _ref.limit,
    token = _ref.token;
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["url"], "/api/pedidos?loja=").concat(_config__WEBPACK_IMPORTED_MODULE_2__["loja"], "&offset=").concat(offset, "&limit=").concat(limit), Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getHeaders"])(token)).then(function (response) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PEDIDOS"],
        payload: response.data
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  };
};
var fetchPedidosData = function fetchPedidosData(_ref2) {
  var offset = _ref2.offset,
    limit = _ref2.limit,
    token = _ref2.token,
    dtInicial = _ref2.dtInicial,
    dtFinal = _ref2.dtFinal;
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["url"], "/api/pedidos?loja=").concat(_config__WEBPACK_IMPORTED_MODULE_2__["loja"], "&offset=").concat(offset, "&limit=").concat(limit, "\n\t\t\t\t&dtInicial=").concat(dtInicial, "&dtFinal=").concat(dtFinal), Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getHeaders"])(token)).then(function (response) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PEDIDOS"],
        payload: response.data
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  };
};
var fetchPedido = function fetchPedido(_ref3) {
  var id = _ref3.id,
    token = _ref3.token;
  return function (dispatch) {
    console.log('meu id', id);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["url"], "/api/pedidos/").concat(id, "?loja=").concat(_config__WEBPACK_IMPORTED_MODULE_2__["loja"]), Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getHeaders"])(token)).then(function (response) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PEDIDO"],
        payload: response.data
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  };
};
var cancelarPedido = function cancelarPedido(_ref4) {
  var id = _ref4.id,
    token = _ref4.token,
    cb = _ref4.cb;
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["url"], "/api/pedidos/").concat(id, "?loja=").concat(_config__WEBPACK_IMPORTED_MODULE_2__["loja"]), Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getHeaders"])(token)).then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["CANCELAR_PEDIDO"],
        payload: response.data
      });
      cb(null);
    })["catch"](function (e) {
      return cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_3__["default"])(e));
    });
  };
};
var cleanPedido = function cleanPedido() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["CLEAN_PEDIDO"]
  };
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchPedido: fetchPedido,
  fetchPedidos: fetchPedidos,
  fetchPedidosData: fetchPedidosData,
  cancelarPedido: cancelarPedido,
  cleanPedido: cleanPedido
});

/***/ })

})
//# sourceMappingURL=area-cliente.js.10bd928130dfe0c09e6e.hot-update.js.map