/* modulo 43 - pagina de aceso a area do cliente -  
criando componentes de acesso login e cadastro 1/2 */

import React, { Component } from 'react';

import { ESTADOS } from '../../../utils';

import FormSimples from '../../../components/Inputs/FormSimples';

/*modulo 51 -  acesso - cadastro - realizando integração*/

import { connect } from 'react-redux';
import actions from '../../../redux/actions';
import AlertGeral from '../../../components/alert/Geral';
import { validateCPF } from '../../../utils/validade';

import {
	formatCPF, formatTelefone,
	formatNumber,	formatDataDeNascimento
} from '../../../utils/format'

import { consultaCep } from '../../../utils/ConsultaCep';





class CadastroContainer extends Component {
	state = {
		email: '',
		senha: '',

		nome: '',
		cpf: '',
		telefone: '',
		dataDeNascimento: '',

		local: '',
		numero: '',
		complemento: '',
		bairro: '',
		cidade: '',
		estado: '',
		CEP: '',
		aviso: null,
		erros: {}
	};

	validate() {


		const { email, senha, nome, cpf, telefone, dataDeNascimento, local, numero,  bairro, cidade, estado, CEP } = this.state;

		const erros = {};
		

		if (!email) erros.email = "Informe  o email";
		if (!senha) erros.senha = 'Informe a senha';
		if (!nome) erros.nome = 'Informe aqui o nome';
		if (!cpf || cpf.length !== 14) erros.cpf = 'Informe aqui o cpf';
		if (cpf && cpf.length === 14 && !validateCPF(cpf)) erros.cpf = 'Informe aqui o cpf corretamente';
		
		if (!telefone || telefone.length < 11 ) erros.telefone = 'Informe aqui o telefone';
		if (!dataDeNascimento || dataDeNascimento.length !== 10) erros.dataDeNascimento = 'Informe aqui a data de nascimento';
		
		if (!local) erros.local = 'Informe aqui o endereço';
		if (!numero) erros.numero = 'Informe aqui o numero';
		if (!bairro) erros.bairro = 'Informe aqui o bairro';
		if (!cidade) erros.cidade = 'Informe aqui a cidade';
		if (!estado) erros.estado = 'Informe aqui o estado';
		if (!CEP || CEP.length !== 9) erros.CEP = 'Informe aqui o CEP';


		this.setState({ erros, aviso: null });
		

		return (Object.keys(erros) === 0);


	}

	handleSubmit() {
		
		if (!this.validate()) return;
         
		this.props.newCliente(this.state, (error) => {
			
			if (error) this.setState({aviso: {status: false, message: error.message}})
		})



	};

	onchange = (field, value) => this.setState({ [field]: value }, () => this.validate());

	

     async onchangeCep (field, value) {

		if (value.length === 9) {

			 const  endereco   = await consultaCep(value);

				this.setState(
				{
					local: endereco.local,
					bairro: endereco.bairro,
					cidade: endereco.cidade,
					estado: endereco.estado,
				},
				() => this.validate()
			   )

		}
		
		 this.setState({ [field]: value }, () => this.validate());
	};


	render() {
		const { email, senha, nome, cpf, telefone, dataDeNascimento, local, numero, complemento, bairro, cidade, estado, CEP ,erros , aviso } = this.state;

		return (
			<div className='Cadastro-Container'>
				<h2 className='text-center'>Criar Conta</h2>
				<br />
				<br />
				<div className='form-cadastro'>
					<FormSimples erro={erros.email} value={email} name='email' type='email' placeholder='Email' onChange={(e) => this.onchange('email', e.target.value)} />

					<FormSimples erro={erros.senha} value={senha} name='senha' type='password' placeholder='Senha' onChange={(e) => this.onchange('senha', e.target.value)} />
					<br />

					<FormSimples erro={erros.nome} value={nome} name='nome' type='text' placeholder='Nome' onChange={(e) => this.onchange('nome', e.target.value)} />

					<FormSimples erro={erros.cpf} value={cpf} name='cpf' type='text' placeholder='CPF' onChange={(e) => this.onchange('cpf', formatCPF(e.target.value))} />

					<div className='flex horizontal'>
						<div className='flex-1'>
							<FormSimples
								erro={erros.telefone}
								label='Telefone'
								value={telefone}
								name='telefone'
								type='text'
								placeholder='Telefone'
								onchange={(e) => this.onchange('telefone', formatTelefone(e.target.value))}
							/>
						</div>

						<div className='flex-1'>
							<FormSimples
								erro={erros.dataDeNascimento}
								value={dataDeNascimento}
								name='dataDeNascimento'
								type='text'
								placeholder='DD/MM/YYYY'
								label='Data de nascimento'
								onChange={(e) => this.onchange('dataDeNascimento', formatDataDeNascimento(e.target.value))}
							/>
						</div>
					</div>

					<br />

					<div className='flex horizontal'>
						<div className='flex-3'>
							<FormSimples erro={erros.local} value={local} name='local' placeholder='Endereço' onChange={(e) => this.onchange('local', e.target.value)} />
						</div>

						<div className='flex-1'>
							<FormSimples
								erro={erros.numero}
								value={numero}
								name='numero'
								placeholder='Número'
								onChange={(e) => this.onchange('numero', formatNumber(e.target.value))}
							/>
						</div>
					</div>

					<div className='flex horizontal'>
						<div className='flex-1'>
							<FormSimples value={complemento} name='complemento' placeholder='Complemento' onChange={(e) => this.onchange('complemento', e.target.value)} />
						</div>

						<div className='flex-1'>
							<FormSimples erro={erros.bairro} value={bairro} name='bairro' placeholder='Bairro'
								onChange={(e) => this.onchange('bairro', e.target.value)} />
						</div>
					</div>
					
					<div className='flex horizontal'>
						<div className='flex-1'>
							<FormSimples
								erro={erros.cidade}
								value={cidade}
								name='cidade'
								placeholder='Cidade'
								label='Cidade'
								onChange={(e) => this.onchange('cidade', e.target.value)}
							/>
						</div>

						<div className='form-input'>
							<label>Estado</label>
							<select name='estado' value={estado} onChange={(e) => this.onchange('estado', e.target.value)}>
								<option>Selecione seu Estado</option>
								{Object.keys(ESTADOS).map((abbr) => (
									<option key={abbr} value={abbr}>
										{ESTADOS[abbr]}
									</option>
								))}
							</select>

							{erros.estado && <small className='erro'>{erros.estado}</small>}
						</div>
					</div>

					<FormSimples erro={erros.CEP} value={CEP} name='CEP' placeholder='12345-789' label='CEP' onChange={(e) => this.onchangeCep('CEP', e.target.value)} />
					<br />

					<AlertGeral aviso={aviso} />

					<div className='flex flex-center'>
						<button className='btn btn-primary' onClick={() => this.handleSubmit()}>
							CADASTRAR
						</button>
					</div>
					<br />
					<hr />
					<div className='link-acesso text-center'>
						<span onClick={this.props.changeAcesso}>Já tem conta? clique aqui para logar</span>
					</div>
				</div>
			</div>
		);
	}
}



export default connect(null,actions)(CadastroContainer);
