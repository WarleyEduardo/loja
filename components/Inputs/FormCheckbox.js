/* modulo 42 - pagina de Checkout - criando o componente de dados de frete  */

import React, { Component } from 'react';

class FormSimples extends Component {
	render() {
		const {  name, checked, label, onChange } = this.props;

		return (
			<div className='form-input form-checkbox'>
				<input type="checkbox" checked={checked} name={name}  onChange={onChange} />
				<label>{label}</label>
			</div>
		);
	}
}

export default FormSimples;
