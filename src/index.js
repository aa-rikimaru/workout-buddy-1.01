import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Logger from 'redux-logger';
import ReduxPromise from 'redux-promise';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App.jsx';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(Logger, ReduxPromise)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
  <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
