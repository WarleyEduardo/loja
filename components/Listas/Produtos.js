/* modulo 41 - loja virtual - criando componente de lista de produto e o card do produto 1/2 */

import React, { Component } from 'react';
import { combineReducers } from 'redux';

import Produto from '../item/Produto';


class Produtos extends Component {
	componentDidMount() {
		var highest = 0;

		const produtosListados = document.querySelectorAll('.produto-title');

		produtosListados.forEach(function (item) {
			if (highest < item.clientHeight) highest = item.clientHeight;
		});

		produtosListados.forEach(function (item) {
			item.style.height = highest + 10 + 'px';
		});
	}

	render() {
		const { produtos, itensPorLinha, produto } = this.props;

		   return(
			<div className='Produtos flex wrap'>
				{produtos.map((item) => {
					if (item._id != produto) return (<Produto item={item} key={item._id} porLinha={itensPorLinha} />);
				})}
			</div>)
		
	}

	renderold() {
		const { produtos, itensPorLinha, produto } = this.props;

		return (
			<div className='Produtos flex wrap'>
				{produtos.map((item) => (		
					/* Modulo 44 - adicionando dados e realizando integração dos componentes da pagina inicial */

					<Produto item={item} key={item._id} porLinha={itensPorLinha} />
				))}
			</div>
		);
	}
}

export default Produtos;
