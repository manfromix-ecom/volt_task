import { connect } from 'react-redux';
import Types from 'MyTypes';
import { bindActionCreators, Dispatch } from 'redux';
import { InvoiceItems } from '../components/invoiceItems/InvoiceItems';
import { InvoiceItemsDispatchProps, InvoiceItemsStateProps } from '../components/invoiceItems/types/InvoiceItemsProps';

const mapStateToProps = (state: Types.RootState): InvoiceItemsStateProps => {
  return {
    invoiceItems: state.invoiceItems,
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const combinedActions: InvoiceItemsDispatchProps = Object.assign({}, {});
  return bindActionCreators(combinedActions as any, dispatch);
};

export const InvoiceItemsContainer = connect<InvoiceItemsStateProps, InvoiceItemsDispatchProps, {}, any>(
  mapStateToProps,
  mapDispatchToProps
)(InvoiceItems);
