/* modulo 43 - Area do cliente -  dados do cliente e senha - 
  criando  a pagina, componentes e todos o estilo final 2/3
*/

import React, { Component } from 'react';

import FormSimples from '../../../components/Inputs/FormSimples';
import TextoDados from '../../../components/Texto/Dados';

import { ESTADOS } from '../../../utils';

/* modulo 51 - alterar senha - realizando a integração*/

import actions from '../../../redux/actions';

import { connect } from 'react-redux';

import AlertGeral from '../../../components/Alert/Geral';

class FormularioSenha extends Component {
	state = {
		senhaAntiga: '',
		novaSenha: '',
		confirmarNovaSenha: '',
		aviso: null,
		erros: {},
	};

	validate() {
		
		const { senhaAntiga, novaSenha, confirmarNovaSenha } = this.state;
		const erros = {};

		if (!senhaAntiga) erros.senhaAntiga = "Preencha aqui com sua senha atual";
		if (!novaSenha) erros.novaSenha = 'Preencha aqui com sua nova senha';
		if (!confirmarNovaSenha) erros.confirmarNovaSenha = 'Preencha aqui novamente com sua nova senha';

		if (novaSenha !== confirmarNovaSenha) erros.confirmarNovaSenha = 'as senhas digitadas não coincidem';

		this.setState({ erros, aviso: null });
		return (Object.keys(erros).length === 0);
	};

	onChange = (field, value) => this.setState({ [field]: value},()=> this.validate())

	handleSubmit() {
		const { token } = this.props;
		if (!token || !this.validate()) return null;
		this.props.updateSenha(this.state, token, (error) => {
			if (error) this.setState({ aviso: { status: false, message: error.message } });
			else {
				alert('Senha atualizada com sucesso!');
				this.setState({ senhaAntiga: '', novaSenha: '', confirmarNovaSenha: '' });
			}
		});
	}

	render() {
		const { senhaAntiga, novaSenha, confirmarNovaSenha , erros} = this.state;

		return (
			<div className='flex-4 conteudo-area-cliente'>
				<h2>ALTERAR SENHA</h2>
				<br />
				<br />
				<div className='form-dados'>
					<br />
					<FormSimples
						erro={erros.senhaAntiga}
						onChange={(e) => this.onChange('senhaAntiga', e.target.value)}
						value={senhaAntiga}
						name='senhaAntiga'
						type='password'
						label='Senha Atual'
						placeholder='Senha Antiga'
					/>
					<FormSimples
						erro={erros.novaSenha}
						onChange={(e) => this.onChange('novaSenha', e.target.value)}
						value={novaSenha}
						name='novaSenha'
						type='password'
						label='Nova Senha'
						placeholder='Nova Senha'
					/>
					<FormSimples
						erro={erros.confirmarNovaSenha}
						onChange={(e) => this.onChange('confirmarNovaSenha', e.target.value)}
						value={confirmarNovaSenha}
						name='confirmarNovaSenha'
						type='password'
						label='Confirmar Nova Senha'
						placeholder='Confirmar nova senha '
					/>
				</div>
				<br />

				<AlertGeral aviso={this.state.aviso} />
				<div className='flex flex-start'>
					<button className='btn btn-primary' onClick={() => this.handleSubmit()}>
						SALVAR
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({

	usuario: state.auth.usuario,
	token: state.auth.token,
	cliente: state.cliente.cliente
})

export default connect(mapStateToProps,actions)(FormularioSenha);
