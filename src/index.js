// == Import : yarn
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// == Import : local
// Composants
import App from 'src/components/App';

// store
import store from './store';

// == Render
// 1. Élément React racine
//    => creates a structure of nested objects (virtual DOM)
const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
// 2. The DOM target (where the structure should come to life in the DOM)
const target = document.getElementById('root');
// 3. React rendering trigger (virtual) => DOM (web page)
render(rootReactElement, target);
