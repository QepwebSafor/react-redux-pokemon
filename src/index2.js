import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import App from './containers/App';
import { pokemonReducer } from './reducers/pokemonReducer';
import { logAction, reportError } from './middlewares';
import './index.css';
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION__() || compose;
const composedEnhancers = composeAlt(

  applyMiddleware(thunk, logAction, reportError)
);

const store = configureStore(
{  reducer:pokemonReducer,
  composedEnhancers,
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
export default store;
