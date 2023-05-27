import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
);

