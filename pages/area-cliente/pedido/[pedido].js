/* modulo  - loja virtual -  criando arquivos de pasta  */


/* modulo 43 - Area do cliente -  Detalhes do pedido - 
 criando a página, componentes e todo o estilo  1/3
*/


import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import Cabecalho from '../../../containers/Cabecalho';
import PedidoContainer from '../../../containers/Pedido';
import Rodape from '../../../containers/Rodape';



 class Pedido extends Component {
	render() {
		return (
			<Layout title="Pedido | LOJA IT -  Melhores produtos em informática">
				<Cabecalho />
				<PedidoContainer />
				<Rodape />
			</Layout>
		);
	}
}


export default Pedido;