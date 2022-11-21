/* modulo 41 - loja virtual - criando configuração básica da pagina */
 
import React from 'react';
/*export default () => ( */

 const Style = () =>(
	
	<style jsx global>
		{`
		  body {

			margin: 0;
			padding: 0;

		  }

		  .flex {display: flex}
		  .flex-center {
			justify-content: center;	
			align-items: center;
		  }
		`}
	</style>
);

export default Style;