
/* modulo 40 - loja virtual - criando helper para inicialização*/
import authActions from './authActions';

/* modulo 44 - Criando actions e reduces para integração 1/2*/
import categoriaActions from './categoriaActions';
import lojaActions from './lojaActions';


/* modulo 44 - Criando actions e reduces para integração 2/2*/
import produtoActions from './produtoActions'


/* modulo 48 -  criando as actions e reducers necessários (1/2) */
import carrinhoActions from './carrinhoActions';


/*modulo 49 - Criando as funções e error handlign para os dados do cliente 2/2*/

import clienteActions from './clienteActions';

export default {
	...authActions,
	...categoriaActions,
	...lojaActions,
	...produtoActions,
	...carrinhoActions,
	...clienteActions
};