/* modulo 43 - Area do cliente -  Detalhes do pedido - 
 criando a página, componentes e todo o estilo  3/3
*/
import React, { Component } from 'react';

import ListaStatus from '../../../components/Listas/Status';

const REGISTROS = [
	{ data: '08/07/2019', situacao: 'Pagamento em Processamento' },
	{ data: '08/07/2019', situacao: 'Pagamento Aprovado' },
	{ data: '09/07/2019', situacao: 'Pagamento Recebido' },

];

class DetalhesDoPagamento extends Component {
	render() {
		return (
			<div className='flex-1'>
				<div className='Detalhes-Do-Pagamento'>
					<h4>Sobre o Pagamento</h4>
					<br />
					<ListaStatus registros={REGISTROS} />
				</div>
			</div>
		);
	}
}

export default DetalhesDoPagamento;
