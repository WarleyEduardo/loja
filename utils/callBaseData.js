/* modulo 40 - loja virtual - criando helper para cookie*/
import actions from '../redux/actions';
import { fetchData } from './fetch';

export default function (calls = [], ctx) {
	
	return Promise.all([
		fetchData(actions.fetchCategorias, ctx),
		fetchData(actions.fetchLoja, ctx),
		...calls.map((action) => fetchData(action, ctx))		
	]);
	
	
	
}