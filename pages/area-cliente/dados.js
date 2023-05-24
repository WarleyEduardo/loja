/* modulo 39 - loja virtual -  criando arquivos de pasta  */
import React, { Component } from 'react';

/* modulo 43 - Area do cliente -  dados do cliente e senha - 
  criando  a pagina, componentes e todos o estilo final 1/3
*/



import Layout from '../../components/Layout';
import Cabecalho from '../../containers/Cabecalho';
import DadosContainer from '../../containers/AreaDoCliente/Dados';
import Rodape from '../../containers/Rodape';


/* Meus dados - realizando a integração 2/2 */
import initialize from '../../utils/initialize';
import callBaseData from '../../utils/callBaseData'
import { connect } from 'react-redux';

import actions from '../../redux/actions';



class DadosDocliente extends Component {
	static async getInitialProps(ctx) {
		initialize(ctx);
		return callBaseData([], ctx);
	}

	async componentDidMount() {
		await this.props.getUser({ token: this.props.token });
	}

	render() {
		return (
			<Layout title='Meus Dados | Loja IT -  melhores produtos em informática'>
				<Cabecalho />
				<DadosContainer />
				<Rodape />
			</Layout>
		);
	}
}


const mapStateToProps = state => ({

	token : state.auth.token


})

export default connect(mapStateToProps,actions)(DadosDocliente); 