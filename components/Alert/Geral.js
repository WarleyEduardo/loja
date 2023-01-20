/* modulo 42 - pagina de Checkout - criando o componente de enviar os dados do cliente e entrega */

import React, { Component } from 'react';

class AlertGeral extends Component{

	render() {

		if (!this.props.show) return null;
		
		return (
			<div className="alert alert-danger">
				<span>{this.props.msg}</span>
			</div>
		)
	}


}


export default AlertGeral;