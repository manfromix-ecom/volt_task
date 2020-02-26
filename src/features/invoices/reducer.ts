/* eslint no-console: off */

import { Invoice } from 'MyModels';

import { CREATE_INVOICE_REQUEST, DELETE_INVOICE_REQUEST, SET_INVOICE_REQUEST, SET_INVOICES, UPDATE_INVOICE_REQUEST } from './constants';

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
