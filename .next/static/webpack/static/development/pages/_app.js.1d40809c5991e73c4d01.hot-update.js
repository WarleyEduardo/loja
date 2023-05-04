webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/types.js":
/*!************************!*\
  !*** ./redux/types.js ***!
  \************************/
/*! exports provided: REGISTER, AUTENTICAR_TOKEN, FETCH_CATEGORIAS, FETCH_LOJA, FETCH_PRODUTOS, FETCH_CATEGORIA, FETCH_PRODUTOS_CATEGORIA, USER, FETCH_PESQUISA, FETCH_PRODUTOS_PESQUISA, FETCH_PRODUTO, FETCH_PRODUTO_VARIACOES, FETCH_PRODUTO_AVALIACOES, NOVA_AVALIACAO, SET_CARRINHO, CLEAN_CARRINHO, FETCH_PRODUTO_CARRINHO, FETCH_VARIACAO_CARRINHO, FETCH_VALOR_ENTREGA, UPDATE_QTD_CART, REMOVE_PRODUTO_CART, CLEAN_FRETES, UPDATE_FRETE_CART, AUTENTICAR, FETCH_CLIENTE, SET_FORM, CLEAN_FORM, SET_TIPO_PAGAMENTO, FETCH_SESSION_ID, FETCH_SENDER_HASH, NOVO_PEDIDO, PAGAR_PEDIDO, FETCH_PEDIDOS, FETCH_PEDIDO, CLEAN_PEDIDO, CANCELAR_PEDIDO, DESAUTENTICAR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTENTICAR_TOKEN", function() { return AUTENTICAR_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATEGORIAS", function() { return FETCH_CATEGORIAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_LOJA", function() { return FETCH_LOJA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTOS", function() { return FETCH_PRODUTOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATEGORIA", function() { return FETCH_CATEGORIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTOS_CATEGORIA", function() { return FETCH_PRODUTOS_CATEGORIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER", function() { return USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PESQUISA", function() { return FETCH_PESQUISA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTOS_PESQUISA", function() { return FETCH_PRODUTOS_PESQUISA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO", function() { return FETCH_PRODUTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO_VARIACOES", function() { return FETCH_PRODUTO_VARIACOES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO_AVALIACOES", function() { return FETCH_PRODUTO_AVALIACOES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOVA_AVALIACAO", function() { return NOVA_AVALIACAO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CARRINHO", function() { return SET_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_CARRINHO", function() { return CLEAN_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO_CARRINHO", function() { return FETCH_PRODUTO_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VARIACAO_CARRINHO", function() { return FETCH_VARIACAO_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VALOR_ENTREGA", function() { return FETCH_VALOR_ENTREGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_QTD_CART", function() { return UPDATE_QTD_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_PRODUTO_CART", function() { return REMOVE_PRODUTO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_FRETES", function() { return CLEAN_FRETES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FRETE_CART", function() { return UPDATE_FRETE_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTENTICAR", function() { return AUTENTICAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CLIENTE", function() { return FETCH_CLIENTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FORM", function() { return SET_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_FORM", function() { return CLEAN_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TIPO_PAGAMENTO", function() { return SET_TIPO_PAGAMENTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SESSION_ID", function() { return FETCH_SESSION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SENDER_HASH", function() { return FETCH_SENDER_HASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOVO_PEDIDO", function() { return NOVO_PEDIDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGAR_PEDIDO", function() { return PAGAR_PEDIDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PEDIDOS", function() { return FETCH_PEDIDOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PEDIDO", function() { return FETCH_PEDIDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_PEDIDO", function() { return CLEAN_PEDIDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANCELAR_PEDIDO", function() { return CANCELAR_PEDIDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESAUTENTICAR", function() { return DESAUTENTICAR; });
/* modulo 40 - loja virtual - criando helper para inicialização*/

/* modulo 45 - Criando actions e reduces e atualizando os componentes das categorias*/

/*modulo 46 - adicionando actions e reducers e alterando os componentes para integração*/

/* modulo 47 -  integração -  detalhes do produto */

/*modulo 49 - Criando as funções e error handlign para os dados do cliente 2/2*/

/*modulo 49 - integração checkout - desenvolvendo o container dos dados do cliente */

/* módulo 49 -  Dados de pagamento - preparando a base, actions e  funções do pagseguro */

/*modulo 49 - Botão final de checkout -  preprando base , actions e reducers */

/*Módulo 51 -  menu -  criando actionse reducers ...*/
var REGISTER = 'REGISTER',
  AUTENTICAR_TOKEN = 'AUTENTICAR_TOKEN',
  FETCH_CATEGORIAS = 'FETCH_CATEGORIAS',
  FETCH_LOJA = 'FETCH_LOJA',
  FETCH_PRODUTOS = 'FETCH_PRODUTOS',
  FETCH_CATEGORIA = 'FETCH_CATEGORIA',
  FETCH_PRODUTOS_CATEGORIA = 'FETCH_PRODUTOS_CATEGORIA',
  USER = 'USER',
  FETCH_PESQUISA = 'FETCH_PESQUISA',
  FETCH_PRODUTOS_PESQUISA = 'FETCH_PRODUTOS_PESQUISA',
  FETCH_PRODUTO = 'FETCH_PRODUTO',
  FETCH_PRODUTO_VARIACOES = 'FETCH_PRODUTO_VARIACOES',
  FETCH_PRODUTO_AVALIACOES = 'FETCH_PRODUTO_AVALIACOES',
  NOVA_AVALIACAO = 'NOVA_AVALIACAO',
  SET_CARRINHO = 'SET_CARRINHO',
  CLEAN_CARRINHO = 'CLEAN_CARRINHO',
  FETCH_PRODUTO_CARRINHO = 'FETCH_PRODUTO_CARRINHO',
  FETCH_VARIACAO_CARRINHO = 'FETCH_VARIACAO_CARRINHO',
  FETCH_VALOR_ENTREGA = 'FETCH_VALOR_ENTREGA',
  UPDATE_QTD_CART = 'UPDATE_QTD_CART',
  REMOVE_PRODUTO_CART = 'REMOVE_PRODUTO_CART',
  CLEAN_FRETES = 'CLEAN_FRETES',
  UPDATE_FRETE_CART = 'UPDATE_FRETE_CART',
  AUTENTICAR = 'AUTENTICAR',
  FETCH_CLIENTE = 'FETCH_CLIENTE',
  SET_FORM = 'SET_FORM',
  CLEAN_FORM = 'CLEAN_FORM',
  SET_TIPO_PAGAMENTO = 'SET_TIPO_PAGAMENTO',
  FETCH_SESSION_ID = 'FETCH_SESSION_ID',
  FETCH_SENDER_HASH = 'FETCH_SENDER_HASH',
  NOVO_PEDIDO = 'NOVO_PEDIDO',
  PAGAR_PEDIDO = 'PAGAR_PEDIDO',
  FETCH_PEDIDOS = 'FETCH_PEDIDOS',
  FETCH_PEDIDO = 'FETCH_PEDIDO',
  CLEAN_PEDIDO = 'CLEAN_PEDIDO',
  CANCELAR_PEDIDO = 'CANCELAR_PEDIDO',
  DESAUTENTICAR = 'DESAUTENTICAR';

/***/ })

})
//# sourceMappingURL=_app.js.1d40809c5991e73c4d01.hot-update.js.map