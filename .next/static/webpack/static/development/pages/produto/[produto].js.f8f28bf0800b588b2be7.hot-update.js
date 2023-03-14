webpackHotUpdate("static\\development\\pages\\produto\\[produto].js",{

/***/ "./containers/Produto/Hero.js":
/*!************************************!*\
  !*** ./containers/Produto/Hero.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../config.js */ "./config.js");








var _jsxFileName = "D:\\javaScript\\lojavirtual\\lojavirtual\\containers\\Produto\\Hero.js";
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/* modulo 42 - paginas do produto -  criando base da pagina e inicio do Hero  */

/* modulo 42 - paginas do produto -  criando componente do hero do zero */



/*modulo 47 -  integrando o componente de Hero (1/2) */





/*modulo 47 -  integrando o componente de Hero (2/2) */


var Hero = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Hero, _Component);
  var _super = _createSuper(Hero);
  function Hero(props) {
    var _this;
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Hero);
    _this = _super.call(this);
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "setVariacao", function (produto, variacao) {
      _this.setState({
        variacao: variacao._id,
        variacaoCompleta: variacao
      });
      if (variacao.fotos && variacao.fotos.length > 0) {
        _this.setState({
          fotos: variacao.fotos,
          foto: variacao.fotos[0]
        });
      } else {
        _this.setState({
          fotos: produto.fotos,
          foto: produto.fotos[0]
        });
      }
    });
    var _produto = props.produto,
      variacoes = props.variacoes;
    _this.state = {
      foto: _produto ? _produto.fotos[0] || null : null,
      fotos: _produto ? _produto.fotos || null : null,
      qtd: 1,
      variacao: variacoes && variacoes.length >= 1 ? variacoes[0]._id : null,
      variacaoCompleta: variacoes && variacoes.length >= 1 ? variacoes[0] : null
    };
    return _this;
  }
  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Hero, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.produto && this.props.produto) {
        var fotos = this.props.produto.fotos;
        this.setState({
          foto: fotos[0],
          fotos: fotos
        });
      }
      if (!prevProps.variacoes && this.props.variacoes) {
        var variacao = this.props.variacoes[0];
        if (!variacao) return null;
        this.setState({
          variacao: variacao._id,
          variacaoCompleta: variacao
        });
      }
    }
  }, {
    key: "renderPhotos",
    value: function renderPhotos() {
      var _this2 = this;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "fotos flex-2 flex vertical",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "foto-principal flex-6 flex flex-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: _config_js__WEBPACK_IMPORTED_MODULE_12__["baseImg"] + this.state.foto,
        width: "95%",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 6
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "mini-fotos flex-1 flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 5
        }
      }, this.state.fotos.map(function (foto, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: index,
          className: "mini-foto flex-1 flex flex-center",
          onClick: function onClick() {
            return _this2.setState({
              foto: foto
            });
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 7
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: _config_js__WEBPACK_IMPORTED_MODULE_12__["baseImg"] + foto,
          width: "90%",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 8
          }
        }));
      })));
    }

    /* modulo 47  -  integrando o componente de hero 2/2 */

    //addCart() {
    //	window.alert('adicionado ao carrinho');
    //	}
  }, {
    key: "addCart",
    value: function (_addCart) {
      function addCart() {
        return _addCart.apply(this, arguments);
      }
      addCart.toString = function () {
        return _addCart.toString();
      };
      return addCart;
    }(function () {
      var _this$state = this.state,
        variacao = _this$state.variacao,
        qtd = _this$state.qtd,
        variacaoCompleta = _this$state.variacaoCompleta;
      var produto = this.produto.produto;
      addCart({
        produto: produto._id,
        variacao: variacao,
        quantidade: qtd,
        precoUnitario: variacaoCompleta ? variacaoCompleta.promocao || variacaoCompleta.preco : produto.promocao || produto.preco
      }, true);
    })
  }, {
    key: "renderVariacoes",
    value: function renderVariacoes() {
      var _this3 = this;
      var _this$props = this.props,
        variacoes = _this$props.variacoes,
        produto = _this$props.produto;
      if (!produto || !variacoes || variacoes.length === 0) return null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 6
        }
      }, "Selecione uma op\xE7ao:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "variacoes flex wrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 5
        }
      }, variacoes.map(function (variacao, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "variacao".concat(variacao._id === _this3.state.variacao ? ' variacao-active' : '', "\n\t\t\t\t\t\t  flex-1 flex flex-center wrap-4"),
          key: variacao._id,
          onClick: function onClick() {
            return _this3.setVariacao(produto, variacao);
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 7
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "variacao-item",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 8
          }
        }, variacao.nome));
      })));
    }
  }, {
    key: "renderDetalhes",
    value: function renderDetalhes() {
      var _this4 = this;
      var produto = this.props.produto;
      var variacaoCompleta = this.state.variacaoCompleta;
      if (!produto) return null;
      var temPromo = produto.promocao && produto.preco !== produto.promocao;
      var temPromoVariacao = variacaoCompleta.promocao && variacaoCompleta.preco !== variacaoCompleta.promocao;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex-2 produto-detalhes",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "titulo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 6
        }
      }, produto.titulo)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "categoria",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 6
        }
      }, "Categoria:\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/categoria/".concat(produto.categoria.nome, "?id=").concat(produto.categoria._id),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "categoria-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 8
        }
      }, produto.categoria.nome)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 5
        }
      }), variacaoCompleta ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "precos",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "preco-original ".concat(temPromoVariacao ? 'preco-por' : 'preco-por produto-sem-promocao'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 7
        }
      }, Object(_utils__WEBPACK_IMPORTED_MODULE_11__["formatMoney"])(variacaoCompleta.preco)), variacaoCompleta.promocao && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "preco-promocao",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 37
        }
      }, Object(_utils__WEBPACK_IMPORTED_MODULE_11__["formatMoney"])(variacaoCompleta.promocao)), produto.parcelado && produto.parcelado > 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "preco-parcelado",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 8
        }
      }, "ou ", produto.parcelado.toString(), " x de", Object(_utils__WEBPACK_IMPORTED_MODULE_11__["formatMoney"])((variacaoCompleta.promocao || variacaoCompleta.preco) / produto.parcelado), " sem juros")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "precos",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "preco-original ".concat(temPromo ? 'preco-por' : '', "  "),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 7
        }
      }, Object(_utils__WEBPACK_IMPORTED_MODULE_11__["formatMoney"])(produto.preco)), produto.promocao && produto.promocao > 0 && produto.promocao !== produto.preco && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "preco-promocao",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 90
        }
      }, Object(_utils__WEBPACK_IMPORTED_MODULE_11__["formatMoney"])(produto.promocao)), produto.parcelado && produto.parcelado > 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "preco-parcelado",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 8
        }
      }, "ou ", produto.parcelado.toString(), " x de", Object(_utils__WEBPACK_IMPORTED_MODULE_11__["formatMoney"])((produto.promocao || produto.preco) / produto.parcelado), " sem juros")), this.renderVariacoes(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "opcoes",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "opcao flex vertical",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "opcao-tab",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 7
        }
      }, "Quantidade"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        className: "opcao-input",
        type: "number",
        name: "quantidade",
        value: this.state.qtd,
        onChange: function onChange(e) {
          return Number(e.target.value) >= 1 && _this4.setState({
            qtd: e.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 7
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "comprar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "btn btn-success btn-cta",
        onClick: function onClick() {
          return _this4.addCart();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 6
        }
      }, "COMPRAR")));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "Produto-Hero flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 4
        }
      }, this.renderPhotos(), this.renderDetalhes());
    }
  }]);
  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
var mapStateToProps = function mapStateToProps(state) {
  return {
    produto: state.produto.produto,
    variacoes: state.produto.variacoes
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(Hero));

/***/ })

})
//# sourceMappingURL=[produto].js.f8f28bf0800b588b2be7.hot-update.js.map