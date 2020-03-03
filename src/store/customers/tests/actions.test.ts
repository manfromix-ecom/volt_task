import { Customer } from 'MyModels';
import * as actions from '../actions';
import * as types from '../constants';

const fakeCustomer: Customer = { name: 'Test Name', address: 'Test Address', phone: '555-555-5555', id: 1 };
const newCustomer: Customer = { name: 'Another Name', address: 'Another Address', phone: '555-000-0000' };

describe('customers actions', () => {
  it('should create an action to set customer', () => {
    const expectedAction = {
      type: types.SET_CUSTOMER_REQUEST,
      data: newCustomer,
    };
    expect(actions.setCustomerCreator(newCustomer)).toEqual(expectedAction);
  });

  it('should create an action to create customer', () => {
    const expectedAction = {
      type: types.CREATE_CUSTOMER_REQUEST,
      data: newCustomer,
    };
    expect(actions.addCustomerCreator(newCustomer)).toEqual(expectedAction);
  });

  it('should create an action to delete customer', () => {
    const expectedAction = {
      type: types.DELETE_CUSTOMER_REQUEST,
      data: fakeCustomer,
    };
    expect(actions.deleteCustomerCreator(fakeCustomer)).toEqual(expectedAction);
  });

  it('should create an action to set customers', () => {
    const customers = [fakeCustomer];
    const expectedAction = {
      type: types.SET_CUSTOMERS,
      data: customers,
    };
    expect(actions.setCustomersCreator(customers)).toEqual(expectedAction);
  });
});
