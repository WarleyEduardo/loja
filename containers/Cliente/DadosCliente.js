/* modulo 42 - pagina de Checkout - criando o componente de dados do cliente 2/3  */
/* modulo 42 - pagina de Checkout - criando o componente de dados do cliente 3/3  */

/* modulo 42 - pagina de Checkout - criando o componente de dados de entrega 1/2  */

import React, { Component } from 'react';
import FormSimples from '../../components/Inputs/FormSimples';

class DadosClienteContainer extends Component {

	state = {
	  
		email: "",
		senha: "",
		nome: "",
		CPF: "",
		telefone: "",
		dataDeNascimento: ""
  }

	
	renderDadosRegistro() { 

		const { email, senha } = this.state;

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

		const { nome, CPF, dataDeNascimento, telefone } = this.state;

				return (
					<div className='flex-1 flex vertical'>
						<div className='flex-1'>
							<FormSimples value={nome} name='nome' placeholder='Nome' label='Nome' onChange={(e) => this.onChange('nome', e)} />
						</div>

						<div className='flex-1'>
							<FormSimples value={CPF} name='CPF' placeholder='CPF' label='CPF' onChange={(e) => this.onChange('CPF', e)} />
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
								<FormSimples value={telefone}
									name='telefone'
									placeholder='(34) 1234-5678'
									label='Telefone/Celular'
									onChange={(e) => this.onChange('telefone', e)} />
							</div>
						</div>
					</div>
				);
		

	}

	render() {
		return (
			<div className='flex-1'>
				<div>
					<h2>DADOS DO ClIENTE</h2>
				</div>
				{this.renderDadosRegistro()}
				{this.renderDadosUsuario()}
			</div>
		);
	}
}

export default DadosClienteContainer;