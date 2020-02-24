import { combineReducers } from 'redux';
import { customersReducer } from '../features/customers/reducer';
import { productsReducer } from '../features/products/reducer';
import { invoicesReducer } from '../features/invoices/reducer';
import { invoiceItemsReducer } from '../features/invoice-items/reducer';

export const rootReducer = () =>
  combineReducers({
    customers: customersReducer,
    products: productsReducer,
    invoices: invoicesReducer,
    invoiceItems: invoiceItemsReducer,
  });
