/* modulo 44 - Criando actions e reduces para integração 2/2*/

/*modulo 46 - adicionando actions e reducers e alterando os componentes para integração*/

/* modulo 47 -  integração -  detalhes do produto */



import axios from 'axios';

import {
	FETCH_PESQUISA,
	FETCH_PRODUTOS,
	FETCH_PRODUTOS_PESQUISA,
	FETCH_PRODUTO,
	FETCH_PRODUTO_VARIACOES,
	FETCH_PRODUTO_AVALIACOES,
	NOVA_AVALIACAO
} from '../types';

import { url, loja } from '../../config.js';

/* modulo 47 - integrando o componente de avaliações 2/2 */
import { getHeaders } from './helpers';


export const fetchProdutosPaginaInicial = () => (dispatch) => {

	axios.get(`${url}/api/produtos/disponiveis?loja=${loja}&offset=${0}&limit=${8}&sortType=${"preco-crescente"}`)
		.then((response) => dispatch({ type: FETCH_PRODUTOS, payload: response.data }))
	.catch(e => console.log(e))
};

export const fetchTermo = (termo) => ({ type: FETCH_PESQUISA, termo })


export const fetchProdutosPesquisa = (termo,atual=0,limit = 20) => (dispatch) => {
	axios
		.get(`${url}/api/produtos/search/${termo}?loja=${loja}&offset=${atual}&limit=${limit}`)
		.then((response) => dispatch({ type: FETCH_PRODUTOS_PESQUISA, payload: response.data , termo }))
		.catch((e) => console.log(e));
};



export const fetchProduto = (id) =>
	(dispatch) => {
		axios
			.get(`${url}/api/produtos/${id}?loja=${loja}`)
			.then((response) => dispatch({ type: FETCH_PRODUTO, payload: response.data}))
			.catch((e) => console.log(e));
	};


export const fetchAvaliacoes = (id) => (dispatch) => {
	axios
		.get(`${url}/api/produtos/${id}/avaliacoes?loja=${loja}&id=${id}`)
		.then((response) => dispatch({ type: FETCH_PRODUTO_AVALIACOES, payload: response.data}))
		.catch((e) => console.log(e));
};	

export const fetchVariacoes = (id) => (dispatch) => {
	axios
		.get(`${url}/api/produtos/${id}/variacoes?loja=${loja}&id=${id}`)
		.then((response) => dispatch({ type: FETCH_PRODUTO_VARIACOES, payload: response.data}))
		.catch((e) => console.log(e));
};	

/* modulo 47 - integrando o componente de avaliações 2/2 */

export const novaAvaliacao =
	({ nome, token, produto, texto, pontuacao }, cb) =>
	(dispatch) => {
		axios
			.post(
				`${url}/api/avaliacoes?loja=${loja}&produto=${produto}`,
				{
					nome,
					texto,
					pontuacao,
				},
				getHeaders(token)
			)
			.then((response) => {
				dispatch({ type: NOVA_AVALIACAO, payload: response.data });
				cb(null);
			})
			.catch((e) => cb(e));
	}; 

export default {
	fetchProdutosPaginaInicial,
	fetchTermo,
	fetchProdutosPesquisa,
	fetchProduto,
	fetchAvaliacoes,
	fetchVariacoes,
	novaAvaliacao,
};