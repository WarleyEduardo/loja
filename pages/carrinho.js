/* modulo 39 - loja virtual -  criando arquivos de pasta  */


/* modulo 42 - pagina de Carrinho - criando a estrutura da pagina e componentes 1/3 */


import React, { Component } from 'react';

import Layout from '../components/Layout';
import Cabecalho from '../containers/Cabecalho';
import CarrinhoContainer from '../containers/Carrinho';
import Rodape from '../containers/Rodape';


/*Módulo 48 -  Atualizando o arquivo de pages e produto */

import initialize from '../utils/initialize';
import callBaseData from '../utils/callBaseData';
import { connect } from 'react-redux';
import actions from '../redux/actions';


class Carrinho extends Component {


	static async getInitialProps(ctx) {

		initialize(ctx);
		return callBaseData([], ctx);
	}
	

	async componentDidMount() {
		
		await this.props.getUser({token : this.props.token})
	}
	

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

const mapStateToProps = state => ({
	
	token: state.auth.token
});

export default connect(mapStateToProps,actions)(Carrinho)