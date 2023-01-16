/* modulo 42 - pagina de Checkout - criando o componente de dados do cliente 2/3  */

import React, { Component } from 'react';

class FormSimples extends Component{
	
	render() {
		const { value, name, placeholder, label, onChange, type } = this.props;
		
		return (
			<div className='form-input'>
				{label && <label>{label}</label>}
				<input
					type={type}
					value={value}
					name={name}
					placeholder={placeholder}
					onChange={onChange}
				/>
			</div>
		);		

	}



}

export default FormSimples;