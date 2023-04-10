/* modulo 42 - pagina de Checkout - criando o componente de dados do cliente 2/3  */
/* modulo 42 - pagina de Checkout - criando o componente de dados do cliente 3/3  */

/* modulo 42 - pagina de Checkout - criando o componente de dados de entrega 1/2  */

import React, { Component } from 'react';
import FormSimples from '../../components/Inputs/FormSimples';



/* modulo 49 - integração checkout - conectando e validando os dados do cliente 1/2 */

import { connect } from 'react-redux';

import actions from '../../redux/actions';

import moment from 'moment';

class DadosClienteContainer extends Component {
	componentDidMount() {
		this.props.setForm({
			email: '',
			senha: '',
			nome: this.props.cliente ? this.props.cliente.nome : '',
			CPF: this.props.cliente ? this.props.cliente.cpf : '',
			telefone: this.props.cliente && this.props.cliente.telefones ? this.props.cliente.telefones[0] : '',
			dataDeNascimento: this.props.cliente ? moment(this.props.cliente.dataDeNascimento).format('DD/MM/YYYY') : '',
		});
	}

	componentDidUpdate(prevProps) {
		if (!prevProps.cliente && this.props.cliente) {
			const { nome, cpf, telefones, dataDeNascimento } = this.props.cliente;
			this.props.setForm({
				nome,
				cpf,
				telefone: telefones[0],
				dataDeNascimento: moment(dataDeNascimento).format('DD/MM/YYYY'),
			});
		}
	}

	validate() {
		
	} 


	onChange = (field, e) => {

		this.props.setForm({ [field]: e.target.value }, null).then(
			() => this.validate()
	  )

	}

	renderDadosRegistro() {
		const { email, senha } = this.props.form;

		return (
			<div className='flex-1 flex horizontal'>
				<div className='flex-1'>
					<FormSimples value={email} name='email' placeholder='E-mail' label='E-mail' onChange={(e) => this.onChange('email', e)} />
				</div>

				<div className='flex-1'>
					<FormSimples value={senha} name='senha' placeholder='Senha' label='Senha' type='password' onChange={(e) => this.onChange('senha', e)} />
				</div>
			</div>
		);
	}

	renderDadosUsuario() {
		const { nome, cpf, dataDeNascimento, telefone } = this.props.form;

		return (
			<div className='flex-1 flex vertical'>
				<div className='flex-1'>
					<FormSimples value={nome} name='nome' placeholder='Nome' label='Nome' onChange={(e) => this.onChange('nome', e)} />
				</div>

				<div className='flex-1'>
					<FormSimples value={cpf} name='CPF' placeholder='CPF' label='CPF' onChange={(e) => this.onChange('CPF', e)} />
				</div>

				<div className='flex-1 flex horizontal'>
					<div className='flex-1'>
						<FormSimples
							value={dataDeNascimento}
							name='dataDeNascimento'
							placeholder='DD/MM/YYYY'
							label='Data de Nascimento'
							onChange={(e) => this.onChange('dataDeNascimento', e)}
						/>
					</div>

					<div className='flex-1'>
						<FormSimples value={telefone} name='telefone' placeholder='(34) 1234-5678' label='Telefone/Celular' onChange={(e) => this.onChange('telefone', e)} />
					</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div className='flex-1'>
				<div>
					<h2>DADOS DO CLIENTE</h2>
				</div>
				{!this.props.usuario && this.renderDadosRegistro()}
				{this.renderDadosUsuario()}
			</div>
		);
	}
}

const mapStateToProps = state => ({

	usuario: state.auth.usuario,
	token: state.auth.token,
	cliente: state.cliente.cliente,
	form: state.checkout.form
})

export default connect(mapStateToProps,actions)(DadosClienteContainer);