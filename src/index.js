import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import Home from './pages/Home';
import App from './App';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />

        {/* TODO: add router provider instead of home component */}
        <Home />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
