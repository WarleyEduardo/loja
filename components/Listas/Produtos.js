/* modulo 41 - loja virtual - criando componente de lista de produto e o card do produto 1/2 */

import React, { Component } from 'react';

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
		{
			const { produtos, itensPorLinha } = this.props;
			
			return (
				
				<div className='Produtos flex wrap'>
					{produtos.map((item) => (
						
						<Produto item={item} key={item.id} porLinha={itensPorLinha} />
					))}
				</div>
			);
			
		}
	}
}

export default Produtos;
