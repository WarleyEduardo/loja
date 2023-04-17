/* modulo 42 - pagina de Checkout - criando  a base da pagina de checkout*/

import React, { Component } from 'react';

import DadosCliente from './DadosCliente';
import DadosEntrega from './DadosEntrega';
import SubmitDadosCliente from './SubmitDadosCliente';
import DadosFrete from './DadosFrete';
import DadosPagamento from './DadosPagamento';
import DadosPedido from './DadosPedido';
import CheckoutButton from './CheckoutButton';

/*Módulo 49 explicando como funciona a parte dos dados do cliente*/

import { connect } from 'react-redux';
import actions from '../../redux/actions';

/* Modulo 49 - submit dados do cliente - fazendo a integração e ativando validações (1/2) */

class CheckoutContainer extends Component{

	state = {

		permissaoInicial: false,
		permissaoCheckout : false
	}

	render() {

		const { permissaoInicial, permissaoCheckout } = this.state;
		const {usuario} = this.props
	   
		return (
			<div className='Checkout container'>
				<h2>CONCLUÍNDO SEU PEDIDO</h2>
				<br />
				<DadosCliente
					usuario={usuario}
					permissaoInicial={permissaoInicial}
					permitir={()=> this.setState({permissaoInicial: true})}
				
				/>
				{(permissaoInicial || usuario) && <DadosEntrega />}
				
				{(permissaoInicial || usuario) &&
					<SubmitDadosCliente permitir={()=> this.setState({permissaoCheckout: true})} />
				}
				
				{permissaoCheckout && <DadosFrete />}
				{permissaoCheckout && <DadosPagamento />}
				{permissaoCheckout && <DadosPedido />}			
				{permissaoCheckout && <CheckoutButton />}
			</div>
		);
   }

}

const mapStateToProps = state => ({

	usuario: state.auth.usuario
})

export default connect(mapStateToProps,actions)(CheckoutContainer);
