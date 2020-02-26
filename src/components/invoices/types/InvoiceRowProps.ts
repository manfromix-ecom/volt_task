import { Invoice } from 'MyModels';

export interface InvoiceRowProps {
  invoice: Invoice;
  hideModal: () => void;
}
