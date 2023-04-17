/* modulo 41 - loja virtual - desenvolvendo o componente do Rodapé institucional  da Loja */
import React, { Component } from 'react';

/* Modulo 44 - adicionando dados e realizando integração dos componentes da pagina inicial */
	
import { connect } from 'react-redux';


class DadosDaLoja extends Component{
	
	render() {

		if (!this.props.loja) return (<div></div>);
		const { nome, cnpj, email, endereco, telefones } = this.props.loja;
		return (
			<div className='flex-1 dados-da-loja'>
				<div>
					<h2>Entre em contato </h2>
					<br />
				</div>

				<p className='loja-nome'>Nome: {nome}</p>
				<p className='loja-cnpj'>Cnpj: {cnpj}</p>
				<p className='loja-email'>
					Email: <a href={`mailto:${email}`}>{email}</a>
				</p>
				<p className='loja-telefones'>Telefones:</p>
		
				{telefones.map((telefone, index) => (
					
                  	<p className='loja-telefone' key={index}>
						&nbsp;&nbsp; <a href={`phone:${{telefone}}`}>{telefone}</a>
					</p>

				 ) )
				}
	
				<p className='loja-endereco'>{`${endereco.local}, ${endereco.numero} - ${endereco.bairro} ${endereco.cidade}`}</p>
				<p className='loja-cidade'>{`${endereco.cidade}/${endereco.estado}  - ${endereco.CEP}`}</p>
			</div>
		);
	}
}
const mapStateToProps = state => ({

	loja: state.loja.loja
})

export default connect(mapStateToProps)(DadosDaLoja);