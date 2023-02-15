/* modulo 43 - area do cliente -  
criando o componente  de Menu e adicionando o estilo */
import React, { Component } from 'react';
import Paginacao from '../../../components/Paginacao'
import Pedidos from '../../../components/Listas/Pedidos';

/* modulo 43 - Meus Pedidos -  
criando o componente  de Menu e adicionando o estilo */

const PEDIDOS = [
	{   id: 8787812345,
		data: '16/07/2019',
		valor: 189.55,
		status: 'Pago / Entregue',
	},
	{   id: 7787812376,
		data: '18/07/2019',
		valor: 255.55,
		status: 'Pago / Em Trânsito',
	},
	{   id: 9987812365,
		data: '20/07/2019',
		valor: 155.55,
		status: 'Pago / Em Separação',
	},
	{   id: 6587812399,
		data: '28/07/2019',
		valor: 300.20,
		status: 'Pago / - ',
	},
];

class ListaPedidos extends Component {

	state = { atual : 0};

	render() {
		
		return (
			<div className='flex-4 conteudo-area-cliente'>
				<h2>MEUS PEDIDOS</h2>
				<br />
				<Pedidos pedidos={PEDIDOS} />
				<Paginacao
					atual={this.state.atual || 0}
					total={PEDIDOS.length * 4}
					limite={PEDIDOS.length}
					onClick={(numeroAtual) => this.setState({atual:numeroAtual})}
				/>
			</div>
		);
	}
}

export default ListaPedidos;