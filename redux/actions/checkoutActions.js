/*modulo 49 - integração checkout - desenvolvendo o container dos dados do cliente */

import { SET_FORM, CLEAN_FORM, SET_TIPO_PAGAMENTO, FETCH_SESSION_ID, FETCH_SENDER_HASH } from '../types';

/* módulo 49 -  Dados de pagamento - preparando a base, actions e  funções do pagseguro */
import axios from 'axios';
import { url } from '../../config'


export const cleanForm = () => ({ type: CLEAN_FORM })

export const setTipoPagamento = (tipoPagamentoSelecionado) => ({

	type: SET_TIPO_PAGAMENTO, tipoPagamentoSelecionado
});

export const getSessionPagamento = () => dispatch => {
	
	axios.get(`${url}/api/pagamentos/session`).then((response) => {
		dispatch({ type: FETCH_SESSION_ID, payload: response.data });

		PagSeguroDirectPayment.setSessionId(response.data.sessonId);
		let senderHash = PagSeguroDirectPayment.getSenderHash();
		// let senderHash = PagSeguroDirectPayment.onSenderHashReady();
		dispatch({ type: FETCH_SENDER_HASH, senderHash });
	}).catch( e => console.log(e)) 	

}




export const setForm = (payload, prefix) => dispatch => {

	dispatch({ type: SET_FORM, payload, prefix });

	return Promise.resolve();
};

export default {
	setForm,
	getSessionPagamento,
	setTipoPagamento,
	cleanForm
};