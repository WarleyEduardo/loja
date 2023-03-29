/* modulo 42 - pagina de Carrinho - criando a estrutura da pagina e componentes 2/3 */

import React, { Component } from 'react';
import { formatMoney } from '../../utils';

import Frete from '../../components/Item/Frete';

/*modulo 48 - integrando os dados do carrinho */

import { connect } from 'react-redux';
import actions from '../../redux/actions';

import Link from 'next/link';


class DadosDoCarrinho extends Component {

	renderDadosDoCarrinho() { 

		const { carrinho, freteSelecionado } = this.props;
		const valorPedido = (carrinho || []).reduce((all, item) => all + (Number(item.precoUnitario)
			* Number(item.quantidade)), 0);
		
		const valorFrete = Number(freteSelecionado ? (freteSelecionado.Valor || "0").replace(",", ".") : 0);
		const ValorTotal = valorPedido + valorFrete;

		return (
			<div className='dados-do-carrinho-container  flex-3'>
				<div className='dados-do-carrinho-item flex'>
					<div className='flex-1 flex-center'>
						<p className='headline'>Valor do Pedido:</p>
					</div>

					<div className='flex-1 flex flex-center'>{formatMoney(valorPedido)}</div>
				</div>
				<Frete />
				<div className='dados-do-carrinho-item  flex'>
					<div className=' flex-1'>
						<p className='headline'>Valor Total:</p>
					</div>

					<div className='flex-1 flex flex-center'>{formatMoney(ValorTotal)}</div>
				</div>

				<div className='dados-do-carrinho-item flex flex-right'>
					<Link  href="/checkout">
						<button className='btn btn-success btn-cta'>
							<span>Finalizar Pedido</span>
						</button>
					</Link>
				</div>
			</div>
		);
	}
	

	render() {
		return (
			<div className='Dados-Do-Carrinho flex horizontal'>
				<div className='flex-4'></div>
				{this.renderDadosDoCarrinho()}
			</div>
		);
	}
}

const mapStateToProps = state => ({

	carrinho: state.carrinho.carrinho,
	freteSelecionado : state.carrinho.freteSelecionado


})

export default connect(mapStateToProps,actions)(DadosDoCarrinho);
