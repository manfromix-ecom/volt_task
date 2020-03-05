import { unionBy } from 'lodash';
import { InvoiceItem } from '../../models/InvoiceItem';
import { CREATE_INVOICE_ITEM, DELETE_INVOICE_ITEM, SET_INVOICE_ITEM, SET_INVOICE_ITEMS, UPDATE_INVOICE_ITEM } from './constants';

const initialState: Array<InvoiceItem> = [];

export const invoiceItemsReducer = (state: Array<InvoiceItem> = initialState, action: { type: string; data: any }): Array<InvoiceItem> => {
  switch (action.type) {
    case CREATE_INVOICE_ITEM:
      return state.concat([action.data]);
    case DELETE_INVOICE_ITEM:
      return state.filter((invoiceItem) => invoiceItem.id !== action.data.id);
    case UPDATE_INVOICE_ITEM:
      return state.map((invoiceItem) =>
        invoiceItem.id === action.data.id ? { ...invoiceItem, editing: !invoiceItem.editing } : invoiceItem
      );
    case SET_INVOICE_ITEM:
      return state.map((invoiceItem) => {
        if (invoiceItem.id === action.data.id) {
          return {
            ...invoiceItem,
            productId: action.data.productId,
            quantity: action.data.quantity,
            editing: !invoiceItem.editing,
          };
        }
        return invoiceItem;
      });
    case SET_INVOICE_ITEMS:
      return unionBy(action.data, state, 'id');
    default:
      return state;
  }
};
