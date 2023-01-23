/* modulo 42 - pagina de Checkout - criando  a base da pagina de checkout*/

import React, { Component } from 'react';

import DadosCliente from './DadosCliente';
import DadosEntrega from './DadosEntrega';
import SubmitDadosCliente from './SubmitDadosCliente';
import DadosFrete from './DadosFrete';
import DadosPagamento from './DadosPagamento';
import DadosPedido from './DadosPedido';
import CheckoutButton from './CheckoutButton';

class CheckoutContainer extends Component{

	render() {
	   
		return (
			<div className='Checkout container'>
				<h2>CONCLUÍNDO SEU PEDIDO</h2>
				<br />
				<DadosCliente />
				<DadosEntrega />
				<SubmitDadosCliente />
				<DadosFrete />
				<DadosPagamento />
				<DadosPedido />			
		        <CheckoutButton/>
			</div>
		);
   }

}

export default CheckoutContainer;
