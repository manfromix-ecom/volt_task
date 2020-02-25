import { Product } from 'MyModels';
import {
  CREATE_PRODUCT_REQUEST,
  DELETE_PRODUCT_REQUEST,
  LOAD_PRODUCTS_REQUEST,
  SET_PRODUCT_REQUEST,
  SET_PRODUCTS,
  UPDATE_PRODUCT_REQUEST,
} from './constants';

export const addProductCreator = (product: Product) => ({ type: CREATE_PRODUCT_REQUEST, data: product });
export const updateProductCreator = (product: Product) => ({ type: UPDATE_PRODUCT_REQUEST, data: product });
export const deleteProductCreator = (product: Product) => ({ type: DELETE_PRODUCT_REQUEST, data: product });
export const setProductCreator = (product: Product) => ({ type: SET_PRODUCT_REQUEST, data: product });
export const loadProductsCreator = () => ({ type: LOAD_PRODUCTS_REQUEST });
export const setProductsCreator = (products: Product[]) => ({ type: SET_PRODUCTS, data: products });
