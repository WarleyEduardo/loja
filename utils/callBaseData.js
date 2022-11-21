/* modulo 40 - loja virtual - criando helper para cookie*/
import actions from '../redux/actions';
import { fetchData } from './fetch';

export default function (calls = [], cxt) {
	
	return Promise.all([
		fetchData(actions.fetchCategorias, ctx),
		fetchData(actions.fetchDadosLoja, ctx),
		...calls.map((action)=> fetchData(action,ctx))
	])
}