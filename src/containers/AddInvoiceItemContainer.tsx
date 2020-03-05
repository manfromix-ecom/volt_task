import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { setInvoiceItem } from '../store/invoiceItems/actions';
import { AddInvoiceItem } from '../components/invoiceItems/AddInvoiceItem';
import { AddInvoiceItemDispatchProps, AddInvoiceItemStateProps } from '../components/invoiceItems/types/AddInvoiceItemProps';

const mapStateToProps = (): AddInvoiceItemStateProps => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const combinedActions: AddInvoiceItemDispatchProps = Object.assign(
    {},
    {
      setInvoiceItem,
    }
  );
  return bindActionCreators(combinedActions as any, dispatch);
};

export const AddInvoiceItemContainer = connect<AddInvoiceItemStateProps, AddInvoiceItemDispatchProps, {}, any>(
  mapStateToProps,
  mapDispatchToProps as any
)(AddInvoiceItem);
