import { Invoice } from 'MyModels';
import { InjectedFormProps } from 'redux-form';

export interface InvoicesProps {
  invoices: Invoice[];
}

export interface InvoiceFormProps extends InjectedFormProps {}
