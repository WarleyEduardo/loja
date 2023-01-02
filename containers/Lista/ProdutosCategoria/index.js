/* modulo 41 - loja virtual -  paginas de categoria preparando a base ...  */
/* modulo 41 - loja virtual -  adicionando paginação configurações e estilo */

import React, { Component} from 'react';
import Produtos from '../../../components/Listas/Produtos';
import Paginacao from '../../../components/Paginacao';

const PRODUTOS = [
	{
		id: 1,
		fotos: ['/static/img/mouse-1.png'],
		titulo: 'Mouser Gamer 1',
		preco: 25,
		promocao: 25,
	},

	{
		id: 2,
		fotos: ['/static/img/mouse-4.png'],
		titulo: 'Mouser Gamer 2 para ',
		preco: 35,
		promocao: 25,
	},

	{
		id: 3,
		fotos: ['/static/img/mouse-5.png'],
		titulo: 'Mouser Gamer 3',
		preco: 50,
		promocao: 40,
	},

	{
		id: 4,
		fotos: ['/static/img/mouse-2.png'],
		titulo: 'Mouser Gamer 4',
		preco: 135,
		promocao: 125,
	},
	{
		id: 5,
		fotos: ['/static/img/mouse-1.png'],
		titulo: 'Mouser Gamer 1',
		preco: 25,
		promocao: 25,
	},

	{
		id: 6,
		fotos: ['/static/img/mouse-4.png'],
		titulo: 'Mouser Gamer 2 para ',
		preco: 35,
		promocao: 25,
	},

	{
		id: 7,
		fotos: ['/static/img/mouse-5.png'],
		titulo: 'Mouser Gamer 3',
		preco: 50,
		promocao: 40,
	},

	{
		id: 8,
		fotos: ['/static/img/mouse-2.png'],
		titulo: 'Mouser Gamer 4',
		preco: 135,
		promocao: 125,
	},
	{
		id: 9,
		fotos: ['/static/img/mouse-1.png'],
		titulo: 'Mouser Gamer 1',
		preco: 25,
		promocao: 25,
	},

	{
		id: 10,
		fotos: ['/static/img/mouse-4.png'],
		titulo: 'Mouser Gamer 2 para ',
		preco: 35,
		promocao: 25,
	},

	{
		id: 11,
		fotos: ['/static/img/mouse-5.png'],
		titulo: 'Mouser Gamer 3',
		preco: 50,
		promocao: 40,
	},

	{
		id: 12,
		fotos: ['/static/img/mouse-2.png'],
		titulo: 'Mouser Gamer 4',
		preco: 135,
		promocao: 125,
	},
	{
		id: 13,
		fotos: ['/static/img/mouse-1.png'],
		titulo: 'Mouser Gamer 1',
		preco: 25,
		promocao: 25,
	},

	{
		id: 14,
		fotos: ['/static/img/mouse-4.png'],
		titulo: 'Mouser Gamer 2 para ',
		preco: 35,
		promocao: 25,
	},

	{
		id: 15,
		fotos: ['/static/img/mouse-5.png'],
		titulo: 'Mouser Gamer 3',
		preco: 50,
		promocao: 40,
	},

	{
		id: 16,
		fotos: ['/static/img/mouse-2.png'],
		titulo: 'Mouser Gamer 4',
		preco: 135,
		promocao: 125,
	},
];

class ProdutosCategoria extends Component {

	state = { atual: 0 };

	render() {
		return (
			<div className='container Categoria-Produtos'>
				<br />
				<br />
				<div className='flex flex-center'>
					<h1>ACESSÓRIOS</h1>
				</div>
				<br />
				<Produtos produtos={PRODUTOS} itensPorLinha={4} />
				<Paginacao atual={this.state.atual || 0} total={PRODUTOS.length * 4} limite={PRODUTOS.length} onClick={(numeroAtual) => this.setState({ atual: numeroAtual })} />
			</div>
		);
	}
}

export default ProdutosCategoria;