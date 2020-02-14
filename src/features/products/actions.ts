import { Product } from 'MyModels';
import { CREATE_PRODUCT_REQUEST, DELETE_PRODUCT_REQUEST, LOAD_PRODUCTS_REQUEST, UPDATE_PRODUCT_REQUEST } from './constants';

export const addProductCreator = (product: Product) => ({ type: CREATE_PRODUCT_REQUEST, product });
export const updateProductCreator = (product: Product) => ({ type: UPDATE_PRODUCT_REQUEST, product });
export const deleteProductCreator = (product: Product) => ({ type: DELETE_PRODUCT_REQUEST, product });
export const setProductsCreator = (product: Product) => ({ type: LOAD_PRODUCTS_REQUEST, product });