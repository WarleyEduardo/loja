/* modulo 43 - pagina de aceso a area do cliente -  
criando componentes de acesso login e cadastro 1/2 */

import React, { Component } from 'react';

import PedidoContainer from './Pedidos';
import AcessoContainer from './Acesso';


class AreaDoClienteContainer extends Component{

	state = { estaLogado: false }
	render() {
		
		return this.state.estaLogado ? <PedidoContainer /> : <AcessoContainer />;
	}
}

export default AreaDoClienteContainer;