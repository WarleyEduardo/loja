/* modulo 44 - Criando actions e reduces para integração 1/2*/

import axios from 'axios';

import { FETCH_LOJA } from '../types';

import { url, loja } from '../../config.js';

export const fetchLoja = () => (dispatch) => {

	axios.get(`${url}/api/lojas/${loja}?lojas${loja}`)
		.then((response) => dispatch({ type: FETCH_LOJA, payload: response.data }))
		.catch((e) => console.log(e));
};


export default {
	fetchLoja
};