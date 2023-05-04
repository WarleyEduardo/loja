import axios from 'axios';

 export async function consultaCep(cep) {
 


	const endereco = {

		"local": "",
		"bairro": "",
		"cidade": "",
		"estado": ""
	}


   await axios.get(`https://viacep.com.br/ws/${cep.replace('-', '')}/json`)
	   .then((response) => {	
		  
						
						endereco.local = response.data["logradouro"],
						endereco.bairro = response.data["bairro"],
					    endereco.cidade = response.data["localidade"],
			           endereco.estado = response.data["uf"] 
					})
		 .catch(e => console.log(e))
	 
	 
	 
	 return endereco;  
	 
	
	
	
}
			

export default consultaCep;
;