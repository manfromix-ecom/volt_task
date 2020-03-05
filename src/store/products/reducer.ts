import { Product } from '../../models/Product';
import { CREATE_PRODUCT, DELETE_PRODUCT, SET_PRODUCT, SET_PRODUCTS, UPDATE_PRODUCT } from './constants';

const initialState: Array<Product> = [];

export const productsReducer = (state: Array<Product> = initialState, action: { type: string; data: any }): Array<Product> => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return state.concat([action.data]);
    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.data.id);
    case UPDATE_PRODUCT:
      return state.map((product) => (product.id === action.data.id ? { ...product, editing: !product.editing } : product));
    case SET_PRODUCT:
      return state.map((product) => {
        if (product.id === action.data.id) {
          return {
            ...product,
            name: action.data.name,
            price: action.data.price,
            editing: !product.editing,
          };
        }
        return product;
      });
    case SET_PRODUCTS:
      return action.data;
    default:
      return state;
  }
};
