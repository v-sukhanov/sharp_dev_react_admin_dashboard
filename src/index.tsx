import ReactDom from 'react-dom/client'
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>
)