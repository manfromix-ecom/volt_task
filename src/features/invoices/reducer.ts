/* eslint no-console: off */

import { Invoice } from 'MyModels';
import { Dispatch } from 'redux';

import {
  CREATE_INVOICE_REQUEST,
  DELETE_INVOICE_REQUEST,
  SET_INVOICE_REQUEST,
  SET_INVOICES,
  UPDATE_INVOICE_REQUEST,
} from './constants';
import { invoicesAPI } from '../../api/invoices-api';
import { addInvoiceCreator, deleteInvoiceCreator, setInvoiceCreator, setInvoicesCreator } from './actions';

const initialState: Invoice[] = [];

export const invoicesReducer = (state: Invoice[] = initialState, action: { type: string; data: any }): Invoice[] => {
  console.log(action);
  switch (action.type) {
    case CREATE_INVOICE_REQUEST:
      return state.concat([action.data]);
    case DELETE_INVOICE_REQUEST:
      return state.filter((invoice) => invoice.id !== action.data.id);
    case UPDATE_INVOICE_REQUEST:
      return state.map((invoice) => (invoice.id === action.data.id ? { ...invoice, editing: !invoice.editing } : invoice));
    case SET_INVOICE_REQUEST:
      return state.map((invoice) => {
        if (invoice.id === action.data.id) {
          return {
            ...invoice,
            customerId: action.data.customerId,
            discount: action.data.discount,
            total: action.data.total,
            editing: !invoice.editing,
          };
        }
        return invoice;
      });
    case SET_INVOICES:
      return action.data;
    default:
      return state;
  }
};

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
