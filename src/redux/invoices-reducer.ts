import * as actions from './invoice-actions';

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

const initialState = {
  id: null,
  customer_id: null,
  discount: null,
  total: null,
};

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
