/* eslint no-console: off */

import { Customer } from 'MyModels';
import { Dispatch } from 'redux';

import {
  CREATE_CUSTOMER_REQUEST,
  DELETE_CUSTOMER_REQUEST,
  SET_CUSTOMER_REQUEST,
  SET_CUSTOMERS,
  UPDATE_CUSTOMER_REQUEST,
} from './constants';
import { customersAPI } from '../../api/customers-api';
import { addCustomerCreator, deleteCustomerCreator, setCustomerCreator, setCustomersCreator } from './actions';

const initialState: Customer[] = [];

export const customersReducer = (state: Customer[] = initialState, action: { type: string; data: any }): Customer[] => {
  console.log(action);
  switch (action.type) {
    case CREATE_CUSTOMER_REQUEST:
      return state.concat([action.data]);
    case DELETE_CUSTOMER_REQUEST:
      return state.filter((customer) => customer.id !== action.data.id);
    case UPDATE_CUSTOMER_REQUEST:
      return state.map((customer) => (customer.id === action.data.id ? { ...customer, editing: !customer.editing } : customer));
    case SET_CUSTOMER_REQUEST:
      return state.map((customer) => {
        if (customer.id === action.data.id) {
          return {
            ...customer,
            name: action.data.name,
            address: action.data.address,
            phone: action.data.phone,
            editing: !customer.editing,
          };
        }
        return customer;
      });
    case SET_CUSTOMERS:
      console.log(SET_CUSTOMERS, action.data, state.concat(action.data));
      return state.concat(action.data);
    default:
      return state;
  }
};

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
    if (data.id) customer.id = data.id;
    dispatch(addCustomerCreator(customer));
  };
};
export const updateCustomerRequest = (customer: Customer) => {
  return async (dispatch: Dispatch<any>) => {
    await customersAPI.update(customer);
    dispatch(setCustomerCreator(customer));
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
