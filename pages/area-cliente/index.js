/* modulo 39 - loja virtual -  criando arquivos de pasta  */


/* modulo 43 - pagina de aceso a area do cliente -  
criando componentes de acesso login e cadastro 1/2 */



import React, { Component } from 'react';

import Layout from '../../components/Layout';
import Cabecalho from '../../containers/Cabecalho';
import AreaDoClienteContainer from '../../containers/AreaDoCliente/Acesso';
import Rodape from '../../containers/Rodape';
export default class areaDoCliente extends Component {
	render() {
		return (
			<Layout title="Minha conta | LOJA IT - melhores produtos para informática">
				<Cabecalho />
				<AreaDoClienteContainer />
				<Rodape/>
			</Layout>
		);
	}
}
