import { connect } from 'react-redux';
import { deleteCustomerRequest } from '../features/customers/actions';
import { CustomerRow } from '../components/customers/CustomerRow';

export const CustomerRowContainer = connect(null, { deleteCustomerRequest })(CustomerRow);
