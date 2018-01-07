import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createRedux, createDispatcher, composeStores } from 'redux';
import { alert } from '../reducers/alert.reducer.js'
import { authentication } from '../reducers/authentication.reducer.js'
import { registration } from '../reducers/registration.reducer.js'
import { users } from '../reducers/users.reducer.js'

const loggerMiddleware = createLogger();

export const store = createStore(
  combineReducers({
    alert,
    authentication,
    registration,
    users
  }),['Use Redux'],
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);
