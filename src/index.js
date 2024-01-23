import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App.jsx';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      <ToastContainer autoClose={2000} />
    </PersistGate>
  </Provider>
);
