import { connect } from 'react-redux';
import { deleteInvoiceRequest } from '../store/invoices/actions';
import { InvoiceRow } from '../components/invoices/InvoiceRow';

export const InvoiceRowContainer = connect(null, { deleteInvoiceRequest })(InvoiceRow);
