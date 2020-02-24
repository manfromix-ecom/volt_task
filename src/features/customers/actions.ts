import { Customer } from 'MyModels';
import {
  CREATE_CUSTOMER_REQUEST,
  DELETE_CUSTOMER_REQUEST,
  LOAD_CUSTOMERS_REQUEST,
  SET_CUSTOMER_REQUEST,
  SET_CUSTOMERS,
  UPDATE_CUSTOMER_REQUEST,
} from './constants';

export const addCustomerCreator = (customer: Customer) => ({ type: CREATE_CUSTOMER_REQUEST, data: customer });
export const updateCustomerCreator = (customer: Customer) => ({ type: UPDATE_CUSTOMER_REQUEST, data: customer });
export const deleteCustomerCreator = (customer: Customer) => ({ type: DELETE_CUSTOMER_REQUEST, data: customer });
export const setCustomerCreator = (customer: Customer) => ({ type: SET_CUSTOMER_REQUEST, data: customer });
export const loadCustomersCreator = () => ({ type: LOAD_CUSTOMERS_REQUEST });
export const setCustomersCreator = (customers: Customer[]) => ({ type: SET_CUSTOMERS, data: customers });
