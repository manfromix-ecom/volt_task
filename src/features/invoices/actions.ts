import { Invoice } from 'MyModels';
import {
  CREATE_INVOICE_REQUEST,
  DELETE_INVOICE_REQUEST,
  LOAD_INVOICES_REQUEST,
  SET_INVOICE_REQUEST,
  SET_INVOICES,
  UPDATE_INVOICE_REQUEST,
} from './constants';

export const addInvoiceCreator = (invoice: Invoice) => ({ type: CREATE_INVOICE_REQUEST, data: invoice });
export const updateInvoiceCreator = (invoice: Invoice) => ({ type: UPDATE_INVOICE_REQUEST, data: invoice });
export const deleteInvoiceCreator = (invoice: Invoice) => ({ type: DELETE_INVOICE_REQUEST, data: invoice });
export const setInvoiceCreator = (invoice: Invoice) => ({ type: SET_INVOICE_REQUEST, data: invoice });
export const loadInvoicesCreator = () => ({ type: LOAD_INVOICES_REQUEST });
export const setInvoicesCreator = (invoices: Invoice[]) => ({ type: SET_INVOICES, data: invoices });
