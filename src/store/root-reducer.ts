import { combineReducers } from 'redux';
import { customersReducer } from './customers/reducer';
import { productsReducer } from './products/reducer';
import { invoicesReducer } from './invoices/reducer';
import { invoiceItemsReducer } from './invoiceItems/reducer';

export const rootReducer = combineReducers({
  customers: customersReducer,
  products: productsReducer,
  invoices: invoicesReducer,
  invoiceItems: invoiceItemsReducer,
});
