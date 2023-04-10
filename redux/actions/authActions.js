/* modulo 40 - loja virtual - criando helper para inicialização*/

/* modulo 44 - Criando actions e reduces para integração 1/2*/

import { AUTENTICAR_TOKEN, USER, AUTENTICAR } from '../types';

import axios from 'axios';
import { url } from '../../config.js';


/* modulo 47 - integrando o componente de avaliações 2/2 */
//const getHeaders = token => ({ headers: { "Authorization": `Ecommerce ${token}` } });
import { getHeaders } from './helpers';


/* modulo 49  - Criando as funções e error handlign para os dados do cliente 1/2*/
/* modulo 49  - Criando as funções e error handlign para os dados do cliente 2/2*/

import { setCookie } from '../../utils/cookie';
import Router from 'next/router';
import errorHandling from './errorHandling';
	

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
	autenticar
};
