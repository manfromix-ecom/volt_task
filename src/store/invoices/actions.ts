import { Invoice } from 'MyModels';
import { Dispatch } from 'redux';
import { CREATE_INVOICE_REQUEST, DELETE_INVOICE_REQUEST, SET_INVOICE_REQUEST, SET_INVOICES } from './constants';
import { invoicesAPI } from '../../api/invoices-api';

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
