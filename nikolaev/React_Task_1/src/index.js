import { Provider } from 'react-redux';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/tablePage/App';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root'),
);
