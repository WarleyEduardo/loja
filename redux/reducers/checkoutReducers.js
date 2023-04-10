/*modulo 49 - integração checkout - desenvolvendo o container dos dados do cliente */

import { SET_FORM } from '../types';

const initialState = {

	form: {
		billing: {},
		tipoPagamentoSelecionado : "cartao_credito"	
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

			return { ...state, form };
		
		default: return state;
	}


}