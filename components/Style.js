/* modulo 41 - loja virtual - criando configuração básica da pagina */
 
import React from 'react';
/*export default () => ( */

 const Style = () => (
		<style jsx global>
			{`
				body {
					margin: 0;
					padding: 0;
				}

				body,
				* {
					font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
				}

				.flex {
					display: flex;
				}
				.flex-1 {
					flex: 1;
				}
				.flex-2 {
					flex: 2;
				}
				.flex-3 {
					flex: 3;
				}
				.flex-center {
					justify-content: center;
					align-items: center;
				}

				.Header {
					max-height: 150px;
				}

				.header-wrapper,
				.categorias {
					max-width: 1200px;
					margin: 0 auto;
					width: 100%;
					display: flex;
				}

				.categorias-wrapper {
					background-color: #ffedd9;
				}

				@media screen and (max-width: 720px) {
					.header-wrapper {
						flex-direction: column;
					}

					.categorias {
						overflow-x: scroll;
					}

					.Header {
						max-height: 250px;
					}
				}

				.logo {
					max-width: 230px;
					cursor: pointer;
				}

				.input-pesquisa {
					font-size: 1rem;
					color: #333;
					padding: 10px 25px;
					width: 90%;
					border: 1px solid #aaa;
					border-radius: 10px;
					margin: 0 10px;
				}

				.button-pesquisa {
					margin-left: -45px;
					font-size: 1.2rem;
					color: #333;
					background-color: transparent;
					border: 0;
					cursor: pointer;
				}

				.itens-cabecalho {
					padding: 20px 0px;
				}

				.item-cabecalho {
					cursor: pointer;
				}

				.item-cabecalho i {
					color: #e87c08;
					font-size: 1.7rem;
					margin: 0 5px;
				}

				.item-cabecalho span {
					color: #777;

					font-size: 14px;
				}

				.item-cabecalho.cart {
					margin-left: 15px;
				}

				.item-cabecalho.cart span {
					font-size: 1rem;
					background-color: #222;
					color: #fff;
					border-radius: 100px;
					padding: 0 5px;
					margin-left: -15px;
					position: relative;
					top: -15px;
				}

				.categoria-item {
					padding: 10px 5px;
					border-right: 1px solid #e87c08;
					cursor: pointer;
					font-weight:bold;
					color: #333;
					text-transform: uppercase;
				}
				
				.categoria-item:last-child {
					border-right: 0;
				}

				.categoria-item:hover {
					background-color: #e87c08;
				}
			`}
		</style>
 );

export default Style;