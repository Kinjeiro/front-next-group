import { createStore, combineReducers } from 'redux';
// import rootReducer from '../reducers';
import tablePageReducer from '../reducers/tablePageReducer';

const reducers = {
  tablePage: tablePageReducer,
};

export default function configureStore(initialState) {
  const store = createStore(
    combineReducers(reducers),
    initialState,
  );

  return store;
}
