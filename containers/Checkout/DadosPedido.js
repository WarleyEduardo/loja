/* modulo 42 - pagina de Checkout - criando o componente de dados  de pagamento 2/2*/

import React, { Component } from 'react';

import ListaDeProdutos from '../Carrinho/ListaDeProdutos';


class DadosPedido extends Component {

	render() {
		
		return (
			<div className='Dados-Pedido-Container'>
				<h2>DADOS DO PEDIDO</h2>
				<br />
				<ListaDeProdutos semAlteracoes />
				<br />
				<br/>
			</div>
		);
	}
}

export default DadosPedido;