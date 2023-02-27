/* modulo 40 - loja virtual - criando helper para inicialização*/

/* modulo 44 - Criando actions e reduces para integração 1/2*/

import { AUTENTICAR_TOKEN, USER } from '../types';

import axios from 'axios';
import { url } from '../../config.js';


const getHeaders = token => ({ headers: { "Authorization": `Ecommerce ${token}` } });

export const reauthenticate = token => ({ type: AUTENTICAR_TOKEN, payload: token})

export const getUser = ({ token }) => (dispatch) => {
	
	
	axios.get(`${url}/api/usuarios`, getHeaders(token))
		.then((response) => dispatch({ type: USER, payload: response.data.usuario }))
	    .catch( e => console.log(e))
}

export default {
	reauthenticate,
	getUser
};
