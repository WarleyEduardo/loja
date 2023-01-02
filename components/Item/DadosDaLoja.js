/* modulo 41 - loja virtual - desenvolvendo o componente do Rodapé institucional  da Loja */
import React from 'react';
import Link from 'next/link';

const DadosDaLoja = () => (
	<div className='flex-1 dados-da-loja'>
		<div>
			<h2>Entre em contato </h2>
			<br />
		</div>

		<p className='loja-nome'>Nome: LOJA IT</p>
		<p className='loja-cnpj'>Cnpj: 12.345.678/0001-05</p>
		<p className='loja-email'>
			Email: <a href='mailto:mateus@ampliee.com'>warley@teste.com</a>
		</p>
		<p className='loja-telefones'>Telefones:</p>
		<p className='loja-telefone'>
			&nbsp;&nbsp; <a href='phone:(33) 1234-5678'> (33) 1234-5678</a>
		</p>
		<p className='loja-telefone'>
			&nbsp;&nbsp; <a href='phone:(33) 1234-5678'> (33) 1234-5678</a>
		</p>
		<p className='loja-telefone'>
			&nbsp;&nbsp; <a href='phone:(33) 1234-5678'> (33) 1234-5678</a>
		</p>
		<p className='loja-telefone'>
			&nbsp;&nbsp; <a href='phone:(33) 1234-5678'> (33) 1234-5678</a>
		 </p>
		<p className='loja-endereco'>Rua teste, 123 - Bairro Centro</p>
		<p className='loja-cidade'>Governador Valadares-MG 35054-670</p>
	</div>
);

export default DadosDaLoja;