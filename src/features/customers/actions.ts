/* eslint no-console: off */

import { Customer } from 'MyModels';
import { Dispatch } from 'redux';
import {
  CREATE_CUSTOMER_REQUEST,
  DELETE_CUSTOMER_REQUEST,
  LOAD_CUSTOMERS_REQUEST,
  SET_CUSTOMER_REQUEST,
  SET_CUSTOMERS,
  UPDATE_CUSTOMER_REQUEST,
} from './constants';
import { customersAPI } from '../../api/customers-api';

export const addCustomerCreator = (customer: Customer) => ({ type: CREATE_CUSTOMER_REQUEST, data: customer });
export const updateCustomerCreator = (customer: Customer) => ({ type: UPDATE_CUSTOMER_REQUEST, data: customer });
export const deleteCustomerCreator = (customer: Customer) => ({ type: DELETE_CUSTOMER_REQUEST, data: customer });
export const setCustomerCreator = (customer: Customer) => ({ type: SET_CUSTOMER_REQUEST, data: customer });
export const loadCustomersCreator = () => ({ type: LOAD_CUSTOMERS_REQUEST });
export const setCustomersCreator = (customers: Customer[]) => ({ type: SET_CUSTOMERS, data: customers });

export const deleteCustomerRequest = (customer: Customer) => {
  console.log('deleteCustomerRequest');
  return (dispatch: Dispatch<any>) => {
    console.log('deleteCustomerRequest customer', customer);
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
        console.log('loadCustomersRequest customers', customers);
        dispatch(setCustomersCreator(customers));
      })
      .catch(console.error);
  };
};
