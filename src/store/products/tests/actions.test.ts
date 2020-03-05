import * as actions from '../actions';
import * as types from '../constants';
import { Product } from '../../../models/Product';

describe('products actions', () => {
  const fakeProduct: Product = { name: 'Test Product', price: 9.99, id: 1 };
  const newProduct: Product = { name: 'New Product', price: 10.0 };

  it('should create an action to set product', () => {
    const expectedAction = {
      type: types.SET_PRODUCT,
      data: newProduct,
    };
    expect(actions.setProductCreator(newProduct)).toEqual(expectedAction);
  });

  it('should create an action to create product', () => {
    const expectedAction = {
      type: types.CREATE_PRODUCT,
      data: newProduct,
    };
    expect(actions.addProductCreator(newProduct)).toEqual(expectedAction);
  });

  it('should create an action to delete product', () => {
    const expectedAction = {
      type: types.DELETE_PRODUCT,
      data: fakeProduct,
    };
    expect(actions.deleteProductCreator(fakeProduct)).toEqual(expectedAction);
  });

  it('should create an action to set products', () => {
    const products = [fakeProduct];
    const expectedAction = {
      type: types.SET_PRODUCTS,
      data: products,
    };
    expect(actions.setProductsCreator(products)).toEqual(expectedAction);
  });
});
