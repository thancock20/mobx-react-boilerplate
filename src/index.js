import React from 'react';
import { render } from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App';
import CountModel from './models/CountModel';

useStrict(true);

const store = new CountModel();

render(
  <div>
    <DevTools />
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root'),
);
