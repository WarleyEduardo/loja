/*Módulo 51 -  menu -  criando actionse reducers ...*/
import { FETCH_PEDIDOS, FETCH_PEDIDO, CLEAN_PEDIDO, CANCELAR_PEDIDO } from '../types';

const initialState = {
	pedidos: null,
	pedido: null,
};

export default (state = initialState, action) => {

	switch (action.type) {
		case FETCH_PEDIDOS:
			return {
				...state,
				pedidos: action.payload.pedidos,
			};
		case FETCH_PEDIDO:
			return {
				...state,
				pedido: action.payload.pedido,
				pedidoRegistro: action.payload.registro
			};

		case CLEAN_PEDIDO:
			return {
				...state,
				pedido: null,
				pedidoRegistro : null,
			};
		
		case CANCELAR_PEDIDO: 

			return {

				...state,
				pedido: state.pedido ? { ...state.pedido, cancelado: true } : null
			}
		
		default:
			return state;
	};

};