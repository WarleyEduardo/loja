/*modulo 49 - Criando as funções e error handlign para os dados do cliente 2/2*/
import { FETCH_CLIENTE, LOGOUT_CLIENTE } from '../types';

import axios from 'axios';
import { url , loja} from '../../config.js';
import { getHeaders } from './helpers';

/*modulo 49 - Dados de entrega - criando funções e preparando a base */

/*modulo 49 - submit dados do cliente - fazendo a integreção e ativando dados do cliente (2/2) */

import { autenticar, desautenticar } from './authActions';
import errorHandling from './errorHandling';


/*Módulo 51 -  menu -  criando actionse reducers ...*/
export const logoutCliente = () => dispatch => {

	dispatch(desautenticar());
	dispatch({type: LOGOUT_CLIENTE})
}

export const getRawData = (data) => {



	let _data = data.split('/');	

	let ano = _data[2];
	let mes = _data[1]; 
	let dia = _data[0]; 

	//let _mes = _data[1];

	//let mes = _mes < 10 ? "0" + _mes : _mes;

	//let _dia = Number(_data[0]) + 1;

	//let dia = _dia < 10 ? "0" + _dia : _dia;

	return `${ano}-${mes}-${dia}`;
}


export const newCliente = (form, cb) => (dispatch) => {
	
	axios.post(`${url}/api/clientes?loja=${loja}`, {
		
		nome: form.nome,
		password: form.senha,
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
			dispatch(autenticar({ email: form.email, password: form.senha },null, cb))
			cb(null)
		}
	).catch(e => cb(errorHandling(e)));
}


export const updateCliente = (form, id, token, cb) => (dispatch) => {
	axios.put(
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