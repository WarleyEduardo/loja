/* modulo 42 - pagina de Checkout - criando o componente de dados do cliente 1/3  */
import React, { Component } from 'react';
import DadosClienteContainer from '../Cliente/DadosCliente';
import ClienteLogin from '../Cliente/ClienteLogin';

/*Módulo 49 explicando como funciona a parte dos dados do cliente*/

class DadosCliente extends Component{

	render() {

		const { usuario, permissaoInicial, permitir } = this.props;
		
		return usuario || permissaoInicial ?
			<DadosClienteContainer /> :
			<ClienteLogin permitir={permitir} />;
	}
}

export default DadosCliente;