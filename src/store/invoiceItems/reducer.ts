import { InvoiceItem } from 'MyModels';
import { unionBy } from 'lodash';
import {
  CREATE_INVOICE_ITEM_REQUEST,
  DELETE_INVOICE_ITEM_REQUEST,
  SET_INVOICE_ITEM_REQUEST,
  SET_INVOICE_ITEMS,
  UPDATE_INVOICE_ITEM_REQUEST,
} from './constants';

const initialState: InvoiceItem[] = [];

export const invoiceItemsReducer = (state: InvoiceItem[] = initialState, action: { type: string; data: any }): InvoiceItem[] => {
  switch (action.type) {
    case CREATE_INVOICE_ITEM_REQUEST:
      return state.concat([action.data]);
    case DELETE_INVOICE_ITEM_REQUEST:
      return state.filter((invoiceItem) => invoiceItem.id !== action.data.id);
    case UPDATE_INVOICE_ITEM_REQUEST:
      return state.map((invoiceItem) =>
        invoiceItem.id === action.data.id ? { ...invoiceItem, editing: !invoiceItem.editing } : invoiceItem
      );
    case SET_INVOICE_ITEM_REQUEST:
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
