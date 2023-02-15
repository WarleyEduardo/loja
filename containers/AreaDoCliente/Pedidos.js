/* modulo 43 - pagina de aceso a area do cliente -  
criando componentes de acesso login e cadastro 1/2 */


/* modulo 43 - area do cliente -  
criando o componente  de Menu e adicionando o estilo */
import React, { Component } from 'react';

import MenuAreaDoCliente from '../Menu/AreaDoCliente';
import ListaPedidos from '../Lista/Pedidos';


class PedidosContainer extends Component{
	
	render() {
	
		return(
		 <div className='Pedidos-Container container-big flex horizontal'>
				<MenuAreaDoCliente />
				<ListaPedidos/>
			</div>
		)
	}
}


export default PedidosContainer;



