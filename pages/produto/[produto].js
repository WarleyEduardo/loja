
/* modulo 39 - loja virtual -  criando arquivos de pasta  */


/* modulo 42 - paginas do produto -  criando base da pagina e inicio do Hero  */

import React, { Component } from 'react';

import Layout from '../../components/Layout';
import Cabecalho from '../../containers/Cabecalho';
import Produto from '../../containers/Produto';
import Rodape from '../../containers/Rodape';

 class ProdutoPage extends Component {
	render() {
		return (
			<Layout title="Mouser Gamer 1 | loja IT -  melhores produtos de tecnologia">
				<Cabecalho />
				<Produto />
				<Rodape/>
			</Layout>
		);
	}
}


export default ProdutoPage;