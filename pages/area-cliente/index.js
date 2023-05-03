/* modulo 39 - loja virtual -  criando arquivos de pasta  */


/* modulo 43 - pagina de aceso a area do cliente -  
criando componentes de acesso login e cadastro 1/2 */



import React, { Component } from 'react';

import Layout from '../../components/Layout';
import Cabecalho from '../../containers/Cabecalho';
import AreaDoClienteContainer from '../../containers/AreaDoCliente';
import Rodape from '../../containers/Rodape';

/* Modulo 51 - acesso -  login realizando a integração*/

import { connect } from 'react-redux';
import actions from '../../redux/actions';

import initialize from '../../utils/initialize';
import callBaseData from '../../utils/callBaseData';


class areaDoCliente extends Component {

	static async getInitialProps(ctx) {
	
		initialize(ctx);
		return callBaseData([],ctx)
	}

	async componentDidMount() {
		
		await this.props.getUser({token: this.props.token})
	}

	render() {
		return (
			<Layout title="Minha conta | LOJA IT - melhores produtos para informática">
				<Cabecalho />
				<AreaDoClienteContainer />
				<Rodape/>
			</Layout>
		);
	}
}

const mapStateToProps = state => ({

	token: state.auth.token


})

export default connect(mapStateToProps,actions)(areaDoCliente);