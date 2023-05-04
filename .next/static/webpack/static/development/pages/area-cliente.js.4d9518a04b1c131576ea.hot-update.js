webpackHotUpdate("static\\development\\pages\\area-cliente.js",{

/***/ "./utils/ConsultaCep.js":
/*!******************************!*\
  !*** ./utils/ConsultaCep.js ***!
  \******************************/
/*! exports provided: consultaCep, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consultaCep", function() { return consultaCep; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var consultaCep = function consultaCep(cep) {
  var endereco = {};
  /*
  
    const endereco 
  const endereco = {
  
  	"local": "",
  	"bairro": "",
  	"cidade": "",
  	"estado": ""
  }
  
  */

  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://viacep.com.br/ws/".concat(cep.replace('-', ''), "/json")).then(function (response) {
    console.log('retorno', response);
    var teste = JSON.parse(response);
    console.log('pp', teste);

    //endereco.local = response.data["logradouro"],
    //endereco.bairro = response.data["bairro"],
    //endereco.cidade = response.data["localidade"],
    //endereco.estado =  response.data["uf"]
  })["catch"](function (e) {
    return console.log(e);
  });
  return endereco;
};
/* harmony default export */ __webpack_exports__["default"] = (consultaCep);

/***/ })

})
//# sourceMappingURL=area-cliente.js.4d9518a04b1c131576ea.hot-update.js.map