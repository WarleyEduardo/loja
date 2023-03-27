/* modulo 42 - pagina de Carrinho - criando a estrutura da pagina e componentes 1/3 */
/* modulo 42 - pagina de Carrinho - criando a estrutura da pagina e componentes 2/3 */

import React, { Component } from 'react';

import { formatMoney } from '../../utils';

/*Modulo 48 -  integrando a lista de produtos */
import { baseImg } from '../../config';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { addCart } from '../../utils/cart';


class ListaDeProdutos extends Component {
	renderCabecalhoCarrinho(semAlteracoes) {
		return (
			<div className='carrinho-cabecalho no-mb-flex flex'>
				<div className='flex-4'></div>

				<div className='headline flex-1 flex flex-center'>
					<h3>Quantidade</h3>
				</div>

				<div className='headline flex-1 flex flex-center'>
					<h3>Preço Unitário</h3>
				</div>

				<div className='headline flex-1 flex flex-center'>
					<h3>Preço total</h3>
				</div>

				{!semAlteracoes && <div className='flex-1'></div>}
			</div>
		);
	}

	changeQuantidade(e, quantidade, item, index) {
		if (Number(e.target.value) < 1) return;
		let novaQuantidade = Number(e.target.value);
		let change = novaQuantidade - quantidade;
		let QtdAtual = item.variacao ? item.variacao.quantidade : item.produto.quantidade;

		if (novaQuantidade >= QtdAtual) return alert('Quantidade indisponível em estoque');

		addCart(
			{
				produto: item.produto._id,
				variacao: item.variacao ? item.variacao._id : null,
				quantidade: change,
				precoUnitario: item.precoUnitario,
			},
			false
		);
		this.props.updateQuantidade(change, index);
	}

	removerProdutoCarrinho(index) {
		
		if (window.confirm("Você deseja realmente remover esse produto?")) {
			
			this.props.removerProduto(index);
		}
	}

	renderProduto(item, semAlteracoes, index) {
		//if (!item.variacao || !item.variacao._id || !item.produto || !item.produto._id) return null;
		if (!item.produto || !item.produto._id) return null;

		const foto = item.variacao && item.variacao.fotos && item.variacao.fotos.length > 0 ? item.variacao.fotos[0] : item.produto.fotos[0];
		const nome = item.variacao ? item.produto.titulo + ' - ' + item.variacao.nome : item.produto.titulo;
		const { quantidade, precoUnitario } = item;

		return (
			<div key={item.produto._id} className='carrinho-item flex'>
				<div className='flex-4 flex'>
					<div className='produto-image flex-2 flex flex-center'>
						<img src={baseImg + foto} alt={nome} width='100px' />
					</div>

					<div className='produto-titulo flex-4 flex flex-start'>
						<h3 className='text-center'>{nome}</h3>
					</div>
				</div>

				<div className='flex-1 flex flex-center'>
					{semAlteracoes ? (
						<span>{quantidade}</span>
					) : (
						<input type='number' value={quantidade} className='produto-quantidade' onChange={(e) => this.changeQuantidade(e, quantidade, item, index)} />
					)}
				</div>

				<div className='flex-1 flex flex-center'>
					<span>{formatMoney(precoUnitario)}</span>
				</div>

				<div className='flex-1 flex flex-center'>
					<span>{formatMoney(precoUnitario * quantidade)}</span>
				</div>
				{!semAlteracoes && (
					<div className='flex-1 flex flex-center' onClick={() => this.removerProdutoCarrinho(index)}>
						<span className='btn-remover'>Remover</span>
					</div>
				)}
			</div>
		);
	}

	renderProdutos(semAlteracoes) {
		return this.props.carrinho.map((item, index) => {
			return this.renderProduto(item, semAlteracoes, index);
		});
	}

	render() {
		const { semAlteracoes, carrinho } = this.props;
		return (
			<div className='Lista-De-Produtos flex vertical'>
				{this.renderCabecalhoCarrinho(semAlteracoes)}
				{carrinho && this.renderProdutos(semAlteracoes)}
			</div>
		);
	}
}

const mapStateToProps = state => ({

	carrinho: state.carrinho.carrinho
});

export default connect(mapStateToProps,actions)(ListaDeProdutos);
