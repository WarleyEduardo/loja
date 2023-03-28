import { number } from 'prop-types';

/*modulo 48 -  integrando a seçao de frete 1/2  */
export const numberPattern = /\d+/g;

export const formatCEP = (value) => {

	const auxCep = (value || "").match(numberPattern);
	const _cep = (auxCep || []).join('');
	return _cep.length > 5 ? _cep.slice(0, 5) + '-' + _cep.slice(5, 8) : _cep;
}