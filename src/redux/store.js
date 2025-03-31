import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Named import instead of default
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;