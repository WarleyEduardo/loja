/* modulo 42 - pagina de Checkout - criando o componente de dados do cliente 1/3  */
import React, { Component } from 'react';
import DadosClienteContainer from '../Cliente/DadosCliente';
import ClienteLogin from '../Cliente/ClienteLogin';

/*Módulo 49 explicando como funciona a parte dos dados do cliente*/

/*Integrando a parte de login dos dados do cliente (2/2)*/
  
import { connect } from 'react-redux';
import actions from '../../redux/actions';

class DadosCliente extends Component{

	componentDidMount() {
		
		const { usuario, token, cliente } = this.props;
	
		if (usuario && token && !cliente) {

			this.props.fetchCliente(usuario._id, token);
		}
	}

	render() {

		const { usuario, permissaoInicial, permitir } = this.props;
		
		return usuario || permissaoInicial ?
			<DadosClienteContainer /> :
			<ClienteLogin permitir={permitir} />;
	}
}

const mapStateToProps = state => ({

	usuario: state.auth.usuario,
	token: state.auth.token,
	cliente : state.cliente.cliente

})

export default connect(mapStateToProps,actions)(DadosCliente);