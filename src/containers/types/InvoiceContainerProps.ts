import { Customer, Invoice } from 'MyModels';

export interface InvoiceContainerProps {
  invoice: Invoice;
  setInvoice: (invoice: Invoice) => void;
  hideModal: () => void;
  customers: Customer[];
}