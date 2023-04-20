/* modulo 42 - pagina de Checkout - criando o componente de enviar os dados do cliente e entrega */

import React, { Component } from 'react';
import AlertGeral from '../../components/Alert/Geral';


/* Modulo 49 - submit dados do cliente - fazendo a integração e ativando validações (1/2) */

/*modulo 49 - submit dados do cliente - fazendo a integreção e ativando dados do cliente (2/2) */

import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { validateCPF } from '../../utils/validade';

class SubmitDadosCliente extends Component {
	state = { aviso: null };

	callback = (error) => {
		
		if (!error) {
			this.props.permitir();
			this.setState({aviso: null})
		} else {
			
			this.setState({ aviso: { status: false, message: error.message}})
		}
	}


	validate = () => {
		
				
		const { email, senha, nome, cpf, dataDeNascimento, telefone,
			local, numero, bairro, cidade, estado, CEP } = this.props.form;	
	
		const { usuario } = this.props;

		const erros = {}		
       

		let temErro = false;
		
		if (!usuario && !email) temErro = true ;
		if (!usuario && !senha) temErro = true;

		if (!nome) { erros.nome = 'Nome não informado'; temErro = true; };
		if (!cpf || cpf.length === 14 && !validateCPF(cpf)) { erros.cpf = "cpf inválido";  temErro = true; };
		

		if (!dataDeNascimento || dataDeNascimento.length !== 10) { erros.dataDeNascimento = 'data de nascimento inválida'; temErro = true; };

		if (!telefone || telefone.length < 11) { erros.telefone = 'telefone inválido'; temErro = true; };

		if (!local) { erros.local = 'local inválido'; temErro = true};
		if (!numero) { erros.numero = "número inválido" ;  temErro = true; };
		if (!bairro) { erros.bairro = "bairro inválido"; temErro = true; };
		if (!cidade) { erros.cidade = 'cidade inválida'; temErro = true };
		if (!estado) { erros.estado = 'estado inválido';  temErro = true; };

		if (!CEP || CEP.length !== 9) { erros.CEP = "cep inválido"; temErro = true; };

        
		// console.log('erros:' , erros)


		return !temErro; 
		
	}



	handleSubmit() {	
		
		if (!this.validate()) return null;		
		const { token, form, cliente } = this.props;
		if (!token) this.props.newCliente(form, this.callback)
		else this.props.updateCliente(form,cliente._id,token,this.callback)
		
	};

	render() {
		return (
			<div>
				<AlertGeral aviso={this.state.aviso} />

				<div className='flex flex-right'>
					<button className='btn btn-success btn-cta' onClick={() => this.handleSubmit()}>
						CONTINUAR PEDIDO
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({

	usuario: state.auth.usuario,
	token: state.auth.token,
	cliente: state.cliente.cliente,
	form: state.checkout.form
		
})


export default connect(mapStateToProps,actions)(SubmitDadosCliente);