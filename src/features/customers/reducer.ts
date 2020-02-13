import { Customer } from 'MyModels';
import { Dispatch } from 'redux';
import { CREATE_CUSTOMER_REQUEST, DELETE_CUSTOMER_REQUEST, LOAD_CUSTOMERS_REQUEST, UPDATE_CUSTOMER_REQUEST } from './constants';
import { customersAPI } from '../../api/customers-api';

export const customersReducer = (state: Customer[] = [], action: { type: any; data: Customer; id: number | undefined }) => {
  switch (action.type) {
    case CREATE_CUSTOMER_REQUEST:
      return state.concat([action.data]);
    case DELETE_CUSTOMER_REQUEST:
      return state.filter((customer) => customer.id !== action.id);
    case UPDATE_CUSTOMER_REQUEST:
      return state.map((customer) => (customer.id === action.id ? { ...customer, editing: !customer.editing } : customer));
    case LOAD_CUSTOMERS_REQUEST:
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

export const addCustomerCreator = (customer: Customer) => ({ type: CREATE_CUSTOMER_REQUEST, customer });
export const updateCustomerCreator = (customer: Customer) => ({ type: UPDATE_CUSTOMER_REQUEST, customer });
export const deleteCustomerCreator = (customer: Customer) => ({ type: DELETE_CUSTOMER_REQUEST, customer });
export const setCustomersCreator = (customer: Customer) => ({ type: LOAD_CUSTOMERS_REQUEST, customer });

export const createCustomerRequest = (customer: Customer) => {
  return async (dispatch: Dispatch<{ type: string; customer: Customer }>) => {
    await customersAPI.create(customer);
    dispatch(addCustomerCreator(customer));
  };
};
export const updateCustomerRequest = (customer: Customer) => {
  return async (dispatch: Dispatch<{ type: string; customer: Customer }>) => {
    await customersAPI.update(customer);
    dispatch(updateCustomerCreator(customer));
  };
};
export const deleteCustomerRequest = (customer: Customer) => {
  console.log('deleteCustomerRequest', customer);
  customersAPI.delete(customer);
};

export const createUpdateCustomerRequest = (customer: Customer) => {
  console.log('createUpdateCustomerRequest', customer);
  return async (dispatch: (arg0: { type: string; customer: Customer }) => void) => {
    const toCreate = customer.id && customer.id > 0;
    await customersAPI.create(customer);
    if (toCreate) {
      createCustomerRequest(customer);
    } else {
      updateCustomerRequest(customer);
    }
    dispatch(setCustomersCreator(customer));
  };
};
