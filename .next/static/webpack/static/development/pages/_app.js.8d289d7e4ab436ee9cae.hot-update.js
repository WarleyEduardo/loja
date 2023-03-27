webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/reducers/carrinhoReducers.js":
/*!********************************************!*\
  !*** ./redux/reducers/carrinhoReducers.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./redux/types.js");

/* modulo 48 -  criando as actions e reducers necessários (2/2) */

var initialState = {
  carrinho: null
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["SET_CARRINHO"]:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          carrinho: action.carrinho
        });
      }
    case _types__WEBPACK_IMPORTED_MODULE_1__["CLEAN_CARRINHO"]:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          carrinho: null,
          freteSelecionado: null,
          fretes: null,
          cep: null
        });
      }
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTO_CARRINHO"]:
      if (!action.payload.produto) return state;
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        carrinho: state.carrinho ? state.carrinho.map(function (item, index) {
          return action.idxCarrinho === index ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
            produto: action.payload.produto
          }) : item;
        }) : []
      });
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_VARIACAO_CARRINHO"]:
      if (!action.payload.variacao) return state;
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        carrinho: state.carrinho ? state.carrinho.map(function (item, index) {
          return action.idxCarrinho === index ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
            variacao: action.payload.variacao
          }) : item;
        }) : []
      });
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_VALOR_ENTREGA"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        fretes: action.payload.resultados,
        freteSelecionado: action.payload.resultados[0],
        cep: action.cep
      });
    case _types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_QTD_CART"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        carrinho: state.carrinho ? state.carrinho.map(function (item, index) {
          return action.idxCarrinho == index ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
            quantidade: Number(item.quantidade) + Number(action.change)
          }) : item;
        }) : []
      });
    case _types__WEBPACK_IMPORTED_MODULE_1__["REMOVE_PRODUTO_CART"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        carrinho: state.carrinho.reduce(function (all, item, index) {
          return index !== action.idxCarrinho ? all.concat([item]) : all;
        }, [])
      });
    case _types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_FRETE_CART"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        freteSelecionado: action.freteSelecionado
      });
    case _types__WEBPACK_IMPORTED_MODULE_1__["CLEAN_FRETES"]:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          freteSelecionado: null,
          fretes: null,
          cep: null
        });
      }
    default:
      return state;
  }
});

/***/ })

})
//# sourceMappingURL=_app.js.8d289d7e4ab436ee9cae.hot-update.js.map