import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index.js';
import * as rootReducers from '../reducers';
import { createRedux, createDispatcher, composeStores } from 'redux';
import combinedReducer from '../reducers/index.js';
import { alert, authentication, registration, users } from '../reducers'
//import { alert } from from '../reducers/alert.reducer.js'

const loggerMiddleware = createLogger();
//let state = this.props.redux.getState();

/*export const store = createStore(composeStores(Object.assign(
    rootReducers, state)),
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);*/
import { combineReducers } from 'redux';
var combinedReducers = combineReducers({
  alert,
  authentication,
  registration,
  users
});
//export default combinedReducers;



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
