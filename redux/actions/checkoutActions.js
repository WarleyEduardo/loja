/*modulo 49 - integração checkout - desenvolvendo o container dos dados do cliente */

import { SET_FORM } from '../types';

export const setForm = (payload, prefix) => dispatch => {

	dispatch({ type: SET_FORM, payload, prefix });

	return Promise.resolve();
};

export default {

	setForm
};