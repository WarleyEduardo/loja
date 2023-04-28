
/* modulo 42 - pagina de Checkout - criando o componente de dados de entrega 1/2  */

import React, { Component } from 'react';
import FormSimples from '../../components/Inputs/FormSimples';

import { ESTADOS } from '../../utils';

/*modulo 49 - Dados de entrega - fazendo alterações no formulário de entrega */

import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { formatNumber, formatCEP } from '../../utils/format';

/* Modulo 49 - colocando validação  nos campos e finalizando o componente */

/*modulo 49 -  extra -  adicionando função para preenchimento

automático dos dados de endereço a partir do cep.
*/
import axios from 'axios';

class DadosClienteContainer extends Component {
	state = {
		erros: { dadosCobranca: {} },
	};

	componentDidMount() {
		this.fetchCliente();
	}

	componentDidUpdate(prevProps) {
		if (!prevProps.cliente && this.props.cliente) this.fetchCliente();
	}

	fetchCliente() {
		const { cliente } = this.props;

		this.props.setForm({
			dadosEntregaIgualDadosCobranca: true,
			local: cliente ? cliente.endereco.local : '',
			numero: cliente ? cliente.endereco.numero : '',
			bairro: cliente ? cliente.endereco.bairro : '',
			complemento: cliente ? cliente.endereco.complemento : '',
			cidade: cliente ? cliente.endereco.cidade : '',
			estado: cliente ? cliente.endereco.estado : '',
			CEP: cliente ? cliente.endereco.CEP : '',
			dadosCobranca: {
				local: cliente ? cliente.endereco.local : '',
				numero: cliente ? cliente.endereco.numero : '',
				bairro: cliente ? cliente.endereco.bairro : '',
				complemento: cliente ? cliente.endereco.complemento : '',
				cidade: cliente ? cliente.endereco.cidade : '',
				estado: cliente ? cliente.endereco.estado : '',
				CEP: cliente ? cliente.endereco.CEP : '',
			},
		});
	}

	validate() {
		const { dadosEntregaIgualDadosCobranca, local, numero, bairro, cidade, estado, CEP, dadosCobranca } = this.props.form;

		const erros = { dadosCobranca: {} };

		if (!local) erros.local = 'Preenchar aqui com o seu endereço';
		if (!numero) erros.numero = 'Preenchar aqui com o seu número';
		if (!bairro) erros.bairro = 'Preenchar aqui com o seu bairro';
		if (!cidade) erros.cidade = 'Preenchar aqui com o a sua cidade';
		if (!estado) erros.estado = 'Selecione o seu estado';
		if (!CEP || !CEP.length == 9) erros.CEP = 'Digite aqui o seu CEP';

		if (!dadosEntregaIgualDadosCobranca) {
			if (!dadosCobranca.local) erros.dadosCobranca.local = 'Preenchar aqui com o seu endereço';
			if (!dadosCobranca.numero) erros.dadosCobranca.numero = 'Preenchar aqui com o seu número';
			if (!dadosCobranca.bairro) erros.dadosCobranca.bairro = 'Preenchar aqui com o seu bairro';
			if (!dadosCobranca.cidade) erros.dadosCobranca.cidade = 'Preenchar aqui com o a sua cidade';
			if (!dadosCobranca.estado) erros.dadosCobranca.estado = 'Selecione o seu estado';
			if (!dadosCobranca.CEP || !dadosCobranca.CEP.length == 9) erros.dadosCobranca.CEP = 'Digite aqui o seu CEP';
		}

		this.setState({ erros });

		return (Object.keys(erros).length === 1) & (Object.keys(erros.dadosCobranca).length === 0);
	}

	onChange = (field, value, prefix) => this.props.setForm({ [field]: value }, prefix).then(() => this.validate());

	onChangeCEP = (field, value, prefix) => {
		
		this.props.setForm({ [field]: value }, prefix).then(() => {
			
			this.validate();
			if (value.length === 9) {
				
				axios.get(`https://viacep.com.br/ws/${value.replace('-', '')}/json`)
					.then((response) => {
						
						this.props.setForm({

							"local": response.data["logradouro"],
							"bairro": response.data["bairro"],
							"cidade": response.data["localidade"],
							"estado": response.data["uf"]
						}, prefix).then( ()=> this.validate())
					})
				.catch(e => console.log(e))
			}
		});


	}

	/*
	onChangeCobranca = (field, e) => {
		const { state } = this;
		state.dadosCobranca[field] = e.target.value;
		this.setState(state);
	};
	*/

	renderDadosDeEntrega() {
		if (!this.props.form) return null;
		const { dadosEntregaIgualDadosCobranca, local, numero, bairro, complemento, cidade, estado, CEP } = this.props.form;

		const { erros } = this.state;

		return (
			<div className='flex-1 flex vertical'>
				<div>
					<h2>DADOS DE ENTREGA </h2>
				</div>

				<div className='flex-1'>
					<FormSimples value={CEP} erro={erros.CEP} name='CEP' placeholder='12345-789' label='CEP' onChange={(e) => this.onChangeCEP('CEP', formatCEP(e.target.value))} />
				</div>

				<div className='flex-1 flex horizontal'>
					<div className='flex-1 flex'>
						<FormSimples
							value={local}
							erro={erros.local}
							name='local'
							placeholder='Rua , Avenida'
							label='Endereço (Rua, Avenida)...'
							onChange={(e) => this.onChange('local', e.target.value)}
						/>
					</div>

					<div className='flex-1 flex'>
						<FormSimples
							value={numero}
							name='numero'
							erro={erros.numero}
							placeholder='999'
							label='Número'
							onChange={(e) => this.onChange('numero', formatNumber(e.target.value))}
						/>
					</div>
				</div>

				<div className='flex-1 flex horizontal'>
					<div className='flex-1 flex'>
						<FormSimples
							value={bairro}
							erro={erros.bairro}
							name='bairro'
							placeholder='Bairro'
							label='Bairro'
							onChange={(e) => this.onChange('bairro', e.target.value)}
						/>
					</div>

					<div className='flex-1 flex'>
						<FormSimples
							value={complemento}
							erro={erros.complemento}
							name='complemento'
							placeholder='Complemento'
							label='Complemento'
							onChange={(e) => this.onChange('complemento', e.target.value)}
						/>
					</div>
				</div>

				<div className='flex-1 flex horizontal'>
					<div className='flex-1 flex'>
						<FormSimples
							value={cidade}
							erro={erros.cidade}
							name='cidade'
							placeholder='Cidade'
							label='Cidade'
							onChange={(e) => this.onChange('cidade', e.target.value)}
						/>
					</div>

					<div className='flex-1 flex vertical form-input'>
						<label>Estado</label>
						<select value={estado} onChange={(e) => this.onChange('estado', e.target.value)}>
							<option>Selecione...</option>
							{Object.keys(ESTADOS).map((abbr) => (
								<option key={abbr} value={abbr}>
									{ESTADOS[abbr]}
								</option>
							))}
						</select>
						{erros.estado && <smal className='erro'>{erros.estado}</smal>}
					</div>
				</div>

				<br />
				<div>
					<input
						checked={dadosEntregaIgualDadosCobranca}
						type='checkbox'
						onChange={() => this.props.setForm({ dadosEntregaIgualDadosCobranca: !dadosEntregaIgualDadosCobranca })}
					/>
					<label>&nbsp;Os dados de entrega são iguais aos dados de cobrança</label>
				</div>
			</div>
		);
	}

	renderDadosDeCobranca() {
		if (!this.props.form || !this.props.form.dadosCobranca) return null;

		const { local, numero, bairro, complemento, cidade, estado, CEP } = this.props.form.dadosCobranca;

		const { erros } = this.state;

		return (
			<div className='flex-1 flex vertical'>
				<div>
					<h2>DADOS DE COBRANÇA </h2>
				</div>

				<div className='flex-1'>
					<FormSimples
						value={CEP}
						erro={erros.dadosCobranca.CEP}
						name='CEP'
						placeholder='12345-789'
						label='CEP'
						onChange={(e) => this.onChangeCEP('CEP', formatCEP(e.target.value), 'dadosCobranca')}
					/>
				</div>

				<div className='flex-1 flex horizontal'>
					<div className='flex-1 flex'>
						<FormSimples
							value={local}
							erro={erros.dadosCobranca.local}
							name='local'
							placeholder='Rua , Avenida'
							label='Endereço (Rua, Avenida)...'
							onChange={(e) => this.onChange('local', e.target.value, 'dadosCobranca')}
						/>
					</div>

					<div className='flex-1 flex'>
						<FormSimples
							value={numero}
							erro={erros.dadosCobranca.numero}
							name='numero'
							placeholder='999'
							label='Número'
							onChange={(e) => this.onChange('numero', formatNumber(e.target.value), 'dadosCobranca')}
						/>
					</div>
				</div>

				<div className='flex-1 flex horizontal'>
					<div className='flex-1 flex'>
						<FormSimples
							value={bairro}
							erro={erros.dadosCobranca.bairro}
							name='bairro'
							placeholder='Bairro'
							label='Bairro'
							onChange={(e) => this.onChange('bairro', e.target.value, 'dadosCobranca')}
						/>
					</div>

					<div className='flex-1 flex'>
						<FormSimples
							value={complemento}
							erro={erros.dadosCobranca.complemento}
							name='complemento'
							placeholder='Complemento'
							label='Complemento'
							onChange={(e) => this.onChange('complemento', e.target.value, 'dadosCobranca')}
						/>
					</div>
				</div>

				<div className='flex-1 flex horizontal'>
					<div className='flex-1 flex'>
						<FormSimples
							value={cidade}
							erro={erros.dadosCobranca.cidade}
							name='cidade'
							placeholder='Cidade'
							label='Cidade'
							onChange={(e) => this.onChange('cidade', e.target.value, 'dadosCobranca')}
						/>
					</div>

					<div className='flex-1 flex vertical form-input'>
						<label>Estado</label>
						<select value={estado} onChange={(e) => this.onChange('estado', e.target.value, 'dadosCobranca')}>
							<option>Selecione...</option>
							{Object.keys(ESTADOS).map((abbr) => (
								<option key={abbr} value={abbr}>
									{ESTADOS[abbr]}
								</option>
							))}
						</select>
						{erros.dadosCobranca.estado && <smal className='erro'>{erros.dadosCobranca.estado}</smal>}
					</div>
				</div>
			</div>
		);
	}

	/*
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
						<FormSimples value={telefone} name='telefone' placeholder='(34) 1234-5678' label='Telefone/Celular' onChange={(e) => this.onChange('telefone', e)} />
					</div>
				</div>
			</div>
		);
	}
	*/

	render() {
		const { dadosEntregaIgualDadosCobranca } = this.props.form;
		return (
			<div className='flex-1'>
				{this.renderDadosDeEntrega()}
				{!dadosEntregaIgualDadosCobranca && this.renderDadosDeCobranca()}
			</div>
		);
	}
}

const mapStateToProps = state => ({

	usuario: state.auth.usuario,
	cliente: state.cliente.cliente,
	form: state.checkout.form
})

export default connect(mapStateToProps,actions)(DadosClienteContainer);
