import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store.jsx';
import Game from './Game.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<Game />
		</Provider>
	</StrictMode>,
);
