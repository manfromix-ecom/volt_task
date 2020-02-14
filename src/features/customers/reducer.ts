import { Customer } from 'MyModels';
import { Dispatch } from 'redux';
import { CREATE_CUSTOMER_REQUEST, DELETE_CUSTOMER_REQUEST, SET_CUSTOMER_REQUEST, UPDATE_CUSTOMER_REQUEST } from './constants';
import { customersAPI } from '../../api/customers-api';
import { addCustomerCreator, deleteCustomerCreator, setCustomersCreator, updateCustomerCreator } from './actions';

export const customersReducer = (state: Customer[] = [], action: { type: any; data: Customer; id: number | undefined }) => {
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
    default:
      return state;
  }
};

export const createCustomerRequest = (customer: Customer) => {
  return async (dispatch: Dispatch<{ type: string; customer: Customer }>) => {
    await customersAPI.create(customer);
    dispatch(addCustomerCreator(customer));
  };
};
export const updateCustomerRequest = (customer: Customer, id: number | undefined) => {
  return async (dispatch: Dispatch<{ type: string; customer: Customer }>) => {
    await customersAPI.update(customer);
    dispatch(updateCustomerCreator(customer, id));
  };
};
export const deleteCustomerRequest = (customer: Customer, id: number | undefined) => {
  console.log('deleteCustomerRequest', customer);
  return async (dispatch: Dispatch<{ type: string; customer: Customer }>) => {
    await customersAPI.delete(customer);
    dispatch(deleteCustomerCreator(customer, id));
  };
};

export const createUpdateCustomerRequest = (customer: Customer, id: number | undefined) => {
  console.log('createUpdateCustomerRequest', customer);
  return async (dispatch: (arg0: { type: string; customer: Customer }) => void) => {
    const toCreate = id && id > 0;
    await customersAPI.create(customer);
    if (toCreate) {
      createCustomerRequest(customer);
    } else {
      updateCustomerRequest(customer, id);
    }
    dispatch(setCustomersCreator(customer, customer.id));
  };
};
