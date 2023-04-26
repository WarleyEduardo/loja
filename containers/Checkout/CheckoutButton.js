/* modulo 42 - pagina de Checkout - criando o componente de dados  de pagamento 2/2*/
import React, { Component } from 'react';

/* modulo 49 - Botão final de checkout integrando componentes e funcionalidades*/

import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { getCart } from '../../utils/cart';

/* modulo 49 - Botão final de checkout - finalizando componente*/
import AlertGeral from '../../components/Alert/Geral';

import { validateCPF } from '../../utils/validade';

class CheckoutButton extends Component {
	state = { disabled: false, aviso: null };
	toggleDisabled = () => this.setState({ disable: !this.state.disabled });

	calcularValorTotal(carrinho, freteSelecionado) {
		const valorProdutos = carrinho.reduce((all, item) => all + Number(item.precoUnitario) * Number(item.quantidade), 0);

		const valorFrete = Number(freteSelecionado.Valor.replace(',', '.'));
		return valorProdutos + valorFrete;
	}

	validarFormulario() {

		const { nome, cpf, dataDeNascimento, telefone, local, numero, bairro, cidade, estado, CEP,
			dadosCobranca, dadosEntregaIgualDadosCobranca, 
		    cpfBoleto, numeroCartao, nomeCartao, mesCartao , anoCartao, parcelasCartaoSelecionada,
			CVVCartao, credit_card_token
		} =	this.props.form;

		const {tipoPagamentoSelecionado } = this.props;

				const erros = {};

				let temErro = false;

        		if (!nome) {
					erros.nome = 'Nome não informado';
					temErro = true;
				}
				if (!cpf || (cpf.length === 14 && !validateCPF(cpf))) {
					erros.cpf = 'cpf inválido';
					temErro = true;
				}

				if (!dataDeNascimento || dataDeNascimento.length !== 10) {
					erros.dataDeNascimento = 'data de nascimento inválida';
					temErro = true;
				}

				if (!telefone || telefone.length < 11) {
					erros.telefone = 'telefone inválido';
					temErro = true;
				}

				if (!local) {
					erros.local = 'local inválido';
					temErro = true;
				}
				if (!numero) {
					erros.numero = 'número inválido';
					temErro = true;
				}
				if (!bairro) {
					erros.bairro = 'bairro inválido';
					temErro = true;
				}
				if (!cidade) {
					erros.cidade = 'cidade inválida';
					temErro = true;
				}
				if (!estado) {
					erros.estado = 'estado inválido';
					temErro = true;
				}

				if (!CEP || CEP.length !== 9) {
					erros.CEP = 'cep inválido';
					temErro = true;
		}
		

		if (!dadosEntregaIgualDadosCobranca) {
			if (!dadosCobranca.local)  temErro = true;
			if (!dadosCobranca.numero) temErro = true;
			if (!dadosCobranca.bairro) temErro = true;
			if (!dadosCobranca.cidade) temErro = true;
			if (!dadosCobranca.estado) temErro = true;
			if (!dadosCobranca.CEP || !dadosCobranca.CEP.length == 9) temErro = true;
		}


		if (tipoPagamentoSelecionado === 'boleto') {
			if (!cpfBoleto && !cpf) temErro = true;
			if (cpfBoleto && cpfBoleto.length !== 14 && !validateCPF(cpfBoleto)) temErro = true;
		} else {
			if (!numeroCartao || numeroCartao.length !== 19) temErro = true;

			if (!nomeCartao) temErro = true;
			if (!mesCartao || mesCartao.length !== 2) temErro = true;
			if (!anoCartao || anoCartao.length !== 4) temErro = true;
			if (!CVVCartao || CVVCartao.length !== 3) temErro = true;
			if (!parcelasCartaoSelecionada) temErro = true;

			if (!credit_card_token) temErro = true;
		}

		// console.log('erros:' , erros)

		return !temErro; 
		

	};

	validate() {
		const { freteSelecionado, tipoPagamentoSelecionado } = this.props;
		const validarFormulario = this.validarFormulario();
		return validarFormulario && freteSelecionado && tipoPagamentoSelecionado;
	}

	handleSubmit() {
		const { form, freteSelecionado, token, senderHash, tipoPagamentoSelecionado } = this.props;

		const carrinho = getCart();
		const valorTotal = this.calcularValorTotal(carrinho, freteSelecionado);

		if (!this.validate()) return null;

		this.toggleDisabled();

		this.props.novoPedido(form, freteSelecionado, tipoPagamentoSelecionado, valorTotal, token, senderHash, carrinho, (error) => {
			console.log('pedido finalizado');

			if (error) {
				this.setState({ aviso: { status: false, message: error.message } });
			}

			this.toggleDisabled();
		});
	}

	render() {
		return (
			<div className='flex flex-right'>
				<AlertGeral aviso={this.state.aviso} />
				<button className='btn btn-cta btn-success' disable={this.state.disabled} onClick={() => this.handleSubmit()}>
					<span>{this.state.disabled ? 'ENVIANDO...' : 'CONCLUIR PEDIDO'}</span>
				</button>
			</div>
		);
	}
}


const mapStateToProps = state => ({

	carrinho: state.carrinho.carrinho,
	usuario: state.auth.usuario,
	cliente: state.cliente.cliente,
	freteSelecionado: state.carrinho.freteSelecionado,
	form: state.checkout.form,
	token: state.auth.token,
	senderHash: state.checkout.senderHash,
	tipoPagamentoSelecionado: state.checkout.tipoPagamentoSelecionado




})


export default connect(mapStateToProps,actions)(CheckoutButton);