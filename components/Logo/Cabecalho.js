/* modulo 41 - lojva virtual - criando componentes do cabeçalho */

import React from 'react';
import Link from 'next/link';

const LogoCabecalho = () => (

	
	
	<div className='flex-2 flex flex-center'>
		<Link href="/">
			<img src="/static/logo.png" className="logo" width="90%"/>
		</Link>

	</div>
);

export default LogoCabecalho;