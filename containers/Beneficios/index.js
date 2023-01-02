/* modelo 41 - Loja virtual -  desenvolvendo  o componente
 de beneficios da loja  */

import React  from 'react';

import ItemBeneficio from '../../components/Item/Beneficio';


const Beneficios = () => (
	<div className='Beneficios'>
		<div className='container flex horizontal-mb wrap-mb'>
			<ItemBeneficio icone='fa-globe' texto='Em 12x sem juros para todo o site' />
			<ItemBeneficio icone='fa-truck' texto='Entregamos em todo o brasil' />
			<ItemBeneficio icone='fa-windows' texto='os melhores produtos em informática' />
			<ItemBeneficio icone='fa-apple' texto='Fornecedores oficiais' />
		</div>
	</div>
);


export default Beneficios;

