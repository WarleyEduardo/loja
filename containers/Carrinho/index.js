/* modulo 42 - pagina de Carrinho - criando a estrutura da pagina e componentes 1/3 */

import React, { Component } from 'react';

import ListaDeProdutos from './ListaDeProdutos';
import DadosDoCarrinho from './DadosDoCarrinho';

/*Módulo 48 -  configurando o Carrinho inicial */

import actions from '../../redux/actions';

import { connect } from 'react-redux';


class CarrinhoContainer extends Component{


	componentDidMount() {		
		
			
		this.props.setCarrinho();
	
	}

	componentDidUpdate(prevProps) {

		
	   
		const { carrinho } = this.props;
		
	
		if (carrinho && carrinho[0] && 
			  carrinho[0].produto && !carrinho[0].produto_id 	
		) {
			
			carrinho.forEach((item, idx) => {

				console.log('prod',item.produto);
								 
				this.props.fetchProdutoCarrinho(item.produto, idx);

				if (item.produto.titulo) this.props.fetchVariacoesCarrinho(item.variacao, item.produto, idx);
			 } )
		}
   }

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

const mapStateToProps = state => ({

	carrinho : state.carrinho.carrinho
})

export default connect(mapStateToProps,actions)(CarrinhoContainer);