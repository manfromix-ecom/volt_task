import { connect } from 'react-redux';
import Types from 'MyTypes';
import { Customers } from '../components/customers/Customers';
import { CustomerDispatchProps, CustomersStateProps } from '../components/customers/types/CustomersProps';
import { getCustomers } from '../features/customers/selectors';

const mapStateToProps = (state: Types.RootState): CustomersStateProps => {
  return {
    customers: getCustomers(state),
  };
};

export const CustomersContainer = connect<CustomersStateProps, CustomerDispatchProps>(mapStateToProps, {})(Customers);
