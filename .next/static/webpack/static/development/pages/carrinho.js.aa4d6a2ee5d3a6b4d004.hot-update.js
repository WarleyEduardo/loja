webpackHotUpdate("static\\development\\pages\\carrinho.js",{

/***/ "./utils/format.js":
/*!*************************!*\
  !*** ./utils/format.js ***!
  \*************************/
/*! exports provided: numberPattern, formatCEP, formatCPF, formatDataDeNascimento, formatTelefone, formatNumber, formatCartao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberPattern", function() { return numberPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCEP", function() { return formatCEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCPF", function() { return formatCPF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDataDeNascimento", function() { return formatDataDeNascimento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTelefone", function() { return formatTelefone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNumber", function() { return formatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCartao", function() { return formatCartao; });
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
  return _CPF;
};
var formatDataDeNascimento = function formatDataDeNascimento(value) {
  var auxData = (value | "").match(numberPattern);
  var _data = (auxData || []).join('');
  if (_data.length > 4) return _data.slice(0, 2) + '/' + _data.slice(2, 4) + '/' + _data.slice(4, 8);
  if (_data.length > 2) return _data.slice(0, 2) + '/' + _data.slice(2, 4);
  return _data;
};
var formatTelefone = function formatTelefone(value) {
  var auxTelefone = (value | '').match(numberPattern);
  var _telefone = (auxTelefone || []).join('');
  return _telefone.length > 2 ? _telefone.slice(0, 2) + ' ' + _telefone.slice(2, 12) : _telefone;
};
var formatNumber = function formatNumber(value, limit) {
  var auxN = (value || "").match(numberPattern);
  var _n = (auxN || []).join('');
  return limit ? _n.slice(0, limit) : _n;
};
var formatCartao = function formatCartao(value) {
  var auxCartao = (value || '').match(numberPattern);
  var _Cartao = (auxCartao || []).join('');
  if (_Cartao.length > 9) return _Cartao.slice(0, 4) + '.' + _Cartao.slice(4, 8) + '.' + _Cartao.slice(8, 12) + '-' + _Cartao.slice(12, 16);
  if (_Cartao.length > 6) return _Cartao.slice(0, 4) + '.' + _Cartao.slice(4, 8) + '.' + _Cartao.slice(8, 12);
  if (_Cartao.length > 4) return _Cartao.slice(0, 4) + '.' + _Cartao.slice(4, 8);
  return _Cartao;
};

/***/ })

})
//# sourceMappingURL=carrinho.js.aa4d6a2ee5d3a6b4d004.hot-update.js.map