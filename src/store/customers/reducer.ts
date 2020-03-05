import { Customer } from '../../models/Customer';
import { CREATE_CUSTOMER, DELETE_CUSTOMER, SET_CUSTOMER, SET_CUSTOMERS, UPDATE_CUSTOMER } from './constants';

const initialState: Array<Customer> = [];

export const customersReducer = (state: Array<Customer> = initialState, action: { type: string; data: any }): Array<Customer> => {
  switch (action.type) {
    case CREATE_CUSTOMER:
      return state.concat([action.data]);
    case DELETE_CUSTOMER:
      return state.filter((customer) => customer.id !== action.data.id);
    case UPDATE_CUSTOMER:
      return state.map((customer) => (customer.id === action.data.id ? { ...customer, editing: !customer.editing } : customer));
    case SET_CUSTOMER:
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
