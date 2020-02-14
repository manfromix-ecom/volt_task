import { Product } from 'MyModels';
import { Dispatch } from 'redux';
import { CREATE_PRODUCT_REQUEST, DELETE_PRODUCT_REQUEST, LOAD_PRODUCTS_REQUEST, UPDATE_PRODUCT_REQUEST } from './constants';
import { productsAPI } from '../../api/products-api';
import { addProductCreator, deleteProductCreator, setProductsCreator, updateProductCreator } from './actions';

export const productsReducer = (state: Product[] = [], action: { type: any; data: Product; id: number | undefined }) => {
  switch (action.type) {
    case CREATE_PRODUCT_REQUEST:
      return state.concat([action.data]);
    case DELETE_PRODUCT_REQUEST:
      return state.filter((product) => product.id !== action.id);
    case UPDATE_PRODUCT_REQUEST:
      return state.map((product) => (product.id === action.id ? { ...product, editing: !product.editing } : product));
    case LOAD_PRODUCTS_REQUEST:
      return state.map((product) => {
        if (product.id === action.id) {
          return {
            ...product,
            name: action.data.name,
            price: action.data.price,
            editing: !product.editing,
          };
        }
        return product;
      });
    default:
      return state;
  }
};

export const createProductRequest = (product: Product) => {
  return async (dispatch: Dispatch<{ type: string; product: Product }>) => {
    await productsAPI.create(product);
    dispatch(addProductCreator(product));
  };
};
export const updateProductRequest = (product: Product) => {
  return async (dispatch: Dispatch<{ type: string; product: Product }>) => {
    await productsAPI.update(product);
    dispatch(updateProductCreator(product));
  };
};
export const createUpdateProductRequest = (product: Product) => {
  return async (dispatch: (arg0: { type: string; product: Product }) => void) => {
    const toCreate = product.id && product.id > 0;
    await productsAPI.create(product);
    if (toCreate) {
      createProductRequest(product);
    } else {
      updateProductRequest(product);
    }
    dispatch(setProductsCreator(product));
  };
};
export const deleteProductRequest = (product: Product) => {
  return async (dispatch: Dispatch<{ type: string; product: Product }>) => {
    await productsAPI.delete(product);
    dispatch(deleteProductCreator(product));
  };
};
