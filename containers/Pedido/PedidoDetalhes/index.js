/* modulo 43 - Area do cliente -  Detalhes do pedido - 
 criando a página, componentes e todo o estilo  1/3
*/
import React, { Component } from 'react';
import DadosDoPedido from './DadosDoPedido';
import DetalhesDaEntrega from './DetalhesDaEntrega';
import DetalhesDoPagamento from './DetalhesDopagamento'

class PedidoDetalhes extends Component{

	render() {
		
		return (
			<div className='flex-4 conteudo-area-cliente'>
				<div className='flex flex-start'>
					<h2>Pedido #6kF789AB &nbsp;</h2>
					<button className='btn btn-primary btn-sm'>CANCELAR</button>
				</div>

				<br />
				<div>
					<DadosDoPedido />
				</div>
				<br />
				<br />
				
				<div className="flex horizontal">
					<DetalhesDaEntrega />
					<DetalhesDoPagamento/>
				</div>
		
			</div>
		);
	}
}

export default PedidoDetalhes;