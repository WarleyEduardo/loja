/*Módulo 51 -  menu -  criando actionse reducers ...*/
import {

	FETCH_PEDIDOS,
	FETCH_PEDIDO,
	CLEAN_PEDIDO,
	CANCELAR_PEDIDO

} from '../types';


import axios from 'axios';
import { url, loja } from '../../config';
import  errorHandling  from './errorHandling';
import { getHeaders } from './helpers';

export const fetchPedidos = ({ offset, limit, token }) => dispatch => {
	
	axios
		.get(`${url}/api/pedidos?loja=${loja}&offset=${offset}&limit=${limit}`, getHeaders(token))
		.then((response) => dispatch({ type: FETCH_PEDIDOS, payload: response.data }))
		.catch((e) => console.log(e));

}


export const fetchPedido =
	({ id, token }) =>
	(dispatch) => {
		axios
			.get(`${url}/api/pedidos/${id}?loja=${loja}`, getHeaders(token))
			.then((response) => dispatch({ type: FETCH_PEDIDO, payload: response.data }))
			.catch((e) => console.log(e));
	};


export const cancelarPedido = ({ id, token , cb}) =>(dispatch) => {
		axios
			.delete(`${url}/api/pedidos/${id}?loja=${loja}`, getHeaders(token))
			.then((response) => {
				dispatch({ type: CANCELAR_PEDIDO, payload: response.data });
				cb(null);
			})
			.catch((e) => cb(errorHandling(e)));
};
	

export const cleanPedido = () => ({ type: CLEAN_PEDIDO })

export default {

	fetchPedido,
	fetchPedidos,
	cancelarPedido,
	cleanPedido
}
