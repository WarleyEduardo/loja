/* modulo 39 - loja virtual -  criando arquivos de pasta  */
/* modulo 42 - pagina de Checkout - criando  a base da pagina de checkout*/

import React, { Component } from 'react';
import Layout from '../components/Layout';
import Cabecalho from '../containers/Cabecalho';
import CheckoutContainer from '../containers/Checkout';
import Rodape from '../containers/Rodape';


export default class Checkout extends Component {
	render() {
		return (
			<Layout title="Checkout | Loja IT - melhores produtos de tecnologia">
				<Cabecalho simples />
				<CheckoutContainer />
				<Rodape/>
			</Layout>
		);
	}
}
