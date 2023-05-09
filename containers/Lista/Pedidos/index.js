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


import FormSimples from '../../../components/Inputs/FormSimples';



class ListaPedidos extends Component {
	state = {
		atual: 0,
		limit: 15,
		dtInicial: '',
		dtFinal: '',
	};

	componentDidMount() {
		this.fetchPedidos();
	}

	componentDidUpdate() {
		const { pedidos } = this.props;
		if (!pedidos) this.fetchPedidos();
	}

	changePagina = (numeroAtual) => {
		this.setState({ atual: numeroAtual }, () => this.fetchPedidos());
	};

	fetchPedidos() {
		const { token, cliente, fetchPedidos } = this.props;
		const { atual, limit } = this.state;
		if (token && cliente) fetchPedidos({ offset: atual, limit, token });
	}

	fetchPedidosData() {
		const { token, cliente, fetchPedidos, fetchPedidosData } = this.props;
		const { atual, limit, dtInicial, dtFinal } = this.state;
		
		if (!token) return null;
		if (!cliente) return null;

		if (token && cliente) fetchPedidos({ offset: atual, limit, token });

		if (dtInicial === '' || dtFinal === '' || dtInicial.length < 10 || dtFinal.length < 10) {
			return null;
		}
		
		this.setState({ atual: 0}, () => {
			fetchPedidosData({ offset: atual, limit, token, dtInicial, dtFinal });
		});
	}

	onChange(field, value) {
		this.setState({ [field]: value }, () => this.fetchPedidosData());
	}

	render() {
		const { pedidos } = this.props;

		const { dtInicial, dtFinal } = this.state;

		return (
			<div className='flex-4 conteudo-area-cliente'>
				<h2>MEUS PEDIDOS</h2>

				<div className='filtro-data flex flex horizontal'>
					<FormSimples type='date' label='Inicial' value={dtInicial} onChange={(e) => this.onChange('dtInicial', e.target.value)} />

					<FormSimples type='date' label='Final' value={dtFinal} onChange={(e) => this.onChange('dtFinal', e.target.value)} />
				</div>
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