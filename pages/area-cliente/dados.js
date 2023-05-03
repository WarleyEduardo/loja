/* modulo 39 - loja virtual -  criando arquivos de pasta  */
import React, { Component } from 'react';

/* modulo 43 - Area do cliente -  dados do cliente e senha - 
  criando  a pagina, componentes e todos o estilo final 1/3
*/

import Layout from '../../components/Layout';
import Cabecalho from '../../containers/Cabecalho';
import DadosContainer from '../../containers/AreaDoCliente/Dados';
import Rodape from '../../containers/Rodape';



 class DadosDocliente extends Component {
	render() {
		return (
			<Layout title="Meus Dados | Loja IT -  melhores produtos em informática">
				<Cabecalho />
				<DadosContainer />
				<Rodape/>
			</Layout>
		);
	}
}



export default DadosDocliente; 