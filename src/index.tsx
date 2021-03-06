import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Store } from 'redux';
import { ConnectedRouter } from 'connected-react-router';

import App from './App';
import configureStore, { history } from './stateManagement/store/configureStore';
import * as serviceWorker from './serviceWorker';

import './index.scss';

export const store = configureStore() as Store;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
