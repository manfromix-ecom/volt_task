import { connect } from 'react-redux';
import { deleteInvoiceRequest } from '../features/invoices/actions';
import { InvoiceRow } from '../components/invoices/InvoiceRow';

export const InvoiceRowContainer = connect(null, { deleteInvoiceRequest })(InvoiceRow);
