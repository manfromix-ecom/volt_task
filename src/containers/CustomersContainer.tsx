import React, { useEffect, useState } from 'react';
import { Customer } from 'MyModels';
import { connect } from 'react-redux';
import { loadCustomersRequest } from '../features/customers/reducer';
import { Customers } from '../components/customers/Customers';
import { customersAPI } from '../api/customers-api';

export const ContainerBeforeConnect = (props: any) => {
  const { customers, load } = props;
  const [customerCollection, setCustomerCollection] = useState<Customer[]>(customers);

  useEffect(() => {
    if (!customerCollection.length) {
      load();
    }
    // customersAPI.index().then((collection) => setCustomerCollection(collection));
  }, []);

  return <Customers customers={customerCollection as Customer[]} />;
};

const mapStateToProps = (state: any) => {
  //console.log('mapStateToProps PROFILE')
  return {
    customers: state.customers,
  };
};

// @ts-ignore
export const CustomersContainer = connect(mapStateToProps, { load: loadCustomersRequest })(ContainerBeforeConnect);
