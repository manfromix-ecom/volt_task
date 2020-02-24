import React from 'react';
import { Invoice } from 'MyModels';
import { invoicesAPI } from '../api/invoices-api';
import { Invoices } from '../components/invoices/Invoices';

export const InvoicesContainer: React.FC = () => {
  const [invoiceCollection, setInvoiceCollection] = React.useState<Invoice[]>([]);

  React.useEffect(() => {
    const loadInvoiceCollection = () => {
      invoicesAPI.index().then((collection) => setInvoiceCollection(collection));
    };
    loadInvoiceCollection();
  }, []);

  return <Invoices invoices={invoiceCollection as Invoice[]} />;
};
