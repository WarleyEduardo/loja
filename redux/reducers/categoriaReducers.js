/* modulo 44 - Criando actions e reduces para integração 1/2*/

/* modulo 45 - Criando actions e reduces e atualizando os componentes das categorias*/

import { FETCH_CATEGORIAS, FETCH_CATEGORIA, FETCH_PRODUTOS_CATEGORIA } from '../types';

const initialState = { categorias: null };

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CATEGORIAS:
			return {
				...state,
				categorias: action.payload.categorias,
			};

		case FETCH_CATEGORIA:
			return {
				...state,
				categoria: action.payload.categoria,
			};

		case FETCH_PRODUTOS_CATEGORIA:
			return {
				...state,
				produtosCategoria: action.payload.produtos,
			};

		default:
			return state;
	}
}


