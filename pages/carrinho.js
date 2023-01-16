/* modulo 39 - loja virtual -  criando arquivos de pasta  */


/* modulo 42 - pagina de Carrinho - criando a estrutura da pagina e componentes 1/3 */


import React, { Component } from 'react';

import Layout from '../components/Layout';
import Cabecalho from '../containers/Cabecalho';
import CarrinhoContainer from '../containers/Carrinho';
import Rodape from '../containers/Rodape';

export default class Carrinho extends Component {
	render() {
		return (
			
			<Layout title="Carrinho | LOJA IT - melhores produtos de tecnologia" >
				<Cabecalho simples />
				<CarrinhoContainer />
				<Rodape />
			</Layout>	
			
		);
	}
}
