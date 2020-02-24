import { connect } from 'react-redux';
import { Customer } from 'MyModels';
import { deleteCustomerRequest, loadCustomersRequest } from '../features/customers/reducer';
import { Customers } from '../components/customers/Customers';

interface MapStateToPropsTypes {
  customers: Customer[];
}

interface MapDispatchToPropsTypes {
  load: () => void;
  delete: (customer: Customer, id: number) => void;
}

const mapStateToProps = (state: any) => {
  console.log('mapStateToProps customers', state);
  return {
    customers: state.customers,
  };
};

const mapDispatchToProps = () => {
  return {
    load: loadCustomersRequest,
    delete: deleteCustomerRequest,
  };
};

export const CustomersContainer = connect<MapStateToPropsTypes, MapDispatchToPropsTypes>(mapStateToProps, {
  load: loadCustomersRequest,
  delete: deleteCustomerRequest,
})(Customers);
