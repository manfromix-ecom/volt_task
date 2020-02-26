import { connect } from 'react-redux';
import { setInvoice } from '../features/invoices/actions';
import { InvoiceForm } from '../components/invoices/InvoiceForm';

export const InvoiceFormContainer = connect(null, { setInvoice })(InvoiceForm);
