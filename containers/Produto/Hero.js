 /* modulo 42 - paginas do produto -  criando base da pagina e inicio do Hero  */

  /* modulo 42 - paginas do produto -  criando componente do hero do zero */

import React, { Component } from 'react';


const PHOTOS = [
	"/static/img/mouse-1.png",
	"/static/img/mouse-4.png",
	"/static/img/mouse-5.png"	

]

class Hero extends Component{ 


	state = { foto: PHOTOS[0] };

	renderPhotos() {
		
		return (
			<div className='fotos flex-2 flex vertical'>
				<div className='fotos-principal flex-6 flex flex-center'>
					<img src={this.state.foto} width="95%"/>
				</div>

				<div className='mini-fotos flex-1 flex'>
					{
						PHOTOS.map((foto, index) => (
							<div key={index} className="mini-foto flex-1 flex flex-center"
							 onClick={()=> this.setState({foto})}>

								<img src={foto}  width="90%"/>

							</div>
						))
					}

				</div>

			</div>
		)
	}

	addCart() { window.alert('adicionado ao carrinho'); };
	
	renderVariacoes() {
		
		return (
			<div>
				<div>
					<label>Selecione uma opçao:</label>
				</div>
				<div className='variacoes flex wrap'>
					<div className='variacao flex-1 flex flex-center wrap-4'>
						<span className='variacao-item'>P</span>
					</div>

					<div className='variacao flex-1 flex flex-center wrap-4'>
						<span className='variacao-item'>M</span>
					</div>

					<div className='variacao flex-1 flex flex-center wrap-4'>
						<span className='variacao-item'>G</span>
					</div>
				</div>
			</div>
		);
	}
	

	renderDetalhes() {
		
		return (
			<div className='flex-2 produto-detalhes'>
				<div className="titulo">
					<h2>Mouser Gamer 2</h2>
				</div>
				
				<div className="categoria">
					<p>Categoria:&nbsp;Mouser Gamer</p>
				</div>
				
				<br />
				
				<div className="precos">
					
					<h2 className='preco-original preco-por'>
						R$ 55,00
					</h2>
					
					<h2 className='preco-promocao preco-por'>
						R$ 45,00
					</h2>
					
					<h4 className='preco-dividido preco-por'>
						ou 6x de R$ 7,50 sem juros
					</h4>

				</div>
				<br />
				{this.renderVariacoes()}

				<div className="opcoes">
					<div className='opcao'>
						<label className='opcao-tab'>Quantidade</label>
						<input
							className='opcao-input'
							type="number"
							name="quantidade"
							defaultValue={1}
						/>
						
					</div>
				</div>

				<div className="comprar">
					<button className='btn btn-sucess btn-cta' onClick={()=> this.addCart()}>
						COMPRAR
					</button>
				</div>


			
			</div>
		)
	} 
	render() {
	   
		return (
			<div className='flex horizontal'>
				{this.renderPhotos()}
				{this.renderDetalhes()}
			</div>
		);
   }

}


export default Hero