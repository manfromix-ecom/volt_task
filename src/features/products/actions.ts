import { Product } from 'MyModels';
import { CREATE_PRODUCT_REQUEST, DELETE_PRODUCT_REQUEST, SET_PRODUCT_REQUEST, UPDATE_PRODUCT_REQUEST } from './constants';

export const addProductCreator = (product: Product) => ({ type: CREATE_PRODUCT_REQUEST, product });
export const updateProductCreator = (product: Product, id: number | undefined) => ({ type: UPDATE_PRODUCT_REQUEST, product, id });
export const deleteProductCreator = (product: Product, id: number | undefined) => ({ type: DELETE_PRODUCT_REQUEST, product, id });
export const setProductsCreator = (product: Product, id: number | undefined) => ({ type: SET_PRODUCT_REQUEST, product, id });