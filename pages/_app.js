/*modulo 41 - loja virtual - criando arquivo base  das paginas */

/* ao renomear o arquivos como _app  o "next" reconhece automaticamente
 o arquivo como base para todas as demais paginas */

import { Provider } from 'react-redux';
import App, { Container } from 'next/app'; 
import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux';


class Principal extends App {

	static async getInitialProps({ Component, ctx }) {
	   
		return {pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {} }
	}
	
	render() {
		
		const { Component, pageProps, store } = this.props;

		return (
			<Container>
				<Provider store={store}>
					<Component {...pageProps}>						
					</Component>
				</Provider>
			</Container>
		)
	}
	
}




export default withRedux(initStore)(Principal);

