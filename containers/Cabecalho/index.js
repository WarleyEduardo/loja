/* modulo 41 - pagina inicial - desenvolvendo o cabecalho da loja */

import React from 'react';
import Link from 'next/link';

import Logo from '../../components/logo/Cabecalho';
import CampoPesquisa from '../../components/Campos/Pesquisa';
import CardCarrinho from '../../components/Cards/Carrinho'

class Cabecalho extends React.Component {


	renderCabecalhoNormal() {
		
		return (
			
			<div className='Header'>
		
				<div className='header-wrapper'>
					<Logo />
					<CampoPesquisa />
					<CardCarrinho/>
				</div>
				
		   </div>
		)
	}

	renderCabecalhoSimples() {
		
		return (
			<div className='Header No-links Header-Simples'>
				<div className='header-wrapper'>
                   <Logo/>
				</div>
			</div>
		)			

		
	}

	render() {
		
		const { simples } = this.props;

		return simples ? renderCabecalhoSimples() : renderCabecalhoNormal();
	}
	
}


export default Cabecalho;