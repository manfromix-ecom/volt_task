import * as customersActions from './customers/actions';
import * as productsActions from './products/actions';
import * as invoicesActions from './invoices/actions';
import * as invoiceItemsActions from './invoiceItems/actions';

export default {
  customers: customersActions,
  products: productsActions,
  invoices: invoicesActions,
  invoiceItems: invoiceItemsActions,
};
