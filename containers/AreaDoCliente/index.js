/* modulo 43 - pagina de aceso a area do cliente -  
criando componentes de acesso login e cadastro 1/2 */

import React, { Component } from 'react';

import PedidosContainer from './Pedidos';
import AcessoContainer from './Acesso';


/* Modulo 51 - acesso -  login realizando a integração*/

import { connect } from 'react-redux';
import actions from '../../redux/actions';


class AreaDoClienteContainer extends Component{


	
	render() {
		
		return this.props.usuario ? <PedidosContainer /> : <AcessoContainer />;
	}
}

const mapStateToProps = (state) => ({
	usuario: state.auth.usuario,
});


export default connect(mapStateToProps,actions)(AreaDoClienteContainer);