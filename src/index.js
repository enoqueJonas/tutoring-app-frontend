import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
// import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* TODO: add router provider instead of home component */}
      <Home />
    </Provider>
  </React.StrictMode>,
);
