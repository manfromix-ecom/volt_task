/* eslint no-console: off */

import { Customer } from 'MyModels';

import {
  CREATE_CUSTOMER_REQUEST,
  DELETE_CUSTOMER_REQUEST,
  SET_CUSTOMER_REQUEST,
  SET_CUSTOMERS,
  UPDATE_CUSTOMER_REQUEST,
} from './constants';

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
      return action.data;
    default:
      return state;
  }
};
