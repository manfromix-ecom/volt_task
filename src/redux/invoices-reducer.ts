import * as actions from './invoices-actions';
import { state } from './state';

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

const initialState = state;

export const invoicesReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case 'ADD_INVOICE':
      return {
        ...state,
        ...action.payload
      };
    case 'EDIT_INVOICE':
      return {
        ...state,
        ...action.payload
      };
    case 'DELETE_INVOICE':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
