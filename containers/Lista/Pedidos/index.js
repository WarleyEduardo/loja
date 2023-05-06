/* modulo 43 - area do cliente -  
criando o componente  de Menu e adicionando o estilo */
import React, { Component } from 'react';
import Paginacao from '../../../components/Paginacao'
import Pedidos from '../../../components/Listas/Pedidos';

/* modulo 43 - Meus Pedidos -  
criando o componente  de Menu e adicionando o estilo */


/* Modulos 51 - Pedidos - realizando a integração*/

import { connect } from 'react-redux';
import actions from '../../../redux/actions';



class ListaPedidos extends Component {

	state = {
		atual: 0,
		limit: 15
	
	};


	componentDidMount() {
		
		this.fetchPedidos();
	}

	componentDidUpdate() {
		
		const { pedidos } = this.props;
		if (!pedidos) this.fetchPedidos();
	}

	changePagina = (numeroAtual) => {

		this.setState(
			{ atual: numeroAtual },
			()=> this.fetchPedidos()
		)
	}

	fetchPedidos() {
		
		const { token, cliente, fetchPedidos } = this.props;
		const { atual, limit } = this.state;
		if (token && cliente) fetchPedidos({offset: atual, limit , token})
	}


	


	render() {


		const { pedidos } = this.props;


		

		
		return (
			<div className='flex-4 conteudo-area-cliente'>
				<h2>MEUS PEDIDOS</h2>
				<br />
				
				<Pedidos pedidos={pedidos ? pedidos.docs : []} />
				 
				<Paginacao atual={this.state.atual || 0} total={pedidos ? pedidos.total : 0} limite={this.state.limit} onClick={this.changePagina} />
			</div>
		);
	}
}

const mapStatToProps = state => ({

	pedidos: state.pedido.pedidos,
	token: state.auth.token,
	usuario: state.auth.usuario,
	cliente : state.cliente.cliente

})

export default connect(mapStatToProps,actions)(ListaPedidos);