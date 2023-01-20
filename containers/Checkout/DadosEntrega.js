
/* modulo 42 - pagina de Checkout - criando o componente de dados de entrega 1/2  */

import React, { Component } from 'react';
import FormSimples from '../../components/Inputs/FormSimples';

import { ESTADOS } from '../../utils';

class DadosClienteContainer extends Component {
	state = {
		dadosEntregaIgualDadosCobranca: true,
		local: '',
		numero: '',
		bairro: '',
		complemento: '',
		cidade: '',
		estado: '',
		CEP: '',
		dadosCobranca: {
			local: '',
			numero: '',
			bairro: '',
			complemento: '',
			cidade: '',
			estado: '',
			CEP: '',
		},
	};

	onChange = (field, e) => this.setState({ [field]: e.target.value });

	onChangeCobranca = (field, e) => {
		
		const { state } = this;
		state.dadosCobranca[field] = e.target.value;
		this.setState(state);
	}
		
	

	renderDadosDeEntrega() {
		const { dadosEntregaIgualDadosCobranca, local, numero, bairro, complemento, cidade, estado, CEP } = this.state;

		return (
			<div className='flex-1 flex vertical'>
				<div>
					<h2>DADOS DE ENTREGA </h2>
				</div>

				<div className='flex-1'>
					<FormSimples value={CEP} name='CEP' placeholder='12345-789' label='CEP' onChange={(e) => this.onChange('CEP', e)} />
				</div>

				<div className='flex-1 flex horizontal'>
					<div className='flex-1 flex'>
						<FormSimples value={local} name='local' placeholder='Rua , Avenida' label='Endereço (Rua, Avenida)...' onChange={(e) => this.onChange('local', e)} />
					</div>

					<div className='flex-1 flex'>
						<FormSimples value={numero} name='numero' placeholder='999' label='Número' onChange={(e) => this.onChange('numero', e)} />
					</div>
				</div>
				
				<div className='flex-1 flex horizontal'>
					<div className='flex-1 flex'>
						<FormSimples value={bairro} name='bairro' placeholder='Bairro' label='Bairro' onChange={(e) => this.onChange('bairro', e)} />
					</div>

					<div className='flex-1 flex'>
						<FormSimples value={complemento} name='complemento' placeholder='Complemento' label='Complemento' onChange={(e) => this.onChange('complemento', e)} />
					</div>
				</div>

				<div className='flex-1 flex horizontal'>
					<div className='flex-1 flex'>
						<FormSimples value={cidade} name='cidade' placeholder='Cidade' label='Cidade' onChange={(e) => this.onChange('cidade', e)} />
					</div>

					<div className='flex-1 flex'>
						<select value={estado} onChange={(e) => this.onChange('cidade', e)}>
							<option>Selecione...</option>
							{Object.keys(ESTADOS).map((abbr) => (
								<option key={abbr} value={abbr}>
									{ESTADOS[abbr]}
								</option>
							))}
						</select>
					</div>
				</div>

				<br />
				<div>
					<input
						checked={dadosEntregaIgualDadosCobranca}
						type='checkbox'
						onChange={() => this.setState({ dadosEntregaIgualDadosCobranca : !dadosEntregaIgualDadosCobranca})}
					/>
					<label>&nbsp;Os dados de entrega são iguais aos dados de cobrança</label>
				</div>
			</div>
		);
	}

	renderDadosDeCobranca() {
		const { local, numero, bairro, complemento, cidade, estado, CEP } = this.state.dadosCobranca;

		return (
			<div className='flex-1 flex vertical'>
				<div>
					<h2>DADOS DE COBRANÇA </h2>
				</div>

				<div className='flex-1'>
					<FormSimples value={CEP} name='CEP' placeholder='12345-789' label='CEP' onChange={(e) => this.onChangeCobranca('CEP', e)} />
				</div>

				<div className='flex-1 flex horizontal'>
					<div className='flex-1 flex'>
						<FormSimples
							value={local}
							name='local'
							placeholder='Rua , Avenida'
							label='Endereço (Rua, Avenida)...'
							onChange={(e) => this.onChangeCobranca('local', e)}
						/>
					</div>

					<div className='flex-1 flex'>
						<FormSimples value={numero} name='numero' placeholder='999' label='Número' onChange={(e) => this.onChangeCobranca('numero', e)} />
					</div>
				</div>

				<div className='flex-1 flex horizontal'>
					<div className='flex-1 flex'>
						<FormSimples value={bairro} name='bairro' placeholder='Bairro' label='Bairro' onChange={(e) => this.onChangeCobranca('bairro', e)} />
					</div>

					<div className='flex-1 flex'>
						<FormSimples
							value={complemento}
							name='complemento'
							placeholder='Complemento'
							label='Complemento'
							onChange={(e) => this.onChangeCobranca('complemento', e)}
						/>
					</div>
				</div>

				<div className='flex-1 flex horizontal'>
					<div className='flex-1 flex'>
						<FormSimples value={cidade} name='cidade' placeholder='Cidade' label='Cidade' onChange={(e) => this.onChange('cidade', e)} />
					</div>

					<div className='flex-1 flex'>
						<select value={estado} onChange={(e) => this.onChangeCobranca('cidade', e)}>
							<option>Selecione...</option>
							{Object.keys(ESTADOS).map((abbr) => (
								<option key={abbr} value={abbr}>
									{ESTADOS[abbr]}
								</option>
							))}
						</select>
					</div>
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
						<FormSimples value={telefone} name='telefone' placeholder='(34) 1234-5678' label='Telefone/Celular' onChange={(e) => this.onChange('telefone', e)} />
					</div>
				</div>
			</div>
		);
	}

	render() {
		const { dadosEntregaIgualDadosCobranca } = this.state;
		return (
			<div className='flex-1'>
				{this.renderDadosDeEntrega()}
				{!dadosEntregaIgualDadosCobranca && this.renderDadosDeCobranca()}
			</div>
		);
	}
}

export default DadosClienteContainer;
