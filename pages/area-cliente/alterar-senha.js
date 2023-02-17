/* modulo 39 - loja virtual -  criando arquivos de pasta  */

import React, { Component } from 'react';

/* modulo 43 - Area do cliente -  dados do cliente e senha - 
  criando  a pagina, componentes e todos o estilo final 2/3
*/

import Layout from '../../components/Layout';
import Cabecalho from '../../containers/Cabecalho';
import AlterarSenhaContainer from '../../containers/AreaDoCliente/AlterarSenha';
import Rodape from '../../containers/Rodape';


export default class AlterarSenha extends Component {
	render() {
		return (
			<Layout title="Alterar Senha | Loja IT -  melhores produtos em Informática">
				<Cabecalho />
				<AlterarSenhaContainer />
				<Rodape/>
			</Layout>
		);
	}
}
