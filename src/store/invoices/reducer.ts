import { Invoice } from '../../models/Invoice';
import { CREATE_INVOICE, DELETE_INVOICE, SET_INVOICE, SET_INVOICES, UPDATE_INVOICE } from './constants';

const initialState: Array<Invoice> = [];

export const invoicesReducer = (state: Array<Invoice> = initialState, action: { type: string; data: any }): Array<Invoice> => {
  switch (action.type) {
    case CREATE_INVOICE:
      return state.concat([action.data]);
    case DELETE_INVOICE:
      return state.filter((invoice) => invoice.id !== action.data.id);
    case UPDATE_INVOICE:
      return state.map((invoice) => (invoice.id === action.data.id ? { ...invoice, editing: !invoice.editing } : invoice));
    case SET_INVOICE:
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
