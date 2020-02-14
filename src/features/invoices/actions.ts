import { Invoice } from 'MyModels';
import { CREATE_INVOICE_REQUEST, DELETE_INVOICE_REQUEST, LOAD_INVOICES_REQUEST, UPDATE_INVOICE_REQUEST } from './constants';

export const addInvoiceCreator = (invoice: Invoice) => ({ type: CREATE_INVOICE_REQUEST, invoice });
export const updateInvoiceCreator = (invoice: Invoice) => ({ type: UPDATE_INVOICE_REQUEST, invoice });
export const deleteInvoiceCreator = (invoice: Invoice) => ({ type: DELETE_INVOICE_REQUEST, invoice });
export const setInvoicesCreator = (invoice: Invoice) => ({ type: LOAD_INVOICES_REQUEST, invoice });
