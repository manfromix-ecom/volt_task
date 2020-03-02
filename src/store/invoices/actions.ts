import { Invoice } from 'MyModels';
import { Dispatch } from 'redux';
import { unionBy } from 'lodash';
import { CREATE_INVOICE_REQUEST, DELETE_INVOICE_REQUEST, SET_INVOICE_REQUEST, SET_INVOICES } from './constants';
import { invoicesAPI } from '../../api/invoices-api';
import { deleteInvoiceItemRequest, setInvoiceItem } from '../invoiceItems/actions';
import { getInvoiceItems, getTotal } from './selectors';
import { getProduct } from '../products/selectors';

export const addInvoiceCreator = (invoice: Invoice) => ({ type: CREATE_INVOICE_REQUEST, data: invoice });
export const deleteInvoiceCreator = (invoice: Invoice) => ({ type: DELETE_INVOICE_REQUEST, data: invoice });
export const setInvoiceCreator = (invoice: Invoice) => ({ type: SET_INVOICE_REQUEST, data: invoice });
export const setInvoicesCreator = (invoices: Invoice[]) => ({ type: SET_INVOICES, data: invoices });

export const deleteInvoiceRequest = (invoice: Invoice) => {
  return (dispatch: Dispatch<any>) => {
    invoicesAPI
      .delete(invoice)
      .then(() => dispatch(deleteInvoiceCreator(invoice)))
      // eslint-disable-next-line no-console
      .catch(console.error);
  };
};
export const createInvoiceRequest = (invoice: Invoice) => {
  return async (dispatch: Dispatch<any>) => {
    const data: any = await invoicesAPI.create(invoice);
    if (data.data && data.data.id) invoice.id = data.data.id;
    dispatch(addInvoiceCreator(invoice));
  };
};
export const updateInvoiceRequest = (invoice: Invoice) => {
  return async (dispatch: Dispatch<any>) => {
    await invoicesAPI.update(invoice);
    dispatch(setInvoiceCreator(invoice));
  };
};
export const loadInvoicesRequest = () => {
  return (dispatch: Dispatch<any>) => {
    invoicesAPI
      .index()
      .then((data) => {
        const invoices = data || [];
        dispatch(setInvoicesCreator(invoices));
      })
      // eslint-disable-next-line no-console
      .catch(console.error);
  };
};

export const setInvoice = (formData: any) => {
  return (dispatch: Dispatch<any>) => {
    const { customerId, discount, total, id } = formData;
    if (id) {
      dispatch(updateInvoiceRequest({ customerId, discount, total, id }));
    } else {
      dispatch(createInvoiceRequest({ customerId, discount, total }));
    }
  };
};

export const setInvoiceWithItems = (invoice: any) => {
  return (dispatch: Dispatch<any>, getState: any) => {
    const { items } = invoice;
    if (items) {
      const state = getState();
      let allItems = getInvoiceItems(state, invoice.id);
      const changedItems = items.map((item: any) => {
        item.product = getProduct(state, item.productId);
        return item;
      });
      allItems = unionBy(changedItems, allItems, 'id');
      invoice.total = getTotal(state, invoice.id, allItems);
    }
    dispatch(setInvoice(invoice));
    if (items) {
      Object.keys(items).map(
        (i) =>
          new Promise(() => {
            const item = items[i];
            if (item.quantity) {
              dispatch(setInvoiceItem(item));
            } else {
              dispatch(deleteInvoiceItemRequest(item));
            }
          })
      );
    }
  };
};
