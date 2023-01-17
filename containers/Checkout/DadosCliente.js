/* modulo 42 - pagina de Checkout - criando o componente de dados do cliente 1/3  */
import React, { Component } from 'react';
import DadosClienteContainer from '../Cliente/DadosCliente';
import ClienteLogin from '../Cliente/ClienteLogin';

class DadosCliente extends Component{
	state = { usuario: true };
	render() {
		return this.state.usuario ? <DadosClienteContainer /> : <ClienteLogin />;
	}
}

export default DadosCliente;