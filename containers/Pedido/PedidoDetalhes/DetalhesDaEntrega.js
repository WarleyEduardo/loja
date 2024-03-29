/* modulo 43 - Area do cliente -  Detalhes do pedido - 
 criando a página, componentes e todo o estilo  3/3
*/
import React, { Component } from 'react';

import ListaStatus from '../../../components/Listas/Status';


/* Detalhes do Pedido - realizando a integração 2/2 */

import { connect } from 'react-redux';
import moment from 'moment';


class DetalhesDaEntrega extends Component {

	render() {

		
		const { registros } = this.props;
		if (!registros) return null;

		

			const _regs = registros.filter((reg) => reg.tipo === "entrega");

		
			const regs = _regs.map((reg) => ({
			
				data: moment(reg.createdAt).format('DD/MM/YYYY'),
				situacao: reg.situacao
			}));
          
		

		
		return (
			<div className="flex-1">
				<div className="Detalhes-Da-Entrega">

					<h4>Sobre a Entrega</h4>
					<br />
					<ListaStatus registros={regs || []}/>
				</div>

			</div>
		)
	}
	

}

const mapStateToProps = state => ({

	registros: state.pedido.pedidoRegistros 

})

export default connect(mapStateToProps)(DetalhesDaEntrega);