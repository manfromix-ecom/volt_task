import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { deleteCustomerRequest, loadCustomersRequest } from '../features/customers/reducer';
import { Customers } from '../components/customers/Customers';
import { CustomerDispatchProps, CustomersStateProps } from '../components/customers/types/CustomersProps';

const mapStateToProps = (state: any): CustomersStateProps => {
  return {
    customers: state.customers,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const combinedActions: CustomerDispatchProps = Object.assign(
    {},
    {
      loadCustomersRequest,
      deleteCustomerRequest,
    }
  );
  return bindActionCreators(combinedActions as any, dispatch);
};

export const CustomersContainer = connect<CustomersStateProps, CustomerDispatchProps, {}, any>(
  mapStateToProps,
  mapDispatchToProps as any
)(Customers);
