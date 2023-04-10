/* modulo 42 - pagina de Checkout - criando o componente de enviar os dados do cliente e entrega */

  /*Integrando a parte de login dos dados do cliente (2/2)*/
import React, { Component } from 'react';

class AlertGeral extends Component{

	render() {

		if (!this.props.aviso) return null;
		
		return (
			<div className="alert alert-danger">
				<span>{this.props.aviso.message}</span>
			</div>
		)
	}


}


export default AlertGeral;