/* modulo 42 - pagina de Checkout - criando o componente de dados do cliente 2/3  */

import React, { Component} from 'react';

import FormInput from '../../components/Inputs/FormSimples';

/*Módulo 49 explicando como funciona a parte dos dados do cliente*/
import { connect } from 'react-redux';


/*Integrando a parte de login dos dados do cliente (1/2)*/
  /*Integrando a parte de login dos dados do cliente (2/2)*/
 
import actions from '../../redux/actions';

import AlertGeral from '../../components/Alert/Geral';

class ClienteLogin extends Component {
	state = {
		email: '',
		senha: '',
		aviso: null,
		erros: {},
	};

	renderAvisoDeRegistro() {
		return (
			<div className='flex-1'>
				<h2>Comprar como visitante/Realizar Registro</h2>
				<br />
				<button className='btn btn-success' onClick={() => this.props.permitir()}>
					<span>CONTINUAR</span>
				</button>
			</div>
		);
	}

	validate() {
		const { email, senha } = this.state;
		const erros = {};

		if (!email) erros.email = 'Preencha aqui com o seu e-mail';
		if (!senha || senha === '') erros.senha = 'Preencha aqui com a sua senha';

		this.setState({ erros, aviso: null });
		return !(Object.keys(erros).length > 0);
	}

	onChange = (field, e) => this.setState({ [field]: e.target.value }, () => this.validate());
	
	handleSubmit() {
		if (!this.validate()) return null;
		const { email, senha } = this.state;

		this.props.autenticar({ email, password: senha }, false, (error) => {
			if (error) this.setState({ aviso: { status: false, message: error.message } });
		});
	}

	renderFormLogin() {
		const { email, senha, erros } = this.state;

		return (
			<div className='flex-1'>
				<h2>Fazer login</h2>
				<AlertGeral aviso={this.state.aviso} />
				<br />

				<FormInput
					value={email}
					name={'email'}
					label='E-mail'
					erro={erros.email}
					placeholder='E-mail'
					onChange={(e) => this.onChange('email', e)} />
				<br />
				<FormInput value={senha}
					name={'senha'}
					label='Senha'
					type='password'
					erro={erros.password}
					placeholder='Senha'
					onChange={(e) => this.onChange('senha', e)} />

				<br />
				<button className='btn btn-success' onClick={() => this.handleSubmit()}>
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




export default connect(null,actions)(ClienteLogin);