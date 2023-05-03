/* modulo 42 - pagina de sucesso -  criando a pagina e componentes  */

import React, { Component } from 'react';


/*Modulo 50 -  integrando a página de sucesso e mudanças necessárias*/

import { connect } from 'react-redux';

import actions from '../../redux/actions';

class SucessoContainer extends Component {
	renderBoleto() {
		const { pagamento } = this.props;

		console.log('meu boleto',pagamento.payload[0].paymentLink)
		return (
			<div>
				<p> para finalizar o pedido, realize o pagamento do boleto pelo link abaixo:</p>
				<br />
				<a className='btn btn-success'
					href={pagamento.payload[0].paymentLink}
					target='_blank'
					rel='noopener noreferrer'>
					IMPRIMIR BOLETO
				</a>
				<br />
			</div>
		);
	}

	renderCartao() {
		return (
			<div>
				<p> o pagamento está sendo processado e você receberá a confirmação em breve pelo e-mail. Obrigado pelo pedido</p>
			</div>
		);
	}

	renderSucesso() {
		const { pagamento } = this.props;

		return (
			<div className='Sucesso'>
				<br />
				<h1 className='headline-big'>PEDIDO CONCLUIDO COM SUCESSO</h1>
				<br />
				<br />
				{pagamento.forma === 'boleto' ? this.renderBoleto() : this.renderCartao()}
				<br />
			</div>
		);
	}

	renderErro(errors) {
		return (
			<div className='Erro'>
				<br />
				<h1 className='headline-big'>HOUVE UM ERRO COM O SEU PEDIDO</h1>
				<br />
				<br />
				<p>Houve um erro com o seu pedido e ele foi cancelado. por favor refaça seu pedido na loja ou entre em contato para continuar o pedido.</p>
				{errors.map((item, index) => (
					<p key={index}>{`${item.code}  -   ${item.message}`}</p>
				))}
				<br />
			</div>
		);
	}

	render() {
		const { pagamento } = this.props;

		return <div className='Sucesso-Container Container'>{!pagamento.payload[0].errors ? this.renderSucesso() : this.renderErro(pagamento.payload[0].errors)}</div>;
	}
}

const mapStateToProps = (state) => ({
	pedido: state.checkout.novoPedido,
	pagamento: state.checkout.novoPagamento,
});

export default connect(mapStateToProps,actions)(SucessoContainer);