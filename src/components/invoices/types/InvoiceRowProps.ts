import { Invoice } from 'MyModels';

export interface InvoiceRowProps {
  invoice: Invoice;
  deleteInvoiceRequest: (invoice: Invoice) => void;
  hideModal: () => void;
}
