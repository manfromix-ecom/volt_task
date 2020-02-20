import { Customer, Invoice } from 'MyModels';

export interface InvoiceContainerProps {
  invoice: Invoice;
  setInvoice: (invoice: Invoice, id: number | undefined) => void;
  hideModal: () => void;
  customers?: Customer[];
}
