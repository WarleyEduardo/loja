/* modulo 39 - loja virtual -  desenvolvimento a configuração base do redux  */

import { combineReducers } from 'redux';

/* modulo 40 - loja virtual - criando helper para inicialização*/
import authReducer from './authReducers'

/* modulo 44 - Criando actions e reduces para integração 1/2*/
import categoriaReducer from './categoriaReducers';
import lojaReducer from './lojaReducers';


/* modulo 44 - Criando actions e reduces para integração 2/2*/

import produtoReducer from './produtoReducers';

/* modulo 48 -  criando as actions e reducers necessários (2/2) */
import carrinhoReducer from './carrinhoReducers';

/*modulo 49 - Criando as funções e error handlign para os dados do cliente 2/2*/
import clienteReducer from './clienteReducers';

/*modulo 49 - integração checkout - desenvolvendo o container dos dados do cliente */
import checkoutReducers from './checkoutReducers';

export default combineReducers({
	auth: authReducer,
	categoria: categoriaReducer,
	loja: lojaReducer,
	produto: produtoReducer,
	carrinho: carrinhoReducer,
	cliente: clienteReducer,
	checkout: checkoutReducers
});