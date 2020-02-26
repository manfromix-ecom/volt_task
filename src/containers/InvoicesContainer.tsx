import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { deleteInvoiceRequest, loadInvoicesRequest } from '../features/invoices/actions';
import { Invoices } from '../components/invoices/Invoices';
import { InvoiceDispatchProps, InvoicesStateProps } from '../components/invoices/types/InvoicesProps';
import { getInvoices } from '../features/invoices/selector';

const mapStateToProps = (state: any): InvoicesStateProps => {
  return {
    invoices: getInvoices(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const combinedActions: InvoiceDispatchProps = Object.assign(
    {},
    {
      loadInvoicesRequest,
      deleteInvoiceRequest,
    }
  );
  return bindActionCreators(combinedActions as any, dispatch);
};

export const InvoicesContainer = connect<InvoicesStateProps, InvoiceDispatchProps, {}, any>(
  mapStateToProps,
  mapDispatchToProps as any
)(Invoices);
