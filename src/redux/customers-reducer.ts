import * as actions from './customers-actions';

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

const initialState = {
  id: null,
  name: null,
  address: null,
  phone: null,
};

export const customersReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case 'ADD_CUSTOMER':
      return {
        ...state,
        ...action.payload
      };
    case 'EDIT_CUSTOMER':
      return {
        ...state,
        ...action.payload
      };
    case 'DELETE_CUSTOMER':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
