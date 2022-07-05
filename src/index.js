import React from 'react';
import ReactDOM from 'react-dom';
import {  applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import App from './containers/App';
import { logAction, reportError } from './middlewares';
import rootReducer from './reducers/rootReducer';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeEnhancers(
  applyMiddleware(thunk, logAction, reportError)
);

const store = configureStore({reducer: rootReducer}, composedEnhancers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);