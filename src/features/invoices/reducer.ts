import { Invoice } from 'MyModels';
import { Dispatch } from 'redux';
import { CREATE_INVOICE_REQUEST, DELETE_INVOICE_REQUEST, SET_INVOICE_REQUEST, UPDATE_INVOICE_REQUEST } from './constants';
import { invoicesAPI } from '../../api/invoices-api';
import { addInvoiceCreator, deleteInvoiceCreator, setInvoicesCreator } from './actions';

export const invoicesReducer = (state: Invoice[] = [], action: { type: any; data: Invoice; id: number | undefined }) => {
  switch (action.type) {
    case CREATE_INVOICE_REQUEST:
      return state.concat([action.data]);
    case DELETE_INVOICE_REQUEST:
      return state.filter((invoice) => invoice.id !== action.id);
    case UPDATE_INVOICE_REQUEST:
      return state.map((invoice) => (invoice.id === action.id ? { ...invoice, editing: !invoice.editing } : invoice));
    case SET_INVOICE_REQUEST:
      return state.map((invoice) => {
        if (invoice.id === action.id) {
          return {
            ...invoice,
            name: action.data.customerId,
            address: action.data.discount,
            phone: action.data.total,
            editing: !invoice.editing,
          };
        }
        return invoice;
      });
    default:
      return state;
  }
};

export const deleteInvoiceRequest = (invoice: Invoice, id: number | undefined) => {
  return async (dispatch: Dispatch<{ type: string; invoice: Invoice }>) => {
    await invoicesAPI.delete(invoice);
    dispatch(deleteInvoiceCreator(invoice, id));
  };
};
export const createInvoiceRequest = (invoice: Invoice) => {
  return async (dispatch: Dispatch<{ type: string; invoice: Invoice }>) => {
    await invoicesAPI.create(invoice);
    dispatch(addInvoiceCreator(invoice));
    dispatch(setInvoicesCreator(invoice, invoice.id));
  };
};
export const updateInvoiceRequest = (invoice: Invoice, id: number | undefined) => {
  return async (dispatch: Dispatch<{ type: string; invoice: Invoice }>) => {
    await invoicesAPI.update(invoice);
    dispatch(setInvoicesCreator(invoice, id));
  };
};
