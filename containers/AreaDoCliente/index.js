/* modulo 43 - pagina de aceso a area do cliente -  
criando componentes de acesso login e cadastro 1/2 */

import React, { Component } from 'react';

import PedidosContainer from './Pedidos';
import AcessoContainer from './Acesso';


class AreaDoClienteContainer extends Component{

	state = { estaLogado: true }
	
	render() {
		
		return this.state.estaLogado ? <PedidosContainer /> : <AcessoContainer />;
	}
}

export default AreaDoClienteContainer;