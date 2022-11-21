/* modulo 39 - loja virtual -  desenvolvimento a configuração base do redux  */

import { combineReducers } from 'redux';

/* modulo 40 - loja virtual - criando helper para inicialização*/
import authReducer  from './authReducers'

export default combineReducers({
	auth: authReducer
})