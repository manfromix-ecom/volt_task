import * as actions from './invoice-items-actions';

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

const initialState = {
  id: null,
  invoice_id: null,
  product_id: null,
  number: null,
  quantity: null,
};

export const invoiceItemsReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case 'ADD_INVOICE_ITEM':
      return {
        ...state,
        ...action.payload
      };
    case 'EDIT_INVOICE_ITEM':
      return {
        ...state,
        ...action.payload
      };
    case 'DELETE_INVOICE_ITEM':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
