/* modulo 44 - Criando actions e reduces para integração 2/2*/
import axios from 'axios';

import { FETCH_PRODUTOS } from '../types';

import { url, loja } from '../../config.js';

export const fetchProdutosPaginaInicial = () => (dispatch) => {

	console.log('entrou na action produtos')

	axios.get(`${url}/api/produtos/disponiveis?loja=${loja}&offset=${0}&limit=${4}&sortType=${"preco-crescente"}`)
		.then((response) => dispatch({ type: FETCH_PRODUTOS, payload: response.data }))
	.catch(e => console.log(e))
};

export default {
	fetchProdutosPaginaInicial
}
;