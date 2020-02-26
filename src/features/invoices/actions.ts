/* eslint no-console: off */

import { Invoice } from 'MyModels';
import { Dispatch } from 'redux';
import {
  CREATE_INVOICE_REQUEST,
  DELETE_INVOICE_REQUEST,
  LOAD_INVOICES_REQUEST,
  SET_INVOICE_REQUEST,
  SET_INVOICES,
  UPDATE_INVOICE_REQUEST,
} from './constants';
import { invoicesAPI } from '../../api/invoices-api';

export const addInvoiceCreator = (invoice: Invoice) => ({ type: CREATE_INVOICE_REQUEST, data: invoice });
export const updateInvoiceCreator = (invoice: Invoice) => ({ type: UPDATE_INVOICE_REQUEST, data: invoice });
export const deleteInvoiceCreator = (invoice: Invoice) => ({ type: DELETE_INVOICE_REQUEST, data: invoice });
export const setInvoiceCreator = (invoice: Invoice) => ({ type: SET_INVOICE_REQUEST, data: invoice });
export const loadInvoicesCreator = () => ({ type: LOAD_INVOICES_REQUEST });
export const setInvoicesCreator = (invoices: Invoice[]) => ({ type: SET_INVOICES, data: invoices });

export const deleteInvoiceRequest = (invoice: Invoice) => {
  console.log('deleteInvoiceRequest');
  return (dispatch: Dispatch<any>) => {
    console.log('deleteInvoiceRequest invoice', invoice);
    invoicesAPI
      .delete(invoice)
      .then(() => dispatch(deleteInvoiceCreator(invoice)))
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
        console.log('loadInvoicesRequest invoices', invoices);
        dispatch(setInvoicesCreator(invoices));
      })
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
