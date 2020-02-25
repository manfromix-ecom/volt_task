import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { deleteInvoiceRequest, loadInvoicesRequest } from '../features/invoices/reducer';
import { Invoices } from '../components/invoices/Invoices';
import { InvoiceDispatchProps, InvoicesStateProps } from '../components/invoices/types/InvoicesProps';

const mapStateToProps = (state: any): InvoicesStateProps => {
  return {
    invoices: state.invoices,
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
