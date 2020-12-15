import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import axios from 'axios';
import i18next from 'i18next';
import { Provider } from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';

const lang = localStorage.getItem('lang') || 'en'
axios.defaults.headers.common['Accept-Language'] = lang
i18next.changeLanguage(lang)

ReactDOM.render(
  <React.StrictMode>

    <Suspense fallback={<div>Loading...</div>}>
    <Provider store={store}>
      <App />
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();
