/* modulo 43 - Area do cliente -  Detalhes do pedido - 
 criando a página, componentes e todo o estilo  3/3
*/
import React, { Component } from 'react';

import ListaStatus from '../../../components/Listas/Status';


const REGISTROS = [
	{ data: '10/07/2019', situacao: 'Objeto em separação' },
	{ data: '11/07/2019', situacao: 'Objeto entregue na transportadora' },
	{ data: '13/07/2019', situacao: 'Objeto em transito' },
	{ data: '15/07/2019', situacao: 'Objeto em entregue' },
];

class DetalhesDaEntrega extends Component {

	render() {
		
		return (
			<div className="flex-1">
				<div className="Detalhes-Da-Entrega">

					<h4>Sobre a Entrega</h4>
					<br />
					<ListaStatus registros={REGISTROS}/>
				</div>

			</div>
		)
	}
	

}

export default DetalhesDaEntrega;