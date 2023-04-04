/*modulo 49 - Criando as funções e error handlign para os dados do cliente 2/2*/
import { FETCH_CLIENTE} from '../types';

import axios from 'axios';
import { url , loja} from '../../config.js';


export const fetchCliente = (id, token) => dispatch => {
	
	axios.get(`${url}/api/clientes/${id}?loja=${loja}`)
	.then((response) => {
	  
		dispatch({type: FETCH_CLIENTE, payload : response.data})

	}).catch( e => console.log(e))
};

export default { fetchCliente };