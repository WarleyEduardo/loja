/*modulo 49 - integração checkout - desenvolvendo o container dos dados do cliente */

import { SET_FORM, CLEAN_FORM, SET_TIPO_PAGAMENTO, FETCH_SESSION_ID, FETCH_SENDER_HASH, PAGAR_PEDIDO , NOVO_PEDIDO } from '../types';

/* módulo 49 -  Dados de pagamento - preparando a base, actions e  funções do pagseguro */
import axios from 'axios';
import { url , loja } from '../../config'

import { getCart } from '../../utils/cart';

import { getHeaders } from './helpers';

/*modulo 49 - Botão final de checkout -  preprando base , actions e reducers */

import errorHandling from './errorHandling';

import Router from 'next/router';
import { cleanCarrinho } from './carrinhoActions';

export const novoPedido = (form, freteSelecionado, tipoPagamentoSelecionado,
 valorTotal, token, senderHash, carrinho = getCart() , cb = null

) => dispatch => {

	console.log('meu carrinho',carrinho)

	axios
		.post(
			`${url}/api/pedidos?loja=${loja}`,
			{
				carrinho,
				entrega: {
					custo: freteSelecionado.Valor.replace(',', '.'),
					tipo: freteSelecionado.Codigo.toString(),
					prazo: freteSelecionado.PrazoEntrega,
					endereco: {
						local: form.local,
						numero: form.numero,
						complemento: form.complemento,
						bairro: form.bairro,
						cidade: form.cidade,
						estado: form.estado,
						CEP: form.CEP,
					},
				},
				pagamento: {
					valor: tipoPagamentoSelecionado === 'cartao' ? form.parcelasCartaoSelecionada.totalAmount : valorTotal,
					forma: tipoPagamentoSelecionado === 'cartao' ? 'creditCard' : 'boleto',
					parcelas: tipoPagamentoSelecionado === 'cartao' ? form.parcelasCartaoSelecionada.quantity : 1,
					enderecoEntregaIgualCobranca: form.dadosEntregaIgualDadosCobranca,
					endereco: {
						local: form.dadosEntregaIgualDadosCobranca ? form.local : form.dadosCobranca.local,
						numero: form.dadosEntregaIgualDadosCobranca ? form.numero : form.dadosCobranca.numero,
						complemento: form.dadosEntregaIgualDadosCobranca ? form.complemento : form.dadosCobranca.complemento,
						bairro: form.dadosEntregaIgualDadosCobranca ? form.bairro : form.dadosCobranca.bairro,
						cidade: form.dadosEntregaIgualDadosCobranca ? form.cidade : form.dadosCobranca.cidade,
						estado: form.dadosEntregaIgualDadosCobranca ? form.estado : form.dadosCobranca.estado,
						CEP: form.dadosEntregaIgualDadosCobranca ? form.CEP : form.dadosCobranca.CEP,
					},
					cartao:
						tipoPagamentoSelecionado === 'cartao'
							? {
									nomeCompleto: form.nomeCartao.trim(),
									codigoArea: form.telefone.slice(0, 2),
									telefone: form.telefone.slice(2).trim(),
									dataDeNascimento: form.dataDeNascimento,
									credit_card_token: form.credit_card_token,
									cpf: form.cpf,
							  }
							: undefined,
				},
			},
			getHeaders(token)
		)
		.then((response) => {
			dispatch({ type: NOVO_PEDIDO, payload: response.data });
			dispatch(pagarPedido(response.data.pedido.pagamento._id, token, senderHash));
			cb(null);
		})
		.catch((e) => cb(errorHandling(e)));


	}



export const pagarPedido = (id, token, senderHash) => (dispatch) => {
	axios.post(`${url}/api/pagamentos/pagar/${id}?loja=${loja}`,
		{
			senderHash,
		},
		getHeaders(token)
	   )
		.then((response) => {
				dispatch({ type: PAGAR_PEDIDO, payload: response.data });
				Router.push('/sucesso');
				dispatch(cleanCarrinho());
				dispatch(cleanForm());
			})
			.catch((e) => console.log(e));
};

export const cleanForm = () => ({ type: CLEAN_FORM })

export const setTipoPagamento = (tipoPagamentoSelecionado) => ({

	type: SET_TIPO_PAGAMENTO, tipoPagamentoSelecionado
});

export const getSessionPagamento = () => dispatch => {
	
	axios.get(`${url}/api/pagamentos/session`).then((response) => {

		dispatch({ type: FETCH_SESSION_ID, payload: response.data });

		PagSeguroDirectPayment.setSessionId(response.data.sessionId);

		let senderHash = PagSeguroDirectPayment.getSenderHash();
		/*
		PagSeguroDirectPayment.onSenderHashReady((response) => {
			if (response.status == 'error') {
				console.log(response.message);
				return false;
			}
			 console.log(response.senderHash);
			
		}
		);
		*/
		
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
	cleanForm,
	novoPedido,
	pagarPedido
};