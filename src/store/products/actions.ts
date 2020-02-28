import { Product } from 'MyModels';
import { Dispatch } from 'redux';
import {
  CREATE_PRODUCT_REQUEST,
  DELETE_PRODUCT_REQUEST,
  SET_PRODUCT_REQUEST,
  SET_PRODUCTS,
} from './constants';
import { productsAPI } from '../../api/products-api';

export const addProductCreator = (product: Product) => ({ type: CREATE_PRODUCT_REQUEST, data: product });
export const deleteProductCreator = (product: Product) => ({ type: DELETE_PRODUCT_REQUEST, data: product });
export const setProductCreator = (product: Product) => ({ type: SET_PRODUCT_REQUEST, data: product });
export const setProductsCreator = (products: Product[]) => ({ type: SET_PRODUCTS, data: products });

export const deleteProductRequest = (product: Product) => {
  return (dispatch: Dispatch<any>) => {
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
export const setProduct = (product: Product) => {
  return (dispatch: Dispatch<any>) => {
    if (product.id) {
      dispatch(updateProductRequest(product));
    } else {
      dispatch(createProductRequest(product));
    }
  };
};
export const loadProductsRequest = () => {
  return (dispatch: Dispatch<any>) => {
    productsAPI
      .index()
      .then((data) => {
        const products = data || [];
        dispatch(setProductsCreator(products));
      })
      .catch(console.error);
  };
};
