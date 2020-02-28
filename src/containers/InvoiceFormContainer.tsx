import { connect } from 'react-redux';
import { setInvoice } from '../store/invoices/actions';
import { InvoiceForm } from '../components/invoices/InvoiceForm';
import { setInvoiceItem } from '../store/invoice-items/actions';

export const InvoiceFormContainer = connect(null, { setInvoice, setInvoiceItem })(InvoiceForm);
