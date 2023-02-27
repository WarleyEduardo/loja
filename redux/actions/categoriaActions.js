/* modulo 44 - Criando actions e reduces para integração 1/2*/

import axios from 'axios';
import { url, loja } from '../../config.js';

import { FETCH_CATEGORIAS } from '../types';

export const fetchCategorias = () => (dispatch) => {

	axios
		.get(`${url}/api/categorias/disponiveis?loja=${loja}`)
		.then((response) => dispatch({ type: FETCH_CATEGORIAS, payload: response.data }))
		.catch((e) => console.log(e));
	
};

export default {

	fetchCategorias
}