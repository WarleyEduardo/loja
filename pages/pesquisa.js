/* modulo 39 - loja virtual -  criando arquivos de pasta  */

import React, { Component } from 'react';



/* modulo 41 - pagina de pesquisa criando a pagina de pesquisa e componentes */

import Layout from '../components/Layout';
import Cabecalho from '../containers/Cabecalho';
import Rodape from '../containers/Rodape'
import ProdutosPesquisa from '../containers/Lista/ProdutosPesquisa';


/*modulo 46 - adicionando actions e reducers e alterando os componentes para integração*/

import initialize from '../utils/initialize';
import callBaseData from '../utils/callBaseData';
import { connect } from 'react-redux';
import actions from '../redux/actions'
 

class Pesquisa extends Component {
	 
	static async getInitialProps(ctx) {
		initialize(ctx);
		if (ctx.store) ctx.store.dispatch(actions.fetchTermo(ctx.query.termo))
		return callBaseData([actions.fetchProdutosPesquisa.bind(null, ctx.query.termo)],ctx)
	}

	 render() {
		const {termo} = this.props
		return (
			<Layout title={`Resultados para ${termo ? termo : "-"} |  LOJA IT - melhores produtos de tecnologia`}>
				<Cabecalho />
				<ProdutosPesquisa />
				<Rodape />
			</Layout>
		);
	}
}

const mapStateToProps = state => ({

	termo: state.produto.termo
})

export default connect(mapStateToProps,actions)(Pesquisa);