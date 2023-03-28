/* modulo 42 - pagina de Carrinho - criando a estrutura da pagina e componentes 3/3 */


import React, { Component } from 'react';

/*modulo 48 -  integrando a seçao de frete 1/2  */

/*modulo 48 -  integrando a seçao de frete 2/2 */ 

import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { getCart } from '../../utils/cart';
import { formatMoney, codigosCorreios } from '../../utils';
import { formatCEP } from '../../utils/format';

class Frete extends Component {

	constructor(props) {
		super()

		this.state = {
			cep: props.cep || ""
		};
	}

	componentDidUpdate(prevProps) {
		if (!prevProps.fretes && this.props.fretes && !this.props.freteSelecionado) {
			this.props.selecionarFrete(this.props.fretes[0]);
		}
	}

	selectFrete(codigo, fretes) {
		
		const frete = fretes.reduce((all, frete) => 			
              
			frete.Codigo.toString() === codigo ? frete : all, {}
		);

		
		this.props.selecionarFrete(frete);
	}

	renderOpcoesFrete() {

		const { freteSelecionado, fretes } = this.props;
		if (!fretes) return null
		
		return (
			<div>
				<select value={freteSelecionado.Codigo}
					onChange={(e)=> this.selectFrete(e.target.value,fretes)}
				>
					{
						fretes.map((frete, index) =>
						    ( 					 
							  <option value={frete.Codigo}
								key={frete.Codigo}>
								{codigosCorreios[frete.Codigo]} &nbsp;
								({frete.PrazoEntrega} dias úteis) -&nbsp;
								{formatMoney(frete.Valor.replace(',', '.'))}
							  </option>

							)
						)
					
					}
					
				</select>
			</div>
		);
	}

	renderOpcaoSelecionada() {

		const { freteSelecionado, cleanFretes } = this.props;
		if (!freteSelecionado || !freteSelecionado.Valor) return null;
		const valorFrete = freteSelecionado.Valor.replace(",", ".");

 		return (
			<div className='flex vertical flex-center'>
					<h4 className='valor-frete'>{formatMoney(valorFrete)}</h4>
				<span className='limpar-CEP'
				 onClick={ ()=> cleanFretes()}>
					Limpar CEP
				</span>
			</div>
		);
	}

	onChangeCEP = (e) => {
		this.setState({ cep: formatCEP(e.target.value) });
	};

	calcularFrete() {
		
		const { cep } = this.state;
		if (!cep || cep.length !== 9) return alert("Digite o CEP corretamente");
		this.props.calcularFrete(cep, getCart());
	}

	renderFormularioCEP() {
		return (
			<div className='flex-1 flex'>
				<div className='flex-3'>
					<input value={this.state.cep} name='CEP' className='campo-frete' onChange={this.onChangeCEP} />
				</div>

				<div className='flex-1'>
					<button className='btn btn-primary btn-sm' onClick={() => this.calcularFrete()}>
						CALCULAR
					</button>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div className='dados-do-carrinho-item flex'>
				<div className='flex-1 flex vertical'>
					<p className='heardline'>Frete</p>
					{this.props.freteSelecionado && this.renderOpcoesFrete()}
				</div>

				<div className='flex-1 flex flex-center'>{this.props.freteSelecionado ? this.renderOpcaoSelecionada() : this.renderFormularioCEP()}</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({

	carrinho: state.carrinho.carrinho,
	freteSelecionado: state.carrinho.freteSelecionado,
	fretes: state.carrinho.fretes,
	cep: state.carrinho.cep
})

export default connect(mapStateToProps,actions)(Frete);