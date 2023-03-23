/* modulo 42 - paginas do produto -  criando componente de produtos relacionados */
import React, { Component} from 'react';
import Produtos from '../../components/Listas/Produtos';

/* modulo 47 ( extra) integrando o componente de Produtos relacionados */

import { connect } from 'react-redux';
import actions from '../../redux/actions';



class ProdutosRelacionados extends Component {
	
	
	componentDidMount() {

				  
		if (this.props.produto) {
			
			this.props.fetchProdutosCategoria(this.props.produto.categoria._id, 0, 4);
		}
	}

	componentDidUpdate(prevProps) {     
		
		
		if (!prevProps.produto && this.props.produto) {

			alert('aqui');
			
			this.props.fetchProdutosCategoria(this.props.produto.categoria._id, 0, 4);
		}
	}

	render() {
		const { produtosCategoria, produto } = this.props;	
		
		return (
			<div className='container Produtos-Relacionados flex vertical'>
				<h2>Produtos Relacionados</h2>
				<br />
				<Produtos produtos={produtosCategoria ? produtosCategoria.docs : []} itensPorLinha={4} produto={produto._id} />
			</div>
		);
	}
}


const mapStateToProps = (state) => ({
	produto: state.produto.produto,
	produtosCategoria: state.categoria.produtosCategoria
});


export default connect(mapStateToProps,actions)(ProdutosRelacionados);