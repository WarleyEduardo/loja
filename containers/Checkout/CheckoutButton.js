/* modulo 42 - pagina de Checkout - criando o componente de dados  de pagamento 2/2*/
import React, { Component } from 'react';

class CheckoutButton extends Component{

	render() {
	   
		return (
			
			<div className="flex flex-right">
				<button className='btn btn-cta btn-success'>
					<span>CONCLUIR PEDIDO</span>
				</button>

			</div>
		)
   }
}

export default CheckoutButton;