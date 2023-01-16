/* modulo 42 - pagina de Carrinho - criando a estrutura da pagina e componentes 1/3 */

import React, { Component } from 'react';

import ListaDeProdutos from './ListaDeProdutos';
import DadosDoCarrinho from './DadosDoCarrinho';

class CarrinhoContainer extends Component{

	render() {		
		return (
			<div className="container Carrinho">
				<h2>Detalhes do Pedido</h2>
				<br />
				<ListaDeProdutos />
				<DadosDoCarrinho/>
			</div>
		)
	}


}

export default CarrinhoContainer;