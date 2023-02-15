/* modulo 43 - pagina de aceso a area do cliente -  
criando componentes de acesso login e cadastro 1/2 */

import React, { Component } from 'react';

import FormSimples from '../../../components/Inputs/FormSimples';

class LoginContainer extends Component {

	state = {
		email: "",
		senha: ""
	}

	render() {

		const { email, senha } = this.state;
		
		return (
			<div className='Login-Container'>
				<h2 className='text-center'>Minha Conta</h2>
				<br />			
				<br />
				<div className='form-login'>
					<FormSimples value={email} name='email' type='email' placeholder='Email' />
					<FormSimples value={senha} name='senha' type='password' placeholder='Senha' />
					<br />
					<div className='flex flex-center'>
						<button className='btn btn-primary'>ENTRAR</button>
					</div>
					<hr />
					<div className='link-acesso text-center'>
						<span onClick={this.props.changeAcesso}>Não tem conta? clique aqui para cadastrar</span>
					</div>
				</div>
			</div>
		);
	}
}

export default LoginContainer;