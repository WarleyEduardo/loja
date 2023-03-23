/* modulo 42 - paginas do produto -  criando componente de descrição */
import React, { Component} from 'react';


/*modulo 47 - integrando o componente da descrição */
 
import { connect } from 'react-redux';

class Descricao extends Component {
	 

	render() {

		const { produto } = this.props;

		
		return (
			<div className="Descricao flex vertical">
				<h2>Descrição</h2>
				<br />
				<div>
					{produto.descricao.split("\n").map((item, idx) => <p key={idx}>{item}</p>)}
				</div>
			</div>);
	}
}

const mapStateToProps = state => ({
	
	produto: state.produto.produto
})

export default connect(mapStateToProps)(Descricao);