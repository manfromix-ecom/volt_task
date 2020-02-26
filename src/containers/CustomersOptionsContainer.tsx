import { connect } from 'react-redux';
import Types from 'MyTypes';
import { CustomersOptionsDispatchProps, CustomersOptionsStateProps } from '../components/common/types/CustomersOptionsProps';
import { CustomerOptions } from '../components/common/CustomersOptions';

const mapStateToProps = (state: Types.RootState): CustomersOptionsStateProps => {
  return {
    customers: state.customers,
  };
};

export const CustomerOptionsContainer = connect<CustomersOptionsStateProps, CustomersOptionsDispatchProps>(
  mapStateToProps,
  {}
)(CustomerOptions);
