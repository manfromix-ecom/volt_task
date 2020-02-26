import { connect } from 'react-redux';
import Types from 'MyTypes';
import { Invoices } from '../components/invoices/Invoices';
import { InvoiceDispatchProps, InvoicesStateProps } from '../components/invoices/types/InvoicesProps';

const mapStateToProps = (state: Types.RootState): InvoicesStateProps => {
  return {
    invoices: state.invoices,
    customers: state.customers,
  };
};

export const InvoicesContainer = connect<InvoicesStateProps, InvoiceDispatchProps, {}, any>(mapStateToProps, {})(Invoices);
