import { connect } from 'react-redux';
import Types from 'MyTypes';
import { bindActionCreators, Dispatch } from 'redux';
import { Invoices } from '../components/invoices/Invoices';
import { InvoicesDispatchProps, InvoicesStateProps } from '../components/invoices/types/InvoicesProps';
import { getInvoices } from '../selectors/invoices';
import { getCustomers } from '../selectors/customers';
import { deleteInvoiceRequest } from '../store/invoices/actions';

const mapStateToProps = (state: Types.RootState): InvoicesStateProps => {
  return {
    invoices: getInvoices(state),
    customers: getCustomers(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const combinedActions: InvoicesDispatchProps = Object.assign(
    {},
    {
      deleteInvoiceRequest,
    }
  );
  return bindActionCreators(combinedActions as any, dispatch);
};

export const InvoicesContainer = connect<InvoicesStateProps, InvoicesDispatchProps, {}, any>(
  mapStateToProps,
  mapDispatchToProps as any
)(Invoices);
