import { connect } from 'react-redux';
import Types from 'MyTypes';
import { bindActionCreators, Dispatch } from 'redux';
import { Customers } from '../components/customers/Customers';
import { CustomerDispatchProps, CustomersStateProps } from '../components/customers/types/CustomersProps';
import { getCustomers } from '../selectors/customers';
import { deleteCustomerRequest } from '../store/customers/actions';

const mapStateToProps = (state: Types.RootState): CustomersStateProps => {
  return {
    customers: getCustomers(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const combinedActions: CustomerDispatchProps = Object.assign(
    {},
    {
      deleteCustomerRequest,
    }
  );
  return bindActionCreators(combinedActions as any, dispatch);
};

export const CustomersContainer = connect<CustomersStateProps, CustomerDispatchProps>(
  mapStateToProps,
  mapDispatchToProps as any
)(Customers);
