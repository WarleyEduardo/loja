/* modulo 42 - pagina de Carrinho - criando a estrutura da pagina e componentes 3/3 */
import React, { Component } from 'react';

class Frete extends Component{


	state = { frete: true}; 


	renderOpcoesFrete() {
		
		return (
			<div>
				<select defaultValue='PAC'>
					<option value='PAC'>PAC (15 dias uteis) - R$ 18,90</option>
					<option value='SEDEX'>SEDEX (3 dias uteis) - R$ 38,90</option>
				</select>
			</div>
		);
	}

	renderOpcaoSelecionada() {
		
		return (
			<div className='flex vertical flex-center'>
				<h4 className='valor-frete'>R$ 19,80</h4>
				<span className='limpar-CEP'>Limpar CEP</span>
			</div>
		)
	}

	renderFormularioCEP() {
		
		return (
			<div className='flex-1 flex'>
				<div className='flex-3'>
					<input defaultValue='' name='CEP' className='campo-frete' />
				</div>

				<div className='flex-1'>
					<button className='btn btn-primary btn-small'>CALCULAR</button>
				</div>
			</div>
		);
	}

	render() {
		
		return (
			<div className='dados-do-carrinho-item flex'>
				<div className='flex-1 flex vertical'>
					<p className='heardline'>Frete</p>
					{this.state.frete && this.renderOpcoesFrete()}
				</div>

				<div className='flex-1 flex flex-center'>{this.state.frete ? this.renderOpcaoSelecionada() : this.renderFormularioCEP()}</div>
			</div>
		);
	}
}

export default Frete;