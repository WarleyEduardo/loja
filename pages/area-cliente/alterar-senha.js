/* modulo 39 - loja virtual -  criando arquivos de pasta  */

import React, { Component } from 'react';

/* modulo 43 - Area do cliente -  dados do cliente e senha - 
  criando  a pagina, componentes e todos o estilo final 2/3
*/

import Layout from '../../components/Layout';
import Cabecalho from '../../containers/Cabecalho';
import AlterarSenhaContainer from '../../containers/AreaDoCliente/AlterarSenha';
import Rodape from '../../containers/Rodape';


/* modulo 51 - alterar senha - realizando a integração*/

import { connect } from 'react-redux';
import actions from '../../redux/actions';
import initialize from '../../utils/initialize';
import callBaseData from '../../utils/callBaseData';


class AlterarSenha extends Component {
	static async getInitialProps(ctx) {
		initialize(ctx);
		return callBaseData([], ctx);
	}

	async componentDidMount() {
		await this.props.getUser({ token: this.props.token });
	}
	render() {
		return (
			<Layout title='Alterar Senha | Loja IT -  melhores produtos em Informática'>
				<Cabecalho />
				<AlterarSenhaContainer />
				<Rodape />
			</Layout>
		);
	}
}

const mapStateToProps = state => ({
	
	token : state.auth.token
})

export default connect(mapStateToProps,actions)(AlterarSenha);