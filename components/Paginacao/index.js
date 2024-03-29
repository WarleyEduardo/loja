/* modulo 41 - loja virtual -  adicionando paginação configurações e estilo */

import React from 'react';
	
class Paginacao extends React.Component{


	render() {

		const { total, atual, limite, onClick } = this.props;
		const numeroPaginas = Math.ceil(total / limite);
		  
		return (
			<div className='Paginacao flex horizontal flex-center'>
				{
					[...Array(numeroPaginas).keys()].map((numero, index) => {
						
						const numeroAtualDaPagina = numero * limite;
						return (
							<div className={`paginacao-item ${numeroAtualDaPagina === atual ? "paginacao-item-active" : ""}`}
							key={index}
							onClick={()=> onClick(numeroAtualDaPagina)}
						>
							{ numero + 1} 
						</div>)
					})
				}
			</div>

		)
	  }
 }

export default Paginacao;