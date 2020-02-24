import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './root-reducer';

const logger: any = (store: any) => (next: any) => (action: any) => {
  const previous: string = JSON.stringify(store.getState());
  next(action);
  console.log('action: ' + JSON.stringify(action) + '\n\tprevious: ' + previous + '\n\tcurrent: ' + JSON.stringify(store.getState()));
};

const myWindow = window as any;
const composeEnhancers = myWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware, logger)));
export default store;
myWindow.__store__ = store;
