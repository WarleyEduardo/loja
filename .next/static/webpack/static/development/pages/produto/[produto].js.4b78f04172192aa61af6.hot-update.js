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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../config */ "./config");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "D:\\javaScript\\lojavirtual\\lojavirtual\\containers\\Produto\\Hero.js";
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/* modulo 42 - paginas do produto -  criando base da pagina e inicio do Hero  */

/* modulo 42 - paginas do produto -  criando componente do hero do zero */



/*modulo 47 -  integrando o componente de Hero (1/2) */





/*modulo 47 -  integrando o componente de Hero (2/2) */


var Hero = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Hero, _Component);
  var _super = _createSuper(Hero);
  function Hero(props) {
    var _this;
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Hero);
    _this = _super.call(this);
    var produto = props.produto,
      variacoes = props.variacoes;
    _this.state = {
      foto: produto ? produto.foto[0] || null : null,
      fotos: produto ? produto.fotos || null : null,
      qtd: 1,
      variacao: variacoes && variacoes.length >= 1 ? variacoes[0]._id : null,
      variacaoCompleta: variacoes && variacoes.length >= 1 ? variacoes[0] : null
    };
    return _this;
  }
  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Hero, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      console.log('entrou aqui');
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 4
        }
      }, "fotos")
      /*
      <div className='fotos flex-2 flex vertical'>
      	<div className='foto-principal flex-6 flex flex-center'>
      		<img src={ baseImg  + this.state.foto} width="95%"/>
      	</div>
      			<div className='mini-fotos flex-1 flex'>
      		{
      			this.state.fotos.map((foto, index) => (
      				<div key={index} className="mini-foto flex-1 flex flex-center"
      				 onClick={()=> this.setState({foto})}>
      					<img src={baseImg + foto}  width="90%"/>
      				</div>
      			))
      		}
      			</div>
      		</div>
      */;
    }
  }, {
    key: "addCart",
    value: function addCart() {
      window.alert('adicionado ao carrinho');
    }
  }, {
    key: "renderVariacoes",
    value: function renderVariacoes() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 6
        }
      }, "Selecione uma op\xE7ao:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "variacoes flex wrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "variacao flex-1 flex flex-center wrap-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "variacao-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 7
        }
      }, "P")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "variacao flex-1 flex flex-center wrap-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "variacao-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 7
        }
      }, "M")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "variacao flex-1 flex flex-center wrap-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "variacao-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 7
        }
      }, "G"))));
    }
  }, {
    key: "renderDetalhes",
    value: function renderDetalhes() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 10
        }
      }, "detalhes");
    }
    /*
    renderDetalhes() {
    	const { produto } = this.props;
    const { variacaoCompleta } = this.state;
    if (!produto) return null;
    
    return (
    <div className='flex-2 produto-detalhes'>
    	<div className='titulo'>
    		<h2>{produto.titulo}</h2>
    	</div>
    			<div className='categoria'>
    		<p> 
    			Categoria:&nbsp;
    			<Link href={`/categoria?id=${produto.categoria._id}`}>
    				<span className='categoria-link'>
    					{produto.categoria.nome}
    			</span>
    			</Link>
    		</p>
    	</div>
    			<br />
    		
    	<br />
    	{
                    	variacaoCompleta ? (
    		<div className='precos'>
    		  <h2 className='preco-original preco-por'>
    			{formatMoney(variacaoCompleta.preco)}
    		  </h2>
    		  { variacaoCompleta.promacao && variacaoCompleta.promocao !== variacaoCompleta.preco && 
    			(<h2 className='preco-promocao'>
    				{formatMoney(variacaoCompleta.promocao)}
    			</h2>)
    		  }
    				  <h4 className='preco-parcelado'>
    			ou 6x de {formatMoney((variacaoCompleta.promocao || variacaoCompleta.preco) / 6 )} sem juros
    	      </h4>
    		</div>) :(
    		<div className='precos'>
    	    	<h2 className='preco-original preco-por'>
    			{formatMoney(produto.preco)}
    	    	</h2>
    		  { produto.promacao && produto.promocao !== produto.preco && 
    		    	(<h2 className='preco-promocao'>
    			     {formatMoney(produto.promocao)}
    			    </h2>)
    		  }
    				   <h4 className='preco-parcelado'>
    			  ou 6x de {formatMoney((produto.promocao || produto.preco) / 6 )} sem juros
    		   </h4>
    	    </div>)
    	}				
    	
    			{this.renderVariacoes()}
    			<div className='opcoes'>
    		<div className='opcao flex vertical'>
    			<label className='opcao-tab'>Quantidade</label>
    			<input className='opcao-input'
    				type='number' name='quantidade'
    				value={this.state.qtd} 
    				onChange={(e)=> (Number(e.target.value)  >= 1 && this.setState({qtd: e.target.value}) )}
    			/>
    		</div>
    	</div>
    			<div className='comprar'>
    		<button className='btn btn-success btn-cta' onClick={() => this.addCart()}>
    			COMPRAR
    		</button>
    	</div>
    </div>
    );
    } 
    */
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Produto-Hero flex horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 4
        }
      }, this.renderPhotos(), this.renderDetalhes());
    }
  }]);
  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
var mapStateToProps = function mapStateToProps(state) {
  return {
    produto: state.produto.produto
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(Hero));

/***/ })

})
//# sourceMappingURL=[produto].js.4b78f04172192aa61af6.hot-update.js.map