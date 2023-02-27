/* modulo 39 - loja virtual -  desenvolvimento a configuração base do redux  */

import { combineReducers } from 'redux';

/* modulo 40 - loja virtual - criando helper para inicialização*/
import authReducer from './authReducers'

/* modulo 44 - Criando actions e reduces para integração 1/2*/
import categoriaReducer from './categoriaReducers';
import lojaReducer from './lojaReducers';


/* modulo 44 - Criando actions e reduces para integração 2/2*/

import produtoReducer from './produtoReducers';

export default combineReducers({
	auth: authReducer,
	categoria: categoriaReducer,
	loja: lojaReducer,
	produto: produtoReducer
});