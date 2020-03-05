import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { deleteInvoiceRequest } from '../store/invoices/actions';
import { InvoiceRow } from '../components/invoices/InvoiceRow';
import { InvoiceRowDispatchProps, InvoiceRowStateProps } from '../components/invoices/types/InvoiceRowProps';

const mapStateToProps = (): InvoiceRowStateProps => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const combinedActions: InvoiceRowDispatchProps = Object.assign(
    {},
    {
      deleteInvoiceRequest,
    }
  );
  return bindActionCreators(combinedActions as any, dispatch);
};

export const InvoiceRowContainer = connect<InvoiceRowStateProps, InvoiceRowDispatchProps, {}, any>(
  mapStateToProps,
  mapDispatchToProps as any
)(InvoiceRow);
