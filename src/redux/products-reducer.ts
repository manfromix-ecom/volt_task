import * as actions from './products-actions';
import { state } from './state';

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

const initialState = state;

export const productsReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        ...action.payload,
      };
    case 'EDIT_PRODUCT':
      return {
        ...state,
        ...action.payload,
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
