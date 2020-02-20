import { Customer } from 'MyModels';
import { Dispatch } from 'redux';
import merge from 'lodash/merge';

import {
  CREATE_CUSTOMER_REQUEST,
  DELETE_CUSTOMER_REQUEST,
  LOAD_CUSTOMERS_REQUEST,
  SET_CUSTOMER_REQUEST,
  SET_CUSTOMERS,
  UPDATE_CUSTOMER_REQUEST,
} from './constants';
import { customersAPI } from '../../api/customers-api';
import { addCustomerCreator, deleteCustomerCreator, setCustomerCreator, setCustomersCreator } from './actions';

const initialState: Customer[] = [];

export const customersReducer = (state: Customer[] = initialState, action: { type: string; data: any; id: number | undefined }) => {
  switch (action.type) {
    case CREATE_CUSTOMER_REQUEST:
      return state.concat([action.data]);
    case DELETE_CUSTOMER_REQUEST:
      return state.filter((customer) => customer.id !== action.id);
    case UPDATE_CUSTOMER_REQUEST:
      return state.map((customer) => (customer.id === action.id ? { ...customer, editing: !customer.editing } : customer));
    case SET_CUSTOMER_REQUEST:
      return state.map((customer) => {
        if (customer.id === action.id) {
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
      return merge({}, state, action.data);
    default:
      return state;
  }
};

export const deleteCustomerRequest = (customer: Customer, id: number | undefined) => {
  return async (dispatch: Dispatch<{ type: string; customer: Customer }>) => {
    await customersAPI.delete(customer);
    dispatch(deleteCustomerCreator(customer, id));
  };
};
export const createCustomerRequest = (customer: Customer) => {
  return async (dispatch: Dispatch<{ type: string; customer: Customer }>) => {
    await customersAPI.create(customer);
    dispatch(addCustomerCreator(customer));
    dispatch(setCustomerCreator(customer, customer.id));
  };
};
export const updateCustomerRequest = (customer: Customer, id: number | undefined) => {
  return async (dispatch: Dispatch<{ type: string; customer: Customer }>) => {
    await customersAPI.update(customer);
    dispatch(setCustomerCreator(customer, id));
  };
};
export const loadCustomersRequest = () => {
  console.log('loadCustomersRequest');
  return async (dispatch: Dispatch<{ type: string; customers: Customer[] }>) => {
    // const data = await customersAPI.index();
    customersAPI.index().then((data) => {
      console.log('loadCustomersRequest', data);
      dispatch(setCustomersCreator(data));
    });

  };
};
