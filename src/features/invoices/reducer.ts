import { Invoice } from 'MyModels';
import { Dispatch } from 'redux';
import { CREATE_INVOICE_REQUEST, DELETE_INVOICE_REQUEST, LOAD_INVOICES_REQUEST, UPDATE_INVOICE_REQUEST } from './constants';
import { invoicesAPI } from '../../api/invoices-api';
import { addInvoiceCreator, deleteInvoiceCreator, setInvoicesCreator, updateInvoiceCreator } from './actions';

export const invoicesReducer = (state: Invoice[] = [], action: { type: any; data: Invoice; id: number | undefined }) => {
  switch (action.type) {
    case CREATE_INVOICE_REQUEST:
      return state.concat([action.data]);
    case DELETE_INVOICE_REQUEST:
      return state.filter((invoice) => invoice.id !== action.id);
    case UPDATE_INVOICE_REQUEST:
      return state.map((invoice) => (invoice.id === action.id ? { ...invoice, editing: !invoice.editing } : invoice));
    case LOAD_INVOICES_REQUEST:
      return state.map((invoice) => {
        if (invoice.id === action.id) {
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
    default:
      return state;
  }
};

export const createInvoiceRequest = (invoice: Invoice) => {
  return async (dispatch: Dispatch<{ type: string; invoice: Invoice }>) => {
    await invoicesAPI.create(invoice);
    dispatch(addInvoiceCreator(invoice));
  };
};
export const updateInvoiceRequest = (invoice: Invoice) => {
  return async (dispatch: Dispatch<{ type: string; invoice: Invoice }>) => {
    await invoicesAPI.update(invoice);
    dispatch(updateInvoiceCreator(invoice));
  };
};
export const deleteInvoiceRequest = (invoice: Invoice) => {
  return async (dispatch: Dispatch<{ type: string; invoice: Invoice }>) => {
    await invoicesAPI.delete(invoice);
    dispatch(deleteInvoiceCreator(invoice));
  };
};
export const createUpdateInvoiceRequest = (invoice: Invoice) => {
  return async (dispatch: (arg0: { type: string; invoice: Invoice }) => void) => {
    const toCreate = invoice.id && invoice.id > 0;
    await invoicesAPI.create(invoice);
    if (toCreate) {
      createInvoiceRequest(invoice);
    } else {
      updateInvoiceRequest(invoice);
    }
    dispatch(setInvoicesCreator(invoice));
  };
};
