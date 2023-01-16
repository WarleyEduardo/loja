/* modulo 42 - pagina de Checkout - criando o componente de dados do cliente 2/3  */

import React, { Component} from 'react';

import FormInput from '../../components/Inputs/FormSimples';

class ClienteLogin extends Component {
	state = {
		email: '',
		senha: '',
	};

	renderAvisoDeRegistro() {
		return (
			<div className='flex-1'>
				<h2>Comprar como visitante/Realizar Registro</h2>
				<br />
				<button className='btn btn-sucess'>
					<span>CONTINUAR</span>
				</button>
			</div>
		);
	}

	renderFormLogin() {
		const { email, senha } = this.state;

		return (
			<div className='flex-1'>
				<h2>Fazer login</h2>
				<br />

				<FormInput
					value={email}
					name={'email'}
					label='E-mail'
					placeholder='E-mail'
					onChange={(v) => this.setState({ email: v.target.value })} />
				<br/>
				<FormInput
					value={senha}
					name={'senha'}
					label='Senha'
					type='password'
					placeholder='Senha'
					onChange={(v) => this.setState({ senha: v.target.value })} />

				<br />
				<button className='btn btn-sucess'>
					<span>ENTRAR</span>
				</button>
			</div>
		);
	}

	render() {
		return (
			<div className='Cliente-Login flex horizontal'>
				{this.renderAvisoDeRegistro()}
				{this.renderFormLogin()}
			</div>
		);
	}
}



export default ClienteLogin;