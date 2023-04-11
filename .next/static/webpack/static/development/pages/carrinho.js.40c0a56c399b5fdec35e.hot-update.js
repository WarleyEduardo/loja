webpackHotUpdate("static\\development\\pages\\carrinho.js",{

/***/ "./utils/format.js":
/*!*************************!*\
  !*** ./utils/format.js ***!
  \*************************/
/*! exports provided: numberPattern, formatCEP, formatCPF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberPattern", function() { return numberPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCEP", function() { return formatCEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCPF", function() { return formatCPF; });
/*modulo 48 -  integrando a seçao de frete 1/2  */
var numberPattern = /\d+/g;
var formatCEP = function formatCEP(value) {
  var auxCep = (value || "").match(numberPattern);
  var _cep = (auxCep || []).join('');
  return _cep.length > 5 ? _cep.slice(0, 5) + '-' + _cep.slice(5, 8) : _cep;
};
var formatCPF = function formatCPF(value) {
  var auxCPF = (value || "").match(numberPattern);
  var _CPF = (auxCPF || []).join('');
  if (_CPF.length > 9) return _CPF.slice(0, 3) + '.' + _CPF.slice(3, 6) + '.' + _CPF.slice(6, 9) + '-' + _CPF.slice(9, 11);
  if (_CPF.length > 6) return _CPF.slice(0, 3) + '.' + _CPF.slice(3, 6) + '.' + _CPF.slice(6, 9);
  if (_CPF.length > 3) return _CPF.slice(0, 3) + '.' + _CPF.slice(3, 6);
};

/***/ })

})
//# sourceMappingURL=carrinho.js.40c0a56c399b5fdec35e.hot-update.js.map