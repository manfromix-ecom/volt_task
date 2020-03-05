import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { InvoiceForm } from '../components/invoices/InvoiceForm';
import { setInvoiceWithItems } from '../store/invoices/actions';
import { InvoiceFormDispatchProps, InvoiceFormStateProps } from '../components/invoices/types/InvoiceFormProps';

const mapStateToProps = (): InvoiceFormStateProps => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const combinedActions: InvoiceFormDispatchProps = Object.assign(
    {},
    {
      setInvoiceWithItems,
    }
  );
  return bindActionCreators(combinedActions as any, dispatch);
};

export const InvoiceFormContainer = connect<InvoiceFormStateProps, InvoiceFormDispatchProps, {}, any>(
  mapStateToProps,
  mapDispatchToProps as any
)(InvoiceForm);
