/* modulo 39 - loja virtual -  criando arquivos de pasta  */

import React, { Component } from 'react';



/* modulo 41 - pagina de pesquisa criando a pagina de pesquisa e componentes */

import Layout from '../components/Layout';
import Cabecalho from '../containers/Cabecalho';
import Rodape from '../containers/Rodape'
import ProdutosPesquisa from '../containers/Lista/ProdutosPesquisa';


 class Pesquisa extends Component {
	render() {
		return (
			<Layout title='Resultados para mouse |  LOJA IT - melhores produtos de tecnologia'>
				<Cabecalho />
				<ProdutosPesquisa />
				<Rodape />
			</Layout>
		);
	}
}

export default Pesquisa