 /* modulo 42 - paginas do produto -  criando base da pagina e inicio do Hero  */

  /* modulo 42 - paginas do produto -  criando componente do hero do zero */

import React, { Component } from 'react';

/*modulo 47 -  integrando o componente de Hero (1/2) */


import { connect } from 'react-redux';

import Link from 'next/link';
import { formatMoney } from '../../utils';


/*modulo 47 -  integrando o componente de Hero (2/2) */

import { baseImg } from '../../config.js';

class Hero extends Component {
	constructor(props) {
		super();
		const { produto, variacoes } = props;
		this.state = {
			foto: produto ? produto.fotos[0] || null : null,
			fotos: produto ? produto.fotos || null : null,
			qtd: 1,
			variacao: variacoes && variacoes.length >= 1 ? variacoes[0]._id : null,
			variacaoCompleta: variacoes && variacoes.length >= 1 ? variacoes[0] : null,
		};
	}

	componentDidUpdate(prevProps) {
		if (!prevProps.produto && this.props.produto) {
			const { fotos } = this.props.produto;
			this.setState({ foto: fotos[0], fotos });
		}

		if (!prevProps.variacoes && this.props.variacoes) {
			const variacao = this.props.variacoes[0];
			if (!variacao) return null;
			this.setState({ variacao: variacao._id, variacaoCompleta: variacao });
		}
	}

	renderPhotos() {
		return (
			<div className='fotos flex-2 flex vertical'>
				<div className='foto-principal flex-6 flex flex-center'>
					<img src={baseImg + this.state.foto} width='95%' />
				</div>

				<div className='mini-fotos flex-1 flex'>
					{this.state.fotos.map((foto, index) => (
						<div key={index} className='mini-foto flex-1 flex flex-center' onClick={() => this.setState({ foto })}>
							<img src={baseImg + foto} width='90%' />
						</div>
					))}
				</div>
			</div>
		);
	}

	/* modulo 47  -  integrando o componente de hero 2/2 */

	//addCart() {
	//	window.alert('adicionado ao carrinho');
//	}
	
	addCart() {
		 
		const { variacao, qtd, variacaoCompleta } = this.state;
		const { produto } = this.produto;
		addCart({
			
			produto: produto._id,
			variacao,
			quantidade: qtd,
			precoUnitario: variacaoCompleta ?
				variacaoCompleta.promocao || variacaoCompleta.preco :
				produto.promocao || produto.preco
				
		}, true);
	 }

	setVariacao = (produto, variacao) => {
		this.setState({ variacao: variacao._id, variacaoCompleta: variacao });
		if (variacao.fotos && variacao.fotos.length > 0) {
			this.setState({ fotos: variacao.fotos, foto: variacao.fotos[0] });
		} else {
			this.setState({ fotos: produto.fotos, foto: produto.fotos[0] });
		}
	};

	renderVariacoes() {
		const { variacoes, produto } = this.props;

		if (!produto || !variacoes || variacoes.length === 0) return null;

		return (
			<div>
				<div>
					<label>Selecione uma opçao:</label>
				</div>			
				<div className='variacoes flex wrap'>
					{variacoes.map((variacao, index) => (
						<div
							className={`variacao${variacao._id === this.state.variacao ? ' variacao-active' : ''}
						  flex-1 flex flex-center wrap-4`}
							key={variacao._id}
							onClick={() => this.setVariacao(produto, variacao)}
						>
							<span className='variacao-item'>{variacao.nome}</span>							
						</div>
					))}
				</div>
			</div>
		);
	}

	renderDetalhes() {
		const { produto } = this.props;
		const { variacaoCompleta } = this.state;

		if (!produto) return null;

		

		const temPromo = produto.promocao && produto.preco !== produto.promocao;
		const temPromoVariacao = variacaoCompleta  !== null &&  variacaoCompleta.promocao && variacaoCompleta.preco !== variacaoCompleta.promocao  
			

		
		return (
			<div className='flex-2 produto-detalhes'>
				<div className='titulo'>
					<h2>{produto.titulo}</h2>
				</div>

				<div className='categoria'>
					<p>
						Categoria:&nbsp;
						<Link href={`/categoria/${produto.categoria.nome}?id=${produto.categoria._id}`}>
							<span className='categoria-link'>{produto.categoria.nome}</span>
						</Link>
					</p>
				</div>
				<br />
				<br />

				{variacaoCompleta ? (
					<div className='precos'>
						{/*
						<h2 className={`preco-original ${temPromoVariacao ? 'preco-por' : 'teste'}`}>{formatMoney(variacaoCompleta.preco)}</h2>
				*/}
						<h2 className={`preco-original ${temPromoVariacao ? 'preco-por' : 'produto-sem-promocao'}`}>{formatMoney(variacaoCompleta.preco)}</h2>

						{/*variacaoCompleta.promocao && variacaoCompleta.promocao !== variacaoCompleta.preco && (
							<h2 className='preco-promocao'>{formatMoney(variacaoCompleta.promocao)}</h2>
						)*/}

						{variacaoCompleta.promocao ? (
							<h2 className='preco-promocao'>{formatMoney(variacaoCompleta.promocao)}</h2>
						) : (
							<h2 className='preco-original'>{formatMoney(variacaoCompleta.preco)}</h2>
						)}

						{produto.parcelado && produto.parcelado > 2 && (
							<h4 className='preco-parcelado'>
								ou {produto.parcelado.toString()} x de
								{formatMoney((variacaoCompleta.promocao || variacaoCompleta.preco) / produto.parcelado)} sem juros
							</h4>
						)}

						{/*

						<h4 className='preco-parcelado'>
							ou 6x de {formatMoney((variacaoCompleta.promocao || variacaoCompleta.preco) / 6)} sem juros
						</h4>
						*/}
					</div>
				) : (
					<div className='precos'>
						<h2 className={`preco-original ${temPromo ? 'preco-por' : ''}  `}>{formatMoney(produto.preco)}</h2>

						{produto.promocao && produto.promocao > 0 && produto.promocao !== produto.preco && <h2 className='preco-promocao'>{formatMoney(produto.promocao)}</h2>}

						{produto.parcelado && produto.parcelado > 2 && (
							<h4 className='preco-parcelado'>
								ou {produto.parcelado.toString()} x de
								{formatMoney((produto.promocao || produto.preco) / produto.parcelado)} sem juros
							</h4>
						)}

						{/*		
					   <h4 className='preco-parcelado'>
						  ou 6x de {formatMoney((produto.promocao || produto.preco) / 6 )} sem juros
								</h4>
						*/}
					</div>
				)}

				{this.renderVariacoes()}

				<div className='opcoes'>
					<div className='opcao flex vertical'>
						<label className='opcao-tab'>Quantidade</label>
						<input
							className='opcao-input'
							type='number'
							name='quantidade'
							value={this.state.qtd}
							onChange={(e) => Number(e.target.value) >= 1 && this.setState({ qtd: e.target.value })}
						/>
					</div>
				</div>

				<div className='comprar'>
					<button className='btn btn-success btn-cta' onClick={() => this.addCart()}>
						COMPRAR
					</button>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div className='Produto-Hero flex horizontal'>
				{this.renderPhotos()}
				{this.renderDetalhes()}
			</div>
		);
	}
}


const mapStateToProps = state => ({

	produto: state.produto.produto,
	variacoes: state.produto.variacoes
})


export default connect(mapStateToProps)(Hero)
