import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Reducers from './reducers';
import Routes from './routes';

injectTapEventPlugin();
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDom.render(
  <Provider store={createStoreWithMiddleware(Reducers)}>
    <Router history={browserHistory} routes={Routes} />
  </Provider>,
  document.getElementById('container')
);
