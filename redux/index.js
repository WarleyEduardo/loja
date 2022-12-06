/* modulo 39 - loja virtual -  desenvolvimento a configuração base do redux  */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';	

export const initStore = (initialState = {}) => createStore(reducer, initialState, applyMiddleware(thunk))


	
	
	