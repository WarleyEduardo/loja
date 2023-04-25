/*modulo 49 - integração checkout - desenvolvendo o container dos dados do cliente */


/* módulo 49 -  Dados de pagamento - preparando a base, actions e  funções do pagseguro */


/*modulo 49 - Dados de pagamento - finalizando componente*/


/*modulo 49 - Botão final de checkout -  preprando base , actions e reducers */


import {
	SET_FORM, CLEAN_FORM, SET_TIPO_PAGAMENTO, FETCH_SESSION_ID, FETCH_SENDER_HASH, NOVO_PEDIDO,
	PAGAR_PEDIDO     

} from '../types';

const initialState = {

	form: {
		dadosCobranca: {},
		tipoPagamentoSelecionado : "cartao"	
	}
};

export default (state = initialState, action) => {
	

	switch (action.type) {
		
		case SET_FORM:
			let form = { ...state.form };
			Object.keys(action.payload).forEach(item => {
				
				if (action.prefix) form[action.prefix][item] = action.payload[item];
				else form[item] = action.payload[item];

			});
			return { ...state, form }
		
		case CLEAN_FORM:
			return {

				...state,
				...initialState
			}
		
		case SET_TIPO_PAGAMENTO:
			return {
				...state,
				tipoPagamentoSelecionado: action.tipoPagamentoSelecionado
			}
		
		case FETCH_SESSION_ID:

			return {
				...state,
				sessionId: action.payload.sessionId
			}
		
		case FETCH_SENDER_HASH:

			//console.log(action.senderHash);
			return {

				...state,
				senderHash: action.senderHash
			}
		
		case NOVO_PEDIDO: 
			
			return {
				...state,
				novoPedido: action.payload.Pedido
			}
		
		case PAGAR_PEDIDO:
			return {

				...state,
				novoPagamento : action.payload.pagamento

			}
		default: return state;
	}


}