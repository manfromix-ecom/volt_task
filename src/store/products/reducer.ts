import { Product } from 'MyModels';
import { CREATE_PRODUCT_REQUEST, DELETE_PRODUCT_REQUEST, SET_PRODUCT_REQUEST, SET_PRODUCTS, UPDATE_PRODUCT_REQUEST } from './constants';

const initialState: Product[] = [];

export const productsReducer = (state: Product[] = initialState, action: { type: string; data: any }): Product[] => {
  switch (action.type) {
    case CREATE_PRODUCT_REQUEST:
      return state.concat([action.data]);
    case DELETE_PRODUCT_REQUEST:
      return state.filter((product) => product.id !== action.data.id);
    case UPDATE_PRODUCT_REQUEST:
      return state.map((product) => (product.id === action.data.id ? { ...product, editing: !product.editing } : product));
    case SET_PRODUCT_REQUEST:
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
