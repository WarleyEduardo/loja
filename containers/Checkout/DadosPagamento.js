/* modulo 42 - pagina de Checkout - criando o componente de dados  de pagamento 1/2 */
import React, { Component } from 'react';

import FormRadio from '../../components/Inputs/FormRadio';
import FormSimples from '../../components/Inputs/FormSimples';

/* módulo 49 -  Dados de pagamento - preparando a base, actions e  funções do pagseguro */

import { connect } from 'react-redux';
import actions from '../../redux/actions';

/* modulo 49 -  Dados de pagamento integrando componentes e funcionalidades*/

import { formatCPF } from '../../utils/format';

class DadosPagamento extends Component {
	
	
	state = {
		opcaoPagamentoSelecionada: 'boleto',
		CPF: "",
		numeroCartao: "",
		nomeCartao: "",
		CVVCartao: "",
		mesCartao: "",
		anoCartao: ""
	};

	

	componentDidMount() {
		
		this.props.getSessionPagamento();
	}


	componentDidUpdate(prevProps) {

		const {

			numeroCartao,
			nomeCartao,
			CVVCartao,
			mesCartao,
			anoCartao,
			credit_card_token,
			bandeira_cartao,
			parcelasCartao

		} = this.props.form;
		
		if (!bandeira_cartao && numeroCartao && numeroCartao.split(' ').join('').length > 7) {
			
			this.getBrand();
		}

		if (			
			!credit_card_token && numeroCartao && numeroCartao.splic(' ').join('').length === 16 &&
			mesCartao && mesCartao.length === 2 &&
			anoCartao && anoCartao.length === 4 &&
			CVVCartao && CVVCartao.length === 3 &&
			bandeira_cartao
		) this.submitCartaoHash();


		if ((!parcelasCartao && bandeira_cartao) &&
			(parcelasCartao && bandeira_cartao &&
			prevProps.freteSelecionado !== this.props.freteSelecionado)) this.getParcelas()	

	}


	getBrand() {
		
		const { numeroCartao } = this.props.form;
		pagSeguroDirectPayment.getBrand({

			cardbin: numeroCartao.split(' ').join('').slice(0, 6),
			success: (r) => this.props.setForm({ bandeira_cartao: r.brand }),
			error : (r) => console.log(r)
		})
	}


	submitCartaoHash() {
		const {

			numeroCartao,
			mesCartao,
			anoCartao,
			CVVCartao,
			bandeira_cartao } = this.props.form;
		
		const params = {
			cardNumber: anoCartao.split(' ').join(''),
			brand: bandeira_cartao,
			cvv: CVVCartao,
			expirationMonth: mesCartao,
			expirationYear: anoCartao,
			success: (r) => this.props.setForm({})
		}
	}

	renderOpcoesPagamento() {
		const { tipoPagamentoSelecionado } = this.props;

		return (
			<div className='flex horizontal'>
				<div className='flex-1'>
					<FormRadio
						name='tipo_pagamento_selecionado'
						checked={tipoPagamentoSelecionado === 'boleto'}
						onChange={() => this.props.setTipoPagamento('boleto')}
						label='Boleto Bancário'
					/>
				</div>
				<div className='flex-1'>
					<FormRadio
						name='tipo_pagamento_selecionado'
						checked={tipoPagamentoSelecionado === 'cartao'}
						onChange={() => this.setTipoPagamento('cartao')}
						label='Cartão de Crédito'
					/>
				</div>
			</div>
		);
	}

	validate() {
		

	}

	onChange = (field, value) => this.props.setForm({ [field]: value }).then(()=> this.validate());

	renderPagamentoComBoleto() {
		
		const { cpf, cpfBoleto } = this.props.form;
		return (
			<div className='Dados-Pagamento'>
				<FormSimples value={cpfBoleto || cpf}
					nome='CPF'
					placeholder='CPF'
					label='CPF'
					onChange={(e) => this.onChange("cpfBoleto" ,formatCPF(e.target.value))} />
			</div>
		);
	}


	renderPagamentoComCartao() {
		const { nomeCartao, numeroCartao, CVVCartao , mesCartao, anoCartao } = this.state;
		return (
			<div className='Dados-Pagamento'>
				<FormSimples
					value={nomeCartao}
					nome='nomeCartao'
					placeholder='Nome como escrito no cartão'
					label='Nome completo no cartão'
					onChange={() => this.onChange('nomeCartao', e)}
				/>
				<div className='flex horizontal'>
					<div className='flex-1'>
						<FormSimples
							value={numeroCartao}
							nome='numeroCartao'
							placeholder='xxxx xxxx xxxx xxxx'
							label='Número do cartão'
							onChange={() => this.onChange('numeroCartao', e)}
						/>
					</div>
					<div className='flex-1'>
						<FormSimples value={CVVCartao} nome='CVVCartao' placeholder='xxxx' label='Código de Segurança do Cartão' onChange={() => this.onChange('CVVCartao', e)} />
					</div>
				</div>
				<div className='form-input'>
					<label>Data de Validade</label>
				</div>
				<div className='flex'>
					<FormSimples value={mesCartao} nome='mesCartao' placeholder='MM' label='MÊs' onChange={() => this.onChange('mesCartao', e)} />
					<span className='slash-pagamento'>&nbsp;/&nbsp;</span>
					<FormSimples value={anoCartao} nome='anoCartao' placeholder='AAAA' label='Ano' onChange={() => this.onChange('anoCartao', e)} />
				</div>
				<br />
				<div className='form-input'>
					<label>Parcelas</label>
				</div>
				<div className='flex'>
					<select name='parcela'>
						<option>Selecione a quantidade de parcelas para pagamento</option>
						<option value='1'>1x de R$ de 105,00 sem juros</option>
						<option value='2'>2x de R$ de 62,50 sem juros</option>
						<option value='3'>3x de R$ de 35,00 sem juros</option>
						<option value='4'>4x de R$ de 31,75 sem juros</option>
						<option value='5'>5x de R$ de 21,00 sem juros</option>
						<option value='6'>6x de R$ de 17,50 sem juros</option>
					</select>
				</div>
			</div>
		);
	}


	render() {
		const { tipoPagamentoSelecionado } = this.props;
		return (
			<div className='Dados-Pagamento-Container'>
				<h2>DADOS DE PAGAMENTO</h2>
				<br />
				{this.renderOpcoesPagamento()}
				<br />
				<br />
				{tipoPagamentoSelecionado === 'boleto' && this.renderPagamentoComBoleto()}
				{tipoPagamentoSelecionado === 'cartao' && this.renderPagamentoComCartao()}
			</div>
		);
	}
}


const mapStateToProps = state => ({

	usuario: state.auth.usuario,
	carrinho: state.carrinho.carrinho,
	cliente: state.cliente.cliente,
	form: state.checkout.form,
	tipoPagamentoSelecionado: state.checkout.tipoPagamentoSelecionado,
	sessionId: state.checkout.senderId,
	senderHash: state.checkout.senderHash,
	freteSelecionado: state.carrinho.freteSelecionado
})

export default connect(mapStateToProps,actions)(DadosPagamento);