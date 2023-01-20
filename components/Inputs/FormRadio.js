/* modulo 42 - pagina de Checkout - criando o componente de dados  de pagamento*/
import React, { Component } from 'react';

class FormRadio extends Component {
	render() {
		const { name, checked, label, onChange } = this.props;

		return (
			<div className='form-input form-checkbox'>
				<input type='radio' checked={checked} name={name} onChange={onChange} />
				<label>{label}</label>
			</div>
		);
	}
}

export default FormRadio;
