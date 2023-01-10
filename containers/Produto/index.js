/* modulo 39 - loja virtual -  criando arquivos de pasta  */
/* modulo 42 - paginas do produto -  criando base da pagina e inicio do Hero  */

import React, { Component } from 'react';

import Hero from './Hero';

/* modulo 42 - paginas do produto -  criando componente de descrição */
import Descricao from './Descricao';

/* modulo 42 - paginas do produto -  criando componente de avaliacoes */
import Avalicoes from './Avaliacoes';



/* modulo 42 - paginas do produto -  criando componente de produtos relacionados */
import ProdutosRelacionados from './ProdutosRelacionados';

class ProdutoContanier extends Component{


	render() {
		return (
			<div className='container-big Produto'>
				<Hero />
				<Descricao />				
				<Avalicoes />
				<ProdutosRelacionados/>
			</div>
		);
	 }
 }

export default ProdutoContanier;
