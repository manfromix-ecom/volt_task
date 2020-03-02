import { connect } from 'react-redux';
import Types from 'MyTypes';
import { Invoices } from '../components/invoices/Invoices';
import { InvoiceDispatchProps, InvoicesStateProps } from '../components/invoices/types/InvoicesProps';
import { getInvoices } from '../store/invoices/selectors';
import { getCustomers } from '../store/customers/selectors';

const mapStateToProps = (state: Types.RootState): InvoicesStateProps => {
  return {
    invoices: getInvoices(state),
    customers: getCustomers(state),
  };
};

export const InvoicesContainer = connect<InvoicesStateProps, InvoiceDispatchProps, {}, any>(mapStateToProps, {})(Invoices);
