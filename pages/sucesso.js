/* modulo 39 - loja virtual -  criando arquivos de pasta  */

/* modulo 42 - pagina de sucesso -  criando a pagina e componentes  */

import React, { Component } from 'react';

import Layout from '../components/Layout';
import Cabecalho from '../containers/Cabecalho';
import SucessoContainer from '../containers/Sucesso';
import Rodape from '../containers/Rodape';



class Sucesso extends Component {
	render() {
		return (
			<Layout title="LOJA IT - melhores produtos em Informática">
				<Cabecalho simples />
				<SucessoContainer/>
				<Rodape/>				
			</Layout>
		);
	}
}



export default Sucesso;
