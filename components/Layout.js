/* modulo 41 - loja virtual - criando a base do layout em html da loja */

import  Head   from './Head';
import  Style  from './Style';

const Layout = ({ children, title, description, url, image }) => {
	
	<div>
		<Head
			title={title}
			description={description}
			url={url}
			ogImage={image}
		    >
			
		</Head>	
		<Style />
		<div className='body'>
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
};

export default Layout;