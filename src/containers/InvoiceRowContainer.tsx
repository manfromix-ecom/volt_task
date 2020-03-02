import { connect } from 'react-redux';
import { deleteInvoiceRequest, setInvoice } from '../store/invoices/actions';
import { InvoiceRow } from '../components/invoices/InvoiceRow';

export const InvoiceRowContainer = connect(null, { deleteInvoiceRequest, setInvoice })(InvoiceRow);
