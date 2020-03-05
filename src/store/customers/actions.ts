/* eslint no-console: off */
import { Dispatch } from 'redux';
import { CREATE_CUSTOMER, DELETE_CUSTOMER, SET_CUSTOMER, SET_CUSTOMERS } from './constants';
import { customersAPI } from './api';
import { Customer } from '../../models/Customer';

export const addCustomerCreator = (customer: Customer) => ({ type: CREATE_CUSTOMER, data: customer });
export const deleteCustomerCreator = (customer: Customer) => ({ type: DELETE_CUSTOMER, data: customer });
export const setCustomerCreator = (customer: Customer) => ({ type: SET_CUSTOMER, data: customer });
export const setCustomersCreator = (customers: Array<Customer>) => ({ type: SET_CUSTOMERS, data: customers });

export const deleteCustomerRequest = (customer: Customer) => {
  return (dispatch: Dispatch<any>) => {
    customersAPI
      .delete(customer)
      .then(() => dispatch(deleteCustomerCreator(customer)))
      .catch(console.error);
  };
};
export const createCustomerRequest = (customer: Customer) => {
  return async (dispatch: Dispatch<any>) => {
    const data: any = await customersAPI.create(customer);
    if (data.data && data.data.id) customer.id = data.data.id;
    dispatch(addCustomerCreator(customer));
  };
};
export const updateCustomerRequest = (customer: Customer) => {
  return async (dispatch: Dispatch<any>) => {
    await customersAPI.update(customer);
    dispatch(setCustomerCreator(customer));
  };
};
export const setCustomer = (customer: Customer) => {
  return (dispatch: Dispatch<any>) => {
    if (customer.id) {
      dispatch(updateCustomerRequest(customer));
    } else {
      dispatch(createCustomerRequest(customer));
    }
  };
};
export const loadCustomersRequest = () => {
  return (dispatch: Dispatch<any>) => {
    customersAPI
      .index()
      .then((data) => {
        const customers = data || [];
        dispatch(setCustomersCreator(customers));
      })
      .catch(console.error);
  };
};
