import * as actions from './invoice-items-actions';
import { fakeState } from './fakeState';

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

const initialState = fakeState;

export const invoiceItemsReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case 'ADD_INVOICE_ITEM':
      return {
        ...state,
        ...action.payload,
      };
    case 'EDIT_INVOICE_ITEM':
      return {
        ...state,
        ...action.payload,
      };
    case 'DELETE_INVOICE_ITEM':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
