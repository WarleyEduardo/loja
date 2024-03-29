/* modulo 43 - Area do cliente -  dados do cliente e senha - 
  criando  a pagina, componentes e todos o estilo final 1/3
*/

import React, { Component } from 'react';

import FormSimples from '../../../components/Inputs/FormSimples';
import TextoDados from '../../../components/Texto/Dados';

import { ESTADOS } from '../../../utils';


/* Meus dados - realizando a integração 1/2 */

/* Meus dados - realizando a integração 2/2 */

import { connect } from 'react-redux';

import actions from '../../../redux/actions'
import AlertGeral from '../../../components/Alert/Geral';
import { validateCPF } from '../../../utils/validade';
import {
	formatCEP, formatCPF, formatDataDeNascimento,
	formatNumber, formatTelefone
} from '../../../utils/format';

import moment from 'moment';

class FormularioDados extends Component {
	state = {
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
		erros: {},
	};

	updateState = (cliente) => {
		this.setState({
			nome: cliente.nome,
			cpf: cliente.cpf,
			telefone: cliente.telefones[0],
			dataDeNascimento: moment(cliente.dataDeNascimento).format('DD/MM/YYYY'),
			local: cliente.endereco.local,
			numero: cliente.endereco.numero,
			complemento: cliente.endereco.complemento || '',
			bairro: cliente.endereco.bairro,
			cidade: cliente.endereco.cidade,
			estado: cliente.endereco.estado,
			CEP: cliente.endereco.CEP,
		});
	};

	componentDidMount() {
		if (this.props.cliente) this.updateState(this.props.cliente);
		
	}

	componentDidUpdate(prevProps) {
		if ((!prevProps.cliente && this.props.cliente) || (prevProps.cliente && this.props.cliente &&
			prevProps.cliente.updatedAt !== this.props.cliente.updatedAt))
			this.updateState(this.props.cliente);
		
	   
	}

	validate() {

		const { nome, cpf, telefone, dataDeNascimento, local,
			numero, bairro, cidade, estado, CEP } = this.state;

				const erros = {};

			
				if (!nome) erros.nome = 'Informe aqui o nome';
				if (!cpf || cpf.length !== 14) erros.cpf = 'Informe aqui o cpf';
				if (cpf && cpf.length === 14 && !validateCPF(cpf)) erros.cpf = 'Informe aqui o cpf corretamente';

				if (!telefone || telefone.length < 11) erros.telefone = 'Informe aqui o telefone';
				if (!dataDeNascimento || dataDeNascimento.length !== 10) erros.dataDeNascimento = 'Informe aqui a data de nascimento';

				if (!local) erros.local = 'Informe aqui o endereço';
				if (!numero) erros.numero = 'Informe aqui o numero';
				if (!bairro) erros.bairro = 'Informe aqui o bairro';
				if (!cidade) erros.cidade = 'Informe aqui a cidade';
				if (!estado) erros.estado = 'Informe aqui o estado';
				if (!CEP || CEP.length !== 9) erros.CEP = 'Informe aqui o CEP';
				

		        this.setState({ erros, aviso: null });
		
		                 
		          return Object.keys(erros).length === 0;
		
                 
	  
		
	};


	handleSubmit() {
		
		const { cliente, token } = this.props;
		if (!cliente || !token || !this.validate()) return null;		

		this.props.updateCliente(this.state, cliente._id, token, (error) => {


			if (error) this.setState({ aviso: { status:false, message: error.message } })
			else alert('Dados atualizados com sucesso!')
		} )
	};

	onChange = (field,valor) => this.setState({ [field]: valor}, ()=> this.validate())

	render() {
		const { nome, cpf, telefone, dataDeNascimento, local,
			numero, complemento, bairro, cidade, estado, CEP, erros } = this.state;
		
		const { usuario } = this.props;

		return (
			<div className='flex-4 conteudo-area-cliente'>
				<h2>MEUS DADOS</h2>
				<br />
				<br />
				<div className='form-dados'>
					<div>
						<TextoDados chave='E-mail' valor={usuario ? usuario.email : ''} />
					</div>

					<br />
					<FormSimples label='Nome' erro={erros.nome} onChange={(e) => this.onChange('nome', e.target.value)} value={nome} name='nome' type='text' placeholder='Nome' />

					<FormSimples
						label='CPF'
						erro={erros.cpf}
						onChange={(e) => this.onChange('cpf', formatCPF(e.target.value))}
						value={cpf}
						name='cpf'
						type='text'
						placeholder='CPF'
					/>

					<div className='flex horizontal'>
						<div className='flex-1'>
							<FormSimples
								erro={erros.telefone}
								onChange={(e) => this.onChange('telefone', formatTelefone(e.target.value))}
								label='Telefone'
								value={telefone}
								name='telefone'
								type='text'
								placeholder='Telefone'
							/>
						</div>

						<div className='flex-1'>
							<FormSimples
								erro={erros.dataDeNascimento}
								onChange={(e) => this.onChange('dataDeNascimento', e.target.value)}
								value={dataDeNascimento}
								name='dataDeNascimento'
								type='text'
								placeholder='DD/MM/YYYY'
								label='Data de nascimento'
							/>
						</div>
					</div>

					<br />
					<div className='flex horizontal'>
						<div className='flex-3'>
							<FormSimples
								label='Local'
								erro={erros.local}
								onChange={(e) => this.onChange('local', e.target.value)}
								value={local}
								name='local'
								placeholder='Endereço'
							/>
						</div>

						<div className='flex-1'>
							<FormSimples
								label='Número'
								erro={erros.numero}
								onChange={(e) => this.onChange('numero', formatNumber(e.target.value))}
								value={numero}
								name='numero'
								placeholder='Número'
							/>
						</div>
					</div>
					<div className='flex horizontal'>
						<div className='flex-1'>
							<FormSimples
								label='Complemento'
								onChange={(e) => this.onChange('complemento', e.target.value)}
								value={complemento}
								name='complemento'
								placeholder='Complemento'
							/>
						</div>

						<div className='flex-1'>
							<FormSimples
								label='Bairro'
								erro={erros.bairro}
								onChange={(e) => this.onChange('bairro', e.target.value)}
								value={bairro}
								name='bairro'
								placeholder='Bairro'
							/>
						</div>
					</div>
					<div className='flex horizontal'>
						<div className='flex-1'>
							<FormSimples
								
								erro={erros.cidade}
								onChange={(e) => this.onChange('cidade', e.target.value)}
								value={cidade}
								name='cidade'
								placeholder='Cidade'
								label='Cidade'
							/>
						</div>
						<div className='form-input'>
							<label>Estado</label>
							<select name='estado' value={estado} onChange={(e) => this.onChange('estado', e.target.value)}>
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

					<FormSimples erro={erros.cep} onChange={(e) => this.onChange('cep', formatCEP(e.target.value))} value={CEP} name='CEP' placeholder='12345-789' label='CEP' />
				</div>

				<br />
				<AlertGeral aviso={this.state.aviso} />

				<div className='flex flex-start'>
					<button className='btn btn-primary' onClick={() => this.handleSubmit()}>
						SALVAR
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({


	token: state.auth.token,
	usuario: state.auth.usuario,
	cliente : state.cliente.cliente
})

export default connect(mapStateToProps,actions)(FormularioDados);