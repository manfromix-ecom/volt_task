import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { loadCustomersRequest } from '../features/customers/actions';
import { CustomersOptionsDispatchProps, CustomersOptionsStateProps } from '../components/common/types/CustomersOptionsProps';
import { CustomerOptions } from '../components/common/CustomersOptions';

const mapStateToProps = (state: any): CustomersOptionsStateProps => {
  return {
    customers: state.customers,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const combinedActions: CustomersOptionsDispatchProps = Object.assign(
    {},
    {
      loadCustomersRequest,
    }
  );
  return bindActionCreators(combinedActions as any, dispatch);
};

export const CustomerOptionsContainer = connect<CustomersOptionsStateProps, CustomersOptionsDispatchProps>(
  mapStateToProps,
  mapDispatchToProps as any
)(CustomerOptions);
