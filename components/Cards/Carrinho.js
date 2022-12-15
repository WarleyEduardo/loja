/* modulo 41 - lojva virtual - criando componentes do cabeçalho */

import React, { Component } from 'react'
import Link from 'next/link'

class CardCarrinho extends Component {


	state = { cartQtd: 0 }
	
	render() {
		
		return (

			<div className='itens-cabecalho flex-2 flex flex-center'>
				<Link href="/area-cliente">
					<div className='item-cabecalho'>
						<i className='fas fa-user'></i>
                         <span>Minha Conta</span>  
					</div>
				</Link>
				<Link href="/carrinho">
					<div className='item-cabecalho cart'>
						<i className='fas fa-shopping-cart'></i>
						<span>{this.state.cartQtd || 0}</span>
					</div>
				</Link>
			</div>
		)
	}
}

export default CardCarrinho;