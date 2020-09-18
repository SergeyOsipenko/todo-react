import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import mainReducer, {localMiddleWare} from './reducers'

const store = createStore(
  mainReducer,
  {doings: JSON.parse(localStorage.getItem('todo-react')) || []},
  applyMiddleware(localMiddleWare)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
