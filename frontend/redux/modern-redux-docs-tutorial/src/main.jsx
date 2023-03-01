import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';

// Import the store and the Provider method to provide the app with the redux store
// we have made
import { Provider } from 'react-redux';
import { store } from './app/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the app in provider and pass store as prop */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
