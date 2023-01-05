/* modulo 42 - paginas do produto -  criando componente de avaliacoes */

import React, { Component } from 'react';


class Avaliacoes extends Component{

	renderAvaliacoes() {
		
		return (
			<div className='avaliacoes-items flex horizontal wrap no-wrap-mb'>
				<div className='avaliacoes flex-1 flex vertical wrap-3'>
					<div className='avaliacao-texto flex-3 flex-texto'>
						<p>Ótimo produto, gostei muito do mouse, utilizado para minhas livestreams.</p>
					</div>

					<div className='avaliacao-dados flex'>
						<div className='avaliacao-nome flex-1 flex'>
							<small>João Paulo</small>
						</div>

						<div className='avaliacao-pontuacao flex-1 flex'>
							<span>
								<i className='fa fa-star'></i>
								<i className='fa fa-star'></i>
								<i className='fa fa-star'></i>
								<i className='fa fa-star'></i>
							</span>
						</div>
					</div>
				</div>

				<div className='avaliacoes flex-1 flex vertical wrap-3'>
					<div className='avaliacao-texto flex-3 flex-texto'>
						<p>Produto de boa qualidade, gostei da velocidade da entrega</p>
					</div>

					<div className='avaliacao-dados flex'>
						<div className='avaliacao-nome flex-1 flex'>
							<small>Maria Aparecida</small>
						</div>

						<div className='avaliacao-pontuacao flex-1 flex'>
							<span>
								<i className='fa fa-star'></i>
								<i className='fa fa-star'></i>
								<i className='fa fa-star'></i>
								<i className='fa fa-star'></i>
								<i className='fa fa-star'></i>
							</span>
						</div>
					</div>
				</div>

				<div className='avaliacoes flex-1 flex vertical wrap-3'>
					<div className='avaliacao-texto flex-3 flex-texto'>
						<p>o produto não durou um mês comigo.</p>
					</div>

					<div className='avaliacao-dados flex'>
						<div className='avaliacao-nome flex-1 flex'>
							<small>Vitor</small>
						</div>

						<div className='avaliacao-pontuacao flex-1 flex'>
							<span>
								<i className='fa fa-star'></i>
							</span>
						</div>
					</div>
				</div>

			</div>
		);
	}

	renderFormularioDeAvaliacoes() {
		
		return (
			<div className='avaliacoes-form'>
				<h4>Envie sua avaliação para o produto:</h4>
				<div className='flex-vertical'>
					<div className='flex horizontal'>
						<label>Pontuação:&nbsp;</label>
						<select>
							<option value='1'>1 estrela</option>
							<option value='2'>2 estrelas</option>
							<option value='3'>3 estrelas</option>
							<option value='4'>4 estrelas</option>
							<option value='5'>5 estrelas</option>
						</select>
					</div>
					<div className="flex vertical">
						<label>Avalição</label>
						<textarea rows="4" style={{ resize: "nome", width: "100%", maxWidth: "500px" }}
						 placeholder="Digite aqui a sua avaliação"
						>

						</textarea>
					</div>
					<div>
						<button className='btn btn-primary btn-lg'
							
							onClick={() => alert('Avaliação envidada!')}
						
						>
							<span>Enviar Avaliação</span>
						</button>
					</div>
				</div>
			</div>
		);
	}
	
	render() {
		
		return (
			<div className="Avaliacoes flex vertical">
				<h2>Avaliações</h2>
				<br />
				{this.renderAvaliacoes()}
				<br />
				{this.renderFormularioDeAvaliacoes()}
			</div>

		)
	}
}

export default Avaliacoes;