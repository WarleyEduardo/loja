/* modulo 43 - Area do cliente -  dados do cliente e senha - 
  criando  a pagina, componentes e todos o estilo final 1/3
*/

import React, { Component } from 'react';

import FormSimples from '../../../components/Inputs/FormSimples';
import TextoDados from '../../../components/Texto/Dados';

import { ESTADOS } from '../../../utils';

class FormularioDados extends Component{

	state = {
		
		nome: "",
		cpf: "",
		telefone: "",
		dataDeNascimento: "",
		local: "",
		numero: "",
		complemento: "",
		bairro: "",
		cidade: "",
		estado: "",
		CEP: ""
	};

	render() {
		
		const { 
		nome,
		cpf,
		telefone,
		dataDeNascimento,
		local,
		numero,
		complemento,
		bairro,
		cidade,
		estado,
		CEP
		} =  this.state;

		return (
			<div className='flex-4 conteudo-area-cliente'>
				<h2>MEUS DADOS</h2>
				<br />
				<br />
				<div className='form-dados'>
					<div>
						<TextoDados chave='E-mail' valor='cliente@teste.com' />
					</div>

					<br />
					<FormSimples value={nome} name='nome' type='text' placeholder='Nome' />
					<FormSimples value={cpf} name='cpf' type='text' placeholder='CPF' />

					<div className='flex horizontal'>
						<div className='flex-1'>
							<FormSimples label='Telefone' value={telefone} name='telefone' type='text' placeholder='Telefone' />
						</div>

						<div className='flex-1'>
							<FormSimples value={dataDeNascimento} name='dataDeNascimento' type='text' placeholder='DD/MM/YYYY' label='Data de nascimento' />
						</div>
					</div>

					<br />
					<div className='flex horizontal'>
						<div className='flex-3'>
							<FormSimples value={local} name='local' placeholder='Endereço' />
						</div>

						<div className='flex-1'>
							<FormSimples value={numero} name='numero' placeholder='Número' />
						</div>
					</div>
					<div className='flex horizontal'>
						<div className='flex-1'>
							<FormSimples value={complemento} name='complemento' placeholder='Complemento' />
						</div>

						<div className='flex-1'>
							<FormSimples value={bairro} name='bairro' placeholder='Bairro' />
						</div>
					</div>
					<div className='flex horizontal'>
						<div className='flex-1'>
							<FormSimples value={cidade} name='cidade' placeholder='Cidade' label='Cidade' />
						</div>
						<div className='form-input'>
							<label>Estado</label>
							<select name='estado' value={estado}>
								<option>Selecione seu Estado</option>
								{Object.keys(ESTADOS).map((abbr) => (
									<option key={abbr} value={abbr}>
										{ESTADOS[abbr]}
									</option>
								))}
							</select>
						</div>
					</div>

					<FormSimples value={CEP} name='CEP' placeholder='12345-789' label='CEP' />
					<br />
				</div>

				<div className='flex flex-start'>
					<button className='btn btn-primary'>SALVAR</button>
				</div>
			</div>
		);
	}
}

export default FormularioDados;