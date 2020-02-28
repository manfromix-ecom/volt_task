import { connect } from 'react-redux';
import { setInvoiceItem } from '../store/invoice-items/actions';
import { AddInvoiceItem } from '../components/invoiceItems/AddInvoiceItem';

export const AddInvoiceItemContainer = connect(null, { setInvoiceItem })(AddInvoiceItem);
