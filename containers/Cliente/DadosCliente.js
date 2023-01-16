/* modulo 42 - pagina de Checkout - criando o componente de dados do cliente 2/3  */
/* modulo 42 - pagina de Checkout - criando o componente de dados do cliente 3/3  */

import React, { Component } from 'react';
import FormSimples from '../../components/Inputs/FormSimples';

class DadosClienteContainer extends Component {
	
	renderDadosRegistro() { 

		return (
			<div>
				<FormSimples value={email} name='email' placeholder='E-mail' label='E-mail' onChange={(e) => this.onChange('email', e)} />
				<br />
				<FormSimples value={senha}
					name='senha'
					placeholder='Senha'
					label='Senha'
					type="password"
					onChange={(e) => this.onChange('senha', e)} />
			</div>
		);
	}

	render() {
		return (
			<div className='flex-1'>
				{this.renderDadosRegistro()}
				{this.renderDadosUsuario()}
			</div>
		);
	}
}

export default DadosClienteContainer;