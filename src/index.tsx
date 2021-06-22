import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./i18n"
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import {store} from './store';
import { Provider } from 'react-redux';

let persistor = persistStore(store);

ReactDOM.render(
  <Suspense fallback={null}>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <App />
          </PersistGate>
      </Provider>
  </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
