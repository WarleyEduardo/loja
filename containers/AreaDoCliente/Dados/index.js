/* modulo 43 - Area do cliente -  dados do cliente e senha - 
  criando  a pagina, componentes e todos o estilo final 1/3
*/

import React, { Component } from 'react';

import MenuAreaDoCliente from '../../Menu/AreaDoCliente';
import FormularioDados from './FormularioDados';

class DadosContainer extends Component{

	render() {
	   return (
		   <div className="Dados-Container container-big flex horizontal">
			   <MenuAreaDoCliente />
			   <FormularioDados/>

			</div>
		)
   }
}

export default DadosContainer;