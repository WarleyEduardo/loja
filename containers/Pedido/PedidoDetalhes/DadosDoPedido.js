/* modulo 43 - Area do cliente -  Detalhes do pedido - 
 criando a página, componentes e todo o estilo  1/3
*/


import React, { Component } from 'react';
import TextoDados from '../../../components/Texto/Dados';
import TabelaSimples from '../../../components/Tabela/Simples.js';
import { formatMoney } from '../../../utils';

class DadosDoPedido extends Component {
	renderDadosDoCliente() {
		return (
			<div className='flex-3'>
				<h4 className='hedadline'>DADOS DO CLIENTE</h4>
				<br />
				<TextoDados chave='Nome' valor='Joao Gabriel' />
				<TextoDados chave='CPF' valor='111.222.333-45' />
				<TextoDados chave='Telefone' valor='(11) 1234-5678' />
				<TextoDados chave='Data de Nascimento' valor='11/01/1991' />
			</div>
		);
	}

	renderDadosDoCarrinho() {
		const carrinho = [
			{
				Produto: 'Mouse Gamer 1 - p ',
				'Preço Und.': formatMoney(55),
				Quantidade: 1,
				'Preço Total': formatMoney(55),
			},
			{
				Produto: 'Mouse Gamer 2 - M ',
				'Preço Und.': formatMoney(105),
				Quantidade: 2,
				'Preço Total': formatMoney(210),
			},
		];

		return (
			<div className='flex-5'>
				<h4 className='headline'>CARRINHO</h4>
				<br />
				<TabelaSimples cabecalho={['Produto', 'Preço Und', 'Quantidade', 'Preço Total']} dados={carrinho} />
			</div>
		);
	}

	/* modulo 43 - Area do cliente -  Detalhes do pedido - 
 criando a página, componentes e todo o estilo  2/3
*/

	renderDadosDeEntrega() {
		return (
			<div className='flex-3'>
				<h4 className='headline'>DADOS DE ENTREGA</h4>
				<br />
				<TextoDados chave='Endereco' valor='Rua teste' />
				<TextoDados chave='Número' valor='123' />
				<TextoDados chave='Bairro' valor='Centro' />
				<TextoDados chave='Complemento' valor='casa' />
				<TextoDados chave='Cidade' valor='Uberaba' />
				<TextoDados chave='Estado' valor='MG' />
				<TextoDados chave='CEP' valor='12345-789' />
			</div>
		);
	}

	renderDadosDePagamento() {
		return (
			<div className='flex-5'>
				<h4 className='headline'>DADOS DE PAGAMENTO</h4>
				<br />
				<TextoDados chave='Taxa de Entrega' valor={formatMoney(20)} />
				<TextoDados chave='Valor do Pedido' valor={formatMoney(265)} />
				<TextoDados chave='Valor Total' valor={formatMoney(285)} />
				<TextoDados chave='Forma de pagamento' valor="cartao de crédito - 2x" />
			</div>
		);
	}

	render() {
		return (
			<div className='Detalhes-do-Pedido'>
				<div className='flex horizontal'>
					{this.renderDadosDoCliente()}
					{this.renderDadosDoCarrinho()}
				</div>
				<div className='flex horizontal'>
					{this.renderDadosDeEntrega()}
					{this.renderDadosDePagamento()}
				</div>
			</div>
		);
	}
}

export default DadosDoPedido