import { connect } from 'react-redux';
import { setInvoiceWithItems } from '../store/invoices/actions';
import { InvoiceForm } from '../components/invoices/InvoiceForm';

export const InvoiceFormContainer = connect(null, { setInvoiceWithItems })(InvoiceForm);
