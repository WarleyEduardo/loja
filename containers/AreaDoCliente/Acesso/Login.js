/* modulo 43 - pagina de aceso a area do cliente -  
criando componentes de acesso login e cadastro 1/2 */

import React, { Component } from 'react';

import FormSimples from '../../../components/Inputs/FormSimples';


/* Modulo 51 - acesso -  login realizando a integração*/

import { url } from '../../../config.js';

import { connect } from 'react-redux';
import actions from '../../../redux/actions';

import AlertGeral from '../../../components/Alert/Geral';

class LoginContainer extends Component {

	state = {
		email: "",
		senha: "",
		aviso: null,
		erros : {}
	}


	validate() {
		
		const { email, senha } = this.state;
		const erros = {};

		if (!email) erros.email = "Preencha aqui com o seu e-mail";
		if (!senha) erros.senha = "Preencha aqui com a sua senha";
		
		this.setState({ erros, aviso: null });	

		return (Object.keys(erros).length === 0);	
	}

	handleSubmit() {

		
		if (!this.validate()) return;
		const { email, senha } = this.state;
		this.props.autenticar({ email, password: senha }, false, (error) => {
			

			if (error) this.setState({ aviso: { status: false, message: error.message } })
			else this.setState({aviso : null})
		} )
		

	}


	onChange = (field, value) => this.setState({[field]: value}, ()=> this.validate())

	render() {

		const { email, senha , erros } = this.state;
		
		return (
			<div className='Login-Container'>
				<h2 className='text-center'>Minha Conta</h2>
				<br />			
				<br />
				<div className='form-login'>
					<FormSimples
						value={email}
						erro={erros.email}
						name='email'
						type='email'
						placeholder='Email'
						onChange={(e) => this.onChange('email', e.target.value)}
					/>
					
					<FormSimples
						
						value={senha}
						erro={erros.senha}
						name='senha'
						type='password'
						placeholder='Senha'
						onChange={(e) => this.onChange('senha', e.target.value)}
					/>
					
					<div className='flex flex-right'>
						<a href={`${url}/api/usuarios/recuperar-senha`}>
							<small>Esqueceu sua senha?</small>
						</a>

					</div>
					
					<AlertGeral aviso={this.state.aviso} />
					
					<br />
					<div className='flex flex-center'>
						<button className='btn btn-primary'
						onClick={ () => this.handleSubmit()}
						>ENTRAR</button>
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



export default connect(null,actions)(LoginContainer);