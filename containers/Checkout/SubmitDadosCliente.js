/* modulo 42 - pagina de Checkout - criando o componente de enviar os dados do cliente e entrega */

import React, { Component } from 'react';
import AlertGeral from '../../components/Alert/Geral';

class SubmitDadosCliente extends Component{

	render() {
		
		return (
			<div>
				<AlertGeral show={true} msg='E-mail já utilizado na loja' />

				<div className='flex flex-left'>
					<button className="btn btn-sucess btn-cta"
						onClick={() => alert('continuar pedido')}>
						CONTINUAR PEDIDO
					</button>
				</div>
			</div>
		);
	}
}


export default SubmitDadosCliente;