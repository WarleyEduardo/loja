/* modulo 39 - loja virtual -  criando arquivos de pasta  */

/* modulo 41 - loja virtual -  paginas de categoria preparando a base ...  */

import Layout from '../../components/Layout';
import Cabecalho from '../../containers/Cabecalho';
import Rodape from '../../containers/Rodape'
import ProdutosCategoria from '../../containers/Lista/ProdutosCategoria';

import React, { Component } from 'react';

/* modulo 45 - Criando actions e reduces e atualizando os componentes das categorias*/

import { connect } from 'react-redux';
import actions from '../../redux/actions';
import initialize from '../../utils/initialize';
import callBaseData from '../../utils/callBaseData';

class Categoria extends Component {

	static async getInitialProps(ctx) {
	   
		initialize(ctx);
		return callBaseData([
			actions.fetchProdutosCategoria.bind(null, ctx.query.id),
			actions.fetchCategoria.bind(null,ctx.query.id)
		    
		],ctx)
   }

	render() {

		const { categoria } = this.props;
		return (
			<div>
				<Layout title={`${categoria ? categoria.nome : "-"} |  LOJA IT - melhores produtos de tecnologia`}>
					<Cabecalho />
					<ProdutosCategoria />
					<Rodape/>
				</Layout>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	
	categoria : state.categoria.categoria
})

export default connect(mapStateToProps,actions)(Categoria);