import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { invoicesReducer } from './invoices-reducer';
import { customersReducer } from './customers-reducer';
import { productsReducer } from './products-reducer';
import { invoiceItemsReducer } from './invoice-items-reducer';

let reducers = combineReducers({
  customer: customersReducer,
  product: productsReducer,
  invoice: invoicesReducer,
  invoiceItem: invoiceItemsReducer,
});

const myWindow = window as any;
const composeEnhancers = myWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
myWindow.__store__ = store;
