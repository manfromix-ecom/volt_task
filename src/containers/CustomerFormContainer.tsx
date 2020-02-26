import { connect } from 'react-redux';
import { CustomerForm } from '../components/customers/CustomerForm';
import { setCustomer } from '../features/customers/actions';

export const CustomerFormContainer = connect(null, { setCustomer })(CustomerForm);
