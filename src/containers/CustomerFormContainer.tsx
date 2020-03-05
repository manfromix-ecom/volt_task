import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { CustomerForm } from '../components/customers/CustomerForm';
import { setCustomer } from '../store/customers/actions';
import { CustomerFormDispatchProps, CustomerFormStateProps } from '../components/customers/types/CustomerFormProps';

const mapStateToProps = (): CustomerFormStateProps => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const combinedActions: CustomerFormDispatchProps = Object.assign(
    {},
    {
      setCustomer,
    }
  );
  return bindActionCreators(combinedActions as any, dispatch);
};

export const CustomerFormContainer = connect<CustomerFormStateProps, CustomerFormDispatchProps, {}, any>(
  mapStateToProps,
  mapDispatchToProps as any
)(CustomerForm);
