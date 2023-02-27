/* modulo 44 - Criando actions e reduces para integração 1/2*/

import { FETCH_CATEGORIAS } from '../types';

const initialState = { categorias: null };

export default (state = initialState, action) => {
	switch (action.type) {
		
		case FETCH_CATEGORIAS:
			return {
				
				...state,
				categorias: action.payload.categorias
			}
		
		default: return state;
	}
}


