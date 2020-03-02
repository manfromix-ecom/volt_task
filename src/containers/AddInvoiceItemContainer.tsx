import { connect } from 'react-redux';
import { setInvoiceItem } from '../store/invoiceItems/actions';
import { AddInvoiceItem } from '../components/invoiceItems/AddInvoiceItem';

export const AddInvoiceItemContainer = connect(null, { setInvoiceItem })(AddInvoiceItem);
