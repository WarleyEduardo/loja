/* modulo 43 - Meus Pedidos -  
criando o componente  de Menu e adicionando o estilo */


import React, { Component } from 'react';
import { formatMoney } from '../../utils';
import Link from 'next/link';

class PedidoCard extends Component{

	render() {
		
		const { pedido } = this.props;
		const { id, data, valor, status } = pedido;
		
		return (
			<div className='Pedido-Card flex'>
				<div className='flex-1 flex-start'>
					<span>{data}</span>
				</div>

				<div className='flex-1 flex-start'>
					<span>{formatMoney(valor)}</span>
				</div>

				<div className='flex-3 flex-start'>
					<span>{status}</span>
				</div>

				<div className='flex-1 flex-start'>
					<Link href={`/area-cliente/pedido/${id}`}>
						<span className='btn btn-primary btn-sm'>DETALHES</span>
					</Link>
				</div>
			</div>
		);
	}
}

export default PedidoCard;