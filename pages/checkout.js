/* modulo 39 - loja virtual -  criando arquivos de pasta  */
/* modulo 42 - pagina de Checkout - criando  a base da pagina de checkout*/

import React, { Component } from 'react';
import Layout from '../components/Layout';
import Cabecalho from '../containers/Cabecalho';
import CheckoutContainer from '../containers/Checkout';
import Rodape from '../containers/Rodape';


/*Módulo 49 atualizando a Page e o Head*/


export default class Checkout extends Component {

	static async getInitialProps({ res }) {
		
		if (res) {
			res.writeHead(302, { location: "/carrinho" });
			res.end();
		}

		return {};
	}

	render() {
		return (
			<Layout title="Checkout | Loja IT - melhores produtos de tecnologia"
			 pagSeguro>
				<Cabecalho simples />
				<CheckoutContainer />
				<Rodape/>
			</Layout>
		);
	}
}
