/* modulo 37 - loja virtual -  instalando dependencias e preparando o servidor */

/* modulo 41 - loja virtual - criando configuração básica da loja */


import React, { Component } from 'react';

import Layout from '../components/Layout';
import Cabecalho from '../containers/Cabecalho';
/*
import Banners from '../containers/Banners';
import Beneficios from '../containers/Beneficios';
import ProdutosPaginaInicial from '../containers/Lista/ProdutosPaginaInicial';
import Rodape from '../containers/Rodapé';
*/


export default class Index extends Component{

	render() {
		return (
			<Layout title='Loja IT - melhores produtos de informática'>
				<Cabecalho  />
				{/*<Banners />
				<Beneficios />
				<ProdutosPaginaInicial />
				<Rodape/>*/}
			</Layout>
		);
	}
}