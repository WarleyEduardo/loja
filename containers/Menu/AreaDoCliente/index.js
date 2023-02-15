/* modulo 43 - area do cliente -  
criando o componente  de Menu e adicionando o estilo */

import React, { Component } from 'react';
import Link from 'next/link';

class MenuAreaDoCliente extends Component{

	renderCabecalho() {
		
		return (
			<div>
				<h3>Oi, João! <br/> Seja bem-vindo a Área do Cliente.</h3>
				<p>Por aqui você acompanhar seus pedidos e também alterar
					seus dados de acesso e senha.
				</p>
			</div>
		)
	}

	renderMenu() {

		const url =  window.location.pathname;
		const estaEmDados = url.includes("/area-cliente/dados");
		const estaEmAlterarSenha = url.includes('/area-cliente/alterar-senha');
		const estaEmPedidos = !estaEmDados && !estaEmAlterarSenha;

		return (
			<div className='menu-lateral'>
				<Link href='/area-cliente'>
					<div className={`menu-lateral-item  ${estaEmPedidos ? 'menu-lateral-item-active' : ''}`}>
						<span>MEUS PEDIDOS</span>
					</div>
				</Link>
				<Link href='/area-cliente/dados'>
					<div className={`menu-lateral-item  ${estaEmDados ? 'menu-lateral-item-active' : ''}`}>
						<span>MEUS DADOS</span>
					</div>
				</Link>
				<Link href='/area-cliente/alterar-senha'>
					<div className={`menu-lateral-item  ${estaEmAlterarSenha ? 'menu-lateral-item-active' : ''}`}>
						<span>ALTERAR SENHA</span>
					</div>
				</Link>

				<div className='menu-lateral-item' onClick={() => alert('logout')}>
					<span>SAIR</span>
				</div>
			</div>
		);
	}

	render() {  

		return (
			<div className="flex-1 flex vertical">
				{this.renderCabecalho()}
				{this.renderMenu()}

			</div>
		)
  }

 }


export default MenuAreaDoCliente;