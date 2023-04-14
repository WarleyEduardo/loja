/*modulo 49 - Criando as funções e error handlign para os dados do cliente 2/2*/
import { FETCH_CLIENTE} from '../types';

import axios from 'axios';
import { url , loja} from '../../config.js';
import { getHeaders } from './helpers';

/*modulo 49 - Dados de entrega - criando funções e preparando a base */

import { autenticar } from './authActions';
import errorHandling from './errorHandling';

export const getRawData = (data) => {

	let _data = data.split('/')

	return `${_data[2]}-${_data[1]-1}-${_data[0]}`;
}


export const newCliente = (form, cb) => dispatch => {
	
	axios.post(`${url}/api/clientes?loja=${loja}`, {
		
		nome: form.nome,
		paswword: form.senha,
		cpf: form.cpf,
		email: form.email,
		telefones: [form.telefone],
		endereco: {
			local: form.local,
			numero: form.numero,
			complemento: form.complemento,
			bairro: form.bairro,
			cidade: form.cidade,
			estado: form.estado,
			CEP : form.CEP
			
		},
		dataDeNascimento : getRawData(form.dataDeNascimento)
	  }
	).then(
		(response) => {
			dispatch({ type: FETCH_CLIENTE, payload: response.data })
			dispatch(autenticar({ email: form.email, password: form.senha }))
			cb(null)
		}
	).catch( e => cb(errorHandling(e)))
}


export const updateCliente = (form, id, token, cb) => (dispatch) => {
	axios
		.post(
			`${url}/api/clientes/${id}?loja=${loja}`,
			{
				nome: form.nome,
				cpf: form.cpf,
				telefones: [form.telefone],
				endereco: {
					local: form.local,
					numero: form.numero,
					complemento: form.complemento,
					bairro: form.bairro,
					cidade: form.cidade,
					estado: form.estado,
					CEP: form.CEP,
				},
				dataDeNascimento: getRawData(form.dataDeNascimento),
			},
			getHeaders(token)
		)
		.then((response) => {
			dispatch({ type: FETCH_CLIENTE, payload: response.data });
			cb(null);
		})
		.catch((e) => cb(errorHandling(e)));
};



export const fetchCliente = (id, token) => dispatch => {
	
	axios.get(`${url}/api/clientes/${id}?loja=${loja}`, getHeaders(token))
	.then((response) => {
	  
		dispatch({type: FETCH_CLIENTE, payload : response.data})

	}).catch( e => console.log(e))
};

export default {
	fetchCliente,
	newCliente,
	updateCliente
};