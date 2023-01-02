/* modulo 39 - loja virtual -  criando arquivos de pasta  */

/* modulo 41 - loja virtual -  paginas de categoria preparando a base ...  */

import Layout from '../../components/Layout';
import Cabecalho from '../../containers/Cabecalho';
import Rodape from '../../containers/Rodape'
import ProdutosCategoria from '../../containers/Lista/ProdutosCategoria';

import React, { Component } from 'react';

class Categoria extends Component {
	render() {
		return (
			<div>
				<Layout title="Acessórios |  LOJA IT - melhores produtos de tecnologia">
					<Cabecalho />
					<ProdutosCategoria />
					<Rodape/>
				</Layout>
			</div>
		);
	}
}

export default Categoria;