import { connect } from 'react-redux';
import Types from 'MyTypes';
import { deleteInvoiceRequest } from '../features/invoices/actions';
import { InvoiceRow } from '../components/invoices/InvoiceRow';
import { InvoiceRowOwnProps, InvoiceRowStateProps } from '../components/invoices/types/InvoiceRowProps';
import { getCustomer } from '../features/customers/selectors';

const mapStateToProps = (state: Types.RootState, ownProps: InvoiceRowOwnProps): InvoiceRowStateProps => {
  return {
    customer: getCustomer(state, ownProps.invoice.customerId),
  };
};

export const InvoiceRowContainer = connect(mapStateToProps, { deleteInvoiceRequest })(InvoiceRow);