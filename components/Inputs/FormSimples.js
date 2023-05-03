/* modulo 42 - pagina de Checkout - criando o componente de dados do cliente 2/3  */


 /*Integrando a parte de login dos dados do cliente (1/2)*/

import React, { Component } from 'react';

class FormSimples extends Component{
	
	render() {
		const { value, name, placeholder, label, onChange, type , erro } = this.props;
		
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

				{erro && (<small className="erro">{erro}</small>)
				}
			</div>
		);		

	}



}

export default FormSimples;