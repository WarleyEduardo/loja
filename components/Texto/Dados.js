TextoDados;
/* modulo 43 - Area do cliente -  Detalhes do pedido - 
 criando a página, componentes e todo o estilo  1/3
*/

import React from 'react';

const TextoDados = ({ chave, valor, vertical = false }) => (

	<div className={`Texto-Dados flex ${vertical ? "vertical" : ""}`}>
		<strong className='Texto-Dados-Chave'>{chave}:&nbsp;</strong>
		<span className='Texto-Dados-Valor'>{valor}</span>

	</div>
)


export default TextoDados;

