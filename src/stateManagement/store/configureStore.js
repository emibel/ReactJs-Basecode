import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import thunkMiddleware from 'redux-thunk';

import { loadState, saveState } from '../localStorage';
import createRootReducer from './reducers';

// Initialize the browser history and the rootReducer with the history
const history = createBrowserHistory();
const rootReducer = createRootReducer(history);

/**
 * Setup redux store and connect it with:
 * - react-router-dom
 * - thunk
 * - redux-logger
 */
function configureStore() {
  const initialState = loadState();

  // Configure redux-loger
  const middlewares = applyMiddleware(routerMiddleware(history), createLogger({ collapsed: true }), thunkMiddleware);

  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      }) : compose;

  const enhancer = composeEnhancers(middlewares);

  const store = createStore(
    rootReducer,
    initialState,
    enhancer,
  );

  store.subscribe(() => {
    saveState(store.getState());
  });

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers'); // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export { history, rootReducer };

export default configureStore;
