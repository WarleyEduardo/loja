/* modulo 44 - Criando actions e reduces para integração 1/2*/

import { FETCH_LOJA } from '../types';

const initialState = { loja: null };

export default (state = initialState, action) => {

	switch (action.type) {
		case FETCH_LOJA:
			return {
				...state,
				loja: action.payload.loja,
			};

		default:
			return state;
	}
}

