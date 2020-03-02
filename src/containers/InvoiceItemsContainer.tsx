import { connect } from 'react-redux';
import Types from 'MyTypes';
import { InvoiceItems } from '../components/invoiceItems/InvoiceItems';
import { setInvoiceItem } from '../store/invoiceItems/actions';
import { InvoiceItemsStateProps } from '../components/invoiceItems/types/InvoiceItemsProps';

const mapStateToProps = (state: Types.RootState): InvoiceItemsStateProps => {
  return {
    invoiceItems: state.invoiceItems,
    products: state.products,
  };
};

export const InvoiceItemsContainer = connect(mapStateToProps, { setInvoiceItem })(InvoiceItems);
