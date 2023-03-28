export const formatMoney = (value) => 'R$ ' + Number(value || 0).toFixed(2).replace('.', ',');

/* modulo 42 - pagina de Checkout - criando o componente de dados de entrega 1/2  */

export const ESTADOS = {
	AC: 'Acre',

	AL: 'Alagoas',

	AP: 'Amapá',

	AM: 'Amazonas',

	BA: 'Bahia',

	CE: 'Ceará',

	DF: 'Distrito Federal',

	ES: 'Espírito Santo',

	GO: 'Goiás',

	MA: 'Maranhão',

	MT: 'Mato Grosso',

	MS: 'Mato Grosso do Sul',

	MG: 'Minas Gerais',

	PA: 'Pará',

	PB: 'Paraíba',

	PR: 'Paraná',

	PE: 'Pernambuco',

	PI: 'Piauí',

	RJ: 'Rio de Janeiro',

	RN: 'Rio Grande do Norte',

	RS: 'Rio Grande do Sul',

	RO: 'Rondônia',

	RR: 'Roraima',

	SC: 'Santa Catarina',

	SP: 'São Paulo',

	SE: 'Sergipe',

	TO: 'Tocantins',
};


/*modulo 48 -  integrando a seçao de frete 1/2  */

export const codigosCorreios = {

	"40010": "Sedex",
	"41106": "PAC"
}