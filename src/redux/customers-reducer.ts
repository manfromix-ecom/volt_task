import * as actions from './customers-actions';
import { state } from './state';

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

const initialState = state;

export const customersReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case 'ADD_CUSTOMER':
      return {
        ...state,
        ...action.payload,
      };
    case 'EDIT_CUSTOMER':
      return {
        ...state,
        ...action.payload,
      };
    case 'DELETE_CUSTOMER':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};


