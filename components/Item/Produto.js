/* modulo 41 - loja virtual - criando componente de lista de produto e o card do produto 2/2 */

import React, { Component } from 'react';
import Link from 'next/link';



/*
modulo 42 - pagina de Carrinho - criando a estrutura da pagina e componentes 2/3
const formatMoney = (value) => "R$ " + (value || 0).toFixed(2).replace(".", ",");
*/

import { formatMoney } from '../../utils';


/* Modulo 44 - adicionando dados e realizando integração dos componentes da pagina inicial */
import { baseImg } from '../../config.js';

class Produto extends Component{

	render() {
		
		console.log(baseImg)

		const { item, key, porLinha } = this.props;
		const { _id, titulo, preco, promocao, fotos } = item;
		const temPromo = promocao && preco !== promocao;

		return (
			<Link href={`/produto/${titulo}?id=${_id}`} >
				<div className={`produto flex-1 flex vertical wrap-${porLinha} wrap-2-mb`}>
					<div className='produto-image flex flex-center'>
						<img src={`${baseImg}${fotos[0]}`} alt={titulo} style={{ maxWidth: '55%' }} />
					</div>

					<div className='produto-title flex flex-center'>
						<h3>{titulo}</h3>
					</div>

					<br />

					<div className={`produto-preco ${temPromo ? 'produto-por' : 'produto-sem-promocao'} flex flex-center`}>
						<h2>{temPromo ?  formatMoney(preco) : 0}</h2>
					</div>
					{/*temPromo && (
						<div className={`produto-preco-promocao  flex flex-center`}>
							<h2>{formatMoney(promocao)}</h2>
						</div>
					)*/}

					<div className={`produto-preco-promocao  flex flex-center`}>
						<h2>{temPromo ?  formatMoney(promocao) : formatMoney(preco)}</h2>
					</div>

					<div className={`produto-preco-parcelado flex flex-center`}>
						<h4>ou 6x de {formatMoney((temPromo ? promocao : preco) / 6)} sem juros</h4>
					</div>
				</div>
			</Link>
		);
	}
}

export default Produto;