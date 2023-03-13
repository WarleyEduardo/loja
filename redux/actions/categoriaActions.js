/* modulo 44 - Criando actions e reduces para integração 1/2*/

import axios from 'axios';
import { url, loja } from '../../config.js';

import { FETCH_CATEGORIAS,FETCH_CATEGORIA, FETCH_PRODUTOS_CATEGORIA } from '../types';

/* modulo 45 - Criando actions e reduces e atualizando os componentes das categorias*/

export const fetchCategorias = () => (dispatch) => {	

	axios.get(`${url}/api/categorias/disponiveis?loja=${loja}`)
		.then((response) => dispatch({ type: FETCH_CATEGORIAS, payload: response.data }))
		.catch((e) => console.log(e));
	
};

export const fetchCategoria = (id) => (dispatch) => {

		axios.get(`${url}/api/categorias/${id}?loja=${loja}`)
			.then((response) => dispatch({ type: FETCH_CATEGORIA, payload: response.data }))
			.catch((e) => console.log(e));
}


export const fetchProdutosCategoria = (id,  atual = 0  , limit = 20) => (dispatch) => {
	axios
		.get(`${url}/api/categorias/${id}/produtos?loja=${loja}&offset=${atual}&limit=${limit}`)
		.then((response) => dispatch({ type: FETCH_PRODUTOS_CATEGORIA, payload: response.data }))
		.catch((e) => console.log(e));
};


export default {
	fetchCategorias,
	fetchCategoria,
	fetchProdutosCategoria
};