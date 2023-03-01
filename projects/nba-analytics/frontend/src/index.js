import React from 'react';
import { render } from 'react-dom';
import App from './App';

// Global Store
import { store } from './redux/store';
import { Provider } from 'react-redux';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
