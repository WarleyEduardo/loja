/* modulo 42 - pagina de sucesso -  criando a pagina e componentes  */

import React, { Component } from 'react';

class SucessoContainer extends Component {
	state = {
		pedidoSucesso: true,
		formaPagamento: 'boleto',
	};

	renderBoleto() {
		return (
			<div>
				<p> para finalizar o pedido, realize o pagamento do boleto pelo link abaixo:</p>
				<br />
				<a className='btn btn-success' href='#'>
					IMPRIMIR BOLETO
				</a>
				<br />
			</div>
		);
	}

	renderCartao() {
		return (
			<div>
				<p> o pagamento está sendo processado e você receberá a confirmação em breve pelo e-mail.
					Obrigado pelo pedido
				</p>
			
			</div>
		);
	}

	renderSucesso() {

		const { formaPagamento } = this.state;

		return (
			<div className='Sucesso'>
				<br />
				<h1 className='headline-big'>PEDIDO CONCLUIDO COM SUCESSO</h1>
				<br />
				<br />
				{formaPagamento === 'boleto' ? this.renderBoleto() : this.renderCartao()}
				<br />
			</div>
		);
	}

	renderErro() {
		return (
			<div className='Erro'>
				<br />
				<h1 className='headline-big'>HOUVE UM ERRO COM O SEU PEDIDO</h1>
				<br />
				<br />
				<p>Houve um erro com o seu pedido e ele foi cancelado. por favor refaça seu pedido na loja ou entre em contato para continuar o pedido.</p>
				<br />
			</div>
		);
	}

	render() {
		const { pedidoSucesso } = this.state;

		return (
			<div className='Sucesso-Container Container'>
				
				{ pedidoSucesso ? this.renderSucesso() : this.renderErro()}
			</div>
		);
	}
}

export default SucessoContainer