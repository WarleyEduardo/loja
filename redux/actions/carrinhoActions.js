/* modulo 48 -  criando as actions e reducers necessários (1/2) */

/* modulo 48 -  criando as actions e reducers necessários (2/2) */
import axios from 'axios';
import { url, loja } from '../../config.js';
import { getCart, removeCart, cleanCart } from '../../utils/cart';
import {
	SET_CARRINHO,
	CLEAN_CARRINHO,
	FETCH_PRODUTO_CARRINHO,
	FETCH_VARIACAO_CARRINHO,
	FETCH_VALOR_ENTREGA,
	UPDATE_QTD_CART,
	REMOVE_PRODUTO_CART,
	CLEAN_FRETES,
	UPDATE_FRETE_CART
} from '../types';


export const setCarrinho = () => ({ type: SET_CARRINHO, carrinho: getCart() });

export const cleanCarrinho = () => {
	cleanCart();
	return {type: CLEAN_CARRINHO}
};

export const fetchProdutoCarrinho = (id, idxCarrinho) => dispatch => {

		
	axios.get(`${url}/api/produtos/${id}?loja=${loja}`)
		.then(response => dispatch({
		
			type: FETCH_PRODUTO_CARRINHO,
			payload: response.data,
			idxCarrinho
		}))
		.catch( e => console.log(e));
};

export const fetchVariacoesCarrinho = (id,produto,idxCarrinho) => (dispatch) => {
	axios
		.get(`${url}/api/variacoes/${id}?produto=${produto}&loja=${loja}`)
		.then((response) =>
			dispatch({
				type: FETCH_VARIACAO_CARRINHO,
				payload: response.data,
				idxCarrinho
			})
		)
		.catch((e) => console.log(e));
};

export const calcularFrete = (cep, carrinho) => (dispatch) => {
	
	axios
		.post(`${url}/api/entregas/calcular`,{cep, carrinho})
		.then((response) =>
			dispatch({
				type: FETCH_VALOR_ENTREGA,
				payload: response.data,
				cep
			})
		)
		.catch((e) => console.log(e));
};


export const removerProduto = (index) => {
	removeCart(index);
	return {type : REMOVE_PRODUTO_CART, idxCarrinho : index}
}

export const updateQuantidade = (change, index) => ({

	type: UPDATE_QTD_CART,
	change,
	idxCarrinho : index
});

export const selecionarFrete = (freteSelecionado) => ({

	type: UPDATE_FRETE_CART,
	freteSelecionado
});

export const cleanFretes = () => ({
	type: CLEAN_FRETES
});


export default {

	setCarrinho,
	cleanCarrinho,
	fetchProdutoCarrinho,
	fetchVariacoesCarrinho,
	calcularFrete,
	updateQuantidade,
	selecionarFrete,
	removerProduto,
	cleanFretes
}