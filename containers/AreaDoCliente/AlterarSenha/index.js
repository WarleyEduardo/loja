/* modulo 43 - Area do cliente -  dados do cliente e senha - 
  criando  a pagina, componentes e todos o estilo final 2/3
*/

import React, { Component } from 'react';

import MenuAreaDoCliente from '../../Menu/AreaDoCliente';
import FormularioSenha from './FormularioSenha';

class AlterarSenhaContainer extends Component {
	render() {
		return (
			<div className='Dados-Container container-big flex horizontal'>
				<MenuAreaDoCliente />
				<FormularioSenha />
			</div>
		);
	}
}

export default AlterarSenhaContainer;