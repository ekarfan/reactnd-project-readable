import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
//import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import configureStore from '../store/configureStore';
import rootReducer from '../reducers'
import Routes from './routes';

import './App.css'

// Set up redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Set up react-router-redux
const history = createHistory();
const middleware = routerMiddleware(history);
//const middleware = routerMiddleware(browserHistory)


const enhancers = composeEnhancers(
  applyMiddleware(thunk),
  applyMiddleware(middleware)
);

const store = configureStore();


const App = () => {
  return (
    <Provider store={store}>
      <Routes history={history} />
    </Provider>
  );
};

export default App;
