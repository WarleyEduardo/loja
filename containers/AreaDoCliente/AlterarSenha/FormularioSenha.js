/* modulo 43 - Area do cliente -  dados do cliente e senha - 
  criando  a pagina, componentes e todos o estilo final 2/3
*/

import React, { Component } from 'react';

import FormSimples from '../../../components/Inputs/FormSimples';
import TextoDados from '../../../components/Texto/Dados';

import { ESTADOS } from '../../../utils';

class FormularioSenha extends Component {
	state = {
		senhaAntiga: "",
		novaSenha: "",
		confirmarNovaSenha:""
	};

	render() {
		const {
			senhaAntiga,
		    novaSenha,
			confirmarNovaSenha
		} = this.state;

		return (
			<div className='flex-4 conteudo-area-cliente'>
				<h2>ALTERAR SENHA</h2>
				<br />
				<br />
				<div className='form-dados'>
					<br />
					<FormSimples value={senhaAntiga} name='senhaAntiga' type='password' placeholder='Senha Antiga' />
					<FormSimples value={novaSenha} name='novaSenha' type='password' placeholder='Nova Senha' />
					<FormSimples value={confirmarNovaSenha} name='confirmarNovaSenha' type='password' placeholder='Confirmar nova senha ' />
				</div>
				<br />
				<div className='flex flex-start'>
					<button className='btn btn-primary'>SALVAR</button>
				</div>
			</div>
		);
	}
}

export default FormularioSenha;
