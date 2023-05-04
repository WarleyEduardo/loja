/* modulo 40 - loja virtual - criando helper para inicialização*/

/* modulo 44 - Criando actions e reduces para integração 1/2*/

import { AUTENTICAR_TOKEN, USER, AUTENTICAR, DESAUTENTICAR } from '../types';

import axios from 'axios';
import { url } from '../../config.js';


/* modulo 47 - integrando o componente de avaliações 2/2 */
//const getHeaders = token => ({ headers: { "Authorization": `Ecommerce ${token}` } });
import { getHeaders } from './helpers';


/* modulo 49  - Criando as funções e error handlign para os dados do cliente 1/2*/
/* modulo 49  - Criando as funções e error handlign para os dados do cliente 2/2*/

import { setCookie ,removeCookie } from '../../utils/cookie';
import Router from 'next/router';
import errorHandling from './errorHandling';

/*Módulo 51 -  menu -  criando actionse reducers ...*/

export const desautenticar = () => dispatch => {

	removeCookie('token');
	Router.push('/');
	dispatch({type : DESAUTENTICAR})
}

export const updateSenha = (data, token, cb) => dispatch => {
	
	axios.put(`${url}/api/usuarios`, { password: data.novaSenha }, getHeaders(token))
		.then(response => {
		
			dispatch({ type: USER, payload: response.data.usuario })
			cb(null)
		})
	     .catch(e => cb(errorHandling(e)))
}
	

export const reauthenticate = token => ({ type: AUTENTICAR_TOKEN, payload: token})

export const getUser = ({ token }) => (dispatch) => {
	
	
	axios.get(`${url}/api/usuarios`, getHeaders(token))
		.then((response) => dispatch({ type: USER, payload: response.data.usuario }))
	    .catch( e => console.log(e))
}

/*Criando as funções e error handlign para os dados do cliente 1/2*/

export const autenticar = ({ email, password } , goTo = fase , cb) => (dispatch) => {
		axios.post(`${url}/api/usuarios/login`, { email, password})
			.then((response) => {
				
				setCookie('token', response.data.usuario.token);
		
				if (goTo) Router.push(goTo) 
	

				dispatch({ type: AUTENTICAR, payload: response.data });
                dispatch(fetchCliente(response.data.usuario._id,response.data.usuario.token))  

			}
		).catch(
			(e) => cb(errorHandling(e))			
		);
	};

export default {
	reauthenticate,
	getUser,
	autenticar,
	desautenticar,
	updateSenha
};
