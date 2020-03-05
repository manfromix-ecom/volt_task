import { connect } from 'react-redux';
import Types from 'MyTypes';
import { bindActionCreators, Dispatch } from 'redux';
import { CustomersOptionsDispatchProps, CustomersOptionsStateProps } from '../components/common/types/CustomersOptionsProps';
import { CustomerOptions } from '../components/common/CustomersOptions';

const mapStateToProps = (state: Types.RootState): CustomersOptionsStateProps => {
  return {
    customers: state.customers,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const combinedActions: CustomersOptionsDispatchProps = Object.assign({}, {});
  return bindActionCreators(combinedActions as any, dispatch);
};

export const CustomerOptionsContainer = connect<CustomersOptionsStateProps, CustomersOptionsDispatchProps, {}, any>(
  mapStateToProps,
  mapDispatchToProps as any
)(CustomerOptions);
