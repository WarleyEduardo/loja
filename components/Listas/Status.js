/* modulo 43 - Area do cliente -  Detalhes do pedido - 
 criando a página, componentes e todo o estilo  3/3
*/

import React from 'react';

const Registros = ({ registros }) => (

	<div className="Lista-Status">
		{
			
			registros.length > 0 ?
			(
			  <div className="Status">
				<div className="Cabecalho-Status flex">
						<div className="flex-1">
							<strong>Data</strong>
						</div>
						<div className="flex-2">
							<strong>Situação</strong>
						</div>
				</div>		
						
				<div className="Corpo-Status flex vertical">
				{
					registros.map((item, idx) => (
					
					<div className="Status-Item flex" key={idx}>
						<div className='flex-1'>
								<span>{item.data}</span>		
						</div>
						
						<div className="flex-2">
								<span>{item.situacao}</span>
						</div>	
					</div>   
					   
				   ))				
				}			
				</div>	
			 
			  </div>
			
			)
			:
			(
			 <span>Ainda não há registro</span>
			)
	    }
		
	</div>
);

export default Registros;