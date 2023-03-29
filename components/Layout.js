/* modulo 41 - loja virtual - criando a base do layout em html da loja */

import  Head   from './Head';
import Style from './Style';

/*Módulo 49 atualizando a Page e o Head */

const Layout = ({ children, title, description, url, image, pagSeguro }) => (
	
	<div>
		<Head
			title={title}
			description={description}
			url={url}
			ogImage={image}
			pagSeguro={pagSeguro}
		    >
			
		</Head>	
		<Style />
		<div className="body">
          {children}
		</div>
		<footer>
			<div className='flex flex-center'>
			<small>
			    &copy; Loja IT -  Curso criando um Ecommerce do zero		
			 </small>
			</div>
		</footer>
	</div>
);




export default Layout;

