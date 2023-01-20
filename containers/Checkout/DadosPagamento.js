/* modulo 42 - pagina de Checkout - criando o componente de dados  de pagamento*/
import React, { Component } from 'react';

import FormRadio from '../../components/Inputs/FormRadio';
import FormSimples from '../../components/Inputs/FormSimples';

class DadosPagamento extends Component {
	state = {
		opcaoPagamentoSelecionada: 'boleto',
		CPF:""
	};

	renderOpcoesPagamento() {
		const { opcaoPagamentoSelecionada } = this.state;

		return (
			<div className='flex horizontal'>
				<div className='flex-1'>
					<FormRadio
						name='tipo_pagamento_selecionado'
						checked={opcaoPagamentoSelecionada === 'boleto'}
						onChange={() => this.setState({ opcaoPagamentoSelecionada: 'boleto' })}
						label='Boleto Bancário'
					/>
				</div>
				<div className='flex-1'>
					<FormRadio
						name='tipo_pagamento_selecionado'
						checked={opcaoPagamentoSelecionada === 'cartao'}
						onChange={() => this.setState({ opcaoPagamentoSelecionada: 'cartao' })}
						label='Cartão de Crédito'
					/>
				</div>
			</div>
		);
	}

	onChange = (field, e) => this.setState({ [field]: e.target.value });

	renderPagamentoComBoleto() {
		const { nomeCartao, numeroCartao, CVVCartao , mesCartao, anoCartao } = this.state;
		return (
			<div className='Dados-Pagamento'>
				<FormSimples value={nomeCartao}
					nome='nomeCartao'
					Placeholder='Nome como escrito no cartão'
					label='Nome completo no cartão'
					onChange={() => this.onChange('nomeCartao', e)} />
				<div className="teste">
					
				 </div>
			</div>
		);
	}

	renderPagamentoComCartao(){
		return (
			<div className='Dados-Pagamento'>
				<FormSimples value={CPF}
					nome='CPF'
					Placeholder='CPF'
					label='CPF'
					onChange={() => this.onChange('CPF', e)} />
			</div>
		);
	}

	render() {
		const { opcaoPagamentoSelecionada } = this.state;
		return (
			<div className='Dados-Pagamento-Container'>
				<h2>DADOS DE PAGAMENTO</h2>
				<br />
				{this.renderOpcoesPagamento()}
				<br />
				<br/>
				{opcaoPagamentoSelecionada === 'boleto' && this.renderPagamentoComBoleto()}
				{opcaoPagamentoSelecionada === 'cartao' && this.renderPagamentoComCartao()}
			</div>
		);
	}
}

export default DadosPagamento;