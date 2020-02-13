import { Customer } from 'MyModels';
import { createAsyncAction } from 'typesafe-actions';
import {
  CREATE_CUSTOMER_FAILURE,
  CREATE_CUSTOMER_REQUEST,
  CREATE_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER_FAILURE,
  DELETE_CUSTOMER_REQUEST,
  DELETE_CUSTOMER_SUCCESS,
  LOAD_CUSTOMERS_FAILURE,
  LOAD_CUSTOMERS_REQUEST,
  LOAD_CUSTOMERS_SUCCESS,
  UPDATE_CUSTOMER_FAILURE,
  UPDATE_CUSTOMER_REQUEST,
  UPDATE_CUSTOMER_SUCCESS,
} from './constants';

export const loadCustomersAsync = createAsyncAction(LOAD_CUSTOMERS_REQUEST, LOAD_CUSTOMERS_SUCCESS, LOAD_CUSTOMERS_FAILURE)<
  undefined,
  Customer[],
  string
>();

export const createCustomerAsync = createAsyncAction(CREATE_CUSTOMER_REQUEST, CREATE_CUSTOMER_SUCCESS, CREATE_CUSTOMER_FAILURE)<
  Customer,
  Customer[],
  string
>();

export const updateCustomerAsync = createAsyncAction(UPDATE_CUSTOMER_REQUEST, UPDATE_CUSTOMER_SUCCESS, UPDATE_CUSTOMER_FAILURE)<
  Customer,
  Customer[],
  string
>();

export const deleteCustomerAsync = createAsyncAction(DELETE_CUSTOMER_REQUEST, DELETE_CUSTOMER_SUCCESS, DELETE_CUSTOMER_FAILURE)<
  Customer,
  Customer[],
  Customer
>();
