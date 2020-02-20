import { Invoice } from 'MyModels';
import { CREATE_INVOICE_REQUEST, DELETE_INVOICE_REQUEST, SET_INVOICE_REQUEST, UPDATE_INVOICE_REQUEST } from './constants';

export const addInvoiceCreator = (invoice: Invoice) => ({ type: CREATE_INVOICE_REQUEST, invoice });
export const updateInvoiceCreator = (invoice: Invoice, id: number | undefined) => ({ type: UPDATE_INVOICE_REQUEST, invoice, id });
export const deleteInvoiceCreator = (invoice: Invoice, id: number | undefined) => ({ type: DELETE_INVOICE_REQUEST, invoice, id });
export const setInvoicesCreator = (invoice: Invoice, id: number | undefined) => ({ type: SET_INVOICE_REQUEST, invoice, id });
