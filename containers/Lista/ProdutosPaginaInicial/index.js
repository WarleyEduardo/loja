/* modulo 41 - loja virtual - criando componente de lista de produto e o card do produto 1/2 */
import React, { Component} from 'react';
import Produtos from '../../../components/Listas/Produtos';

const PRODUTOS = [
	{
		id: 19239123,
		fotos: ['/static/img/mouse-1.png'],
		titulo: 'Mouser Gamer 1',
		preco: 25,
		promocao: 25,
	},

	{
		id: 37239137,
		fotos: ['/static/img/mouse-4.png'],
		titulo: 'Mouser Gamer 2 para ',
		preco: 35,
		promocao: 25,
	},

	{
		id: 26239129,
		fotos: ['/static/img/mouse-5.png'],
		titulo: 'Mouser Gamer 3',
		preco: 50,
		promocao: 40,
	},

	{
		id: 48239127,
		fotos: ['/static/img/mouse-2.png'],
		titulo: 'Mouser Gamer 4',
		preco: 135,
		promocao: 125,
	}
];

class ProdutosPaginaInicial extends Component { 

	render() {
		return (
			<div className='container Produtos-Pagina-Inicial flex vertical'>
				<h2>Lançamentos</h2>
				<br />
				
				<Produtos
					produtos={PRODUTOS}
					itensPorLinha = {4}
				/>
		
		  </div>
	  )
  }

}

export default ProdutosPaginaInicial;