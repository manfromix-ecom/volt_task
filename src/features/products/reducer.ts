/* eslint no-console: off */

import { Product } from 'MyModels';
import { Dispatch } from 'redux';

import {
  CREATE_PRODUCT_REQUEST,
  DELETE_PRODUCT_REQUEST,
  SET_PRODUCT_REQUEST,
  SET_PRODUCTS,
  UPDATE_PRODUCT_REQUEST,
} from './constants';
import { productsAPI } from '../../api/products-api';
import { addProductCreator, deleteProductCreator, setProductCreator, setProductsCreator } from './actions';

const initialState: Product[] = [];

export const productsReducer = (state: Product[] = initialState, action: { type: string; data: any }): Product[] => {
  console.log(action);
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

export const deleteProductRequest = (product: Product) => {
  console.log('deleteProductRequest');
  return (dispatch: Dispatch<any>) => {
    console.log('deleteProductRequest product', product);
    productsAPI
      .delete(product)
      .then(() => dispatch(deleteProductCreator(product)))
      .catch(console.error);
  };
};
export const createProductRequest = (product: Product) => {
  return async (dispatch: Dispatch<any>) => {
    const data: any = await productsAPI.create(product);
    if (data.data && data.data.id) product.id = data.data.id;
    dispatch(addProductCreator(product));
  };
};
export const updateProductRequest = (product: Product) => {
  return async (dispatch: Dispatch<any>) => {
    await productsAPI.update(product);
    dispatch(setProductCreator(product));
  };
};
export const loadProductsRequest = () => {
  return (dispatch: Dispatch<any>) => {
    productsAPI
      .index()
      .then((data) => {
        const products = data || [];
        console.log('loadProductsRequest products', products);
        dispatch(setProductsCreator(products));
      })
      .catch(console.error);
  };
};
