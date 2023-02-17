/* modulo 43 - Area do cliente -  Detalhes do pedido - 
 criando a página, componentes e todo o estilo  1/3
*/

import React, { Component } from 'react';
import MenuAreaDoCliente from '../Menu/AreaDoCliente';
import PedidoDetalhes from './PedidoDetalhes'; 

class PedidoContainer extends Component{

	render() {
		
		return (
			<div className="Pedido-Container container-big flex horizontal">
				<MenuAreaDoCliente />
				<PedidoDetalhes/>
			</div>
		)
	}

}

export default PedidoContainer;