import React from 'react';
import { Invoice } from 'MyModels';
import { invoicesAPI } from '../api/invoices-api';
import { Invoices } from '../components/invoices/Invoices';

export const useInvoicesCollection = () => {
  const [invoiceCollection, setInvoiceCollection] = React.useState<Invoice[]>([]);

  const loadInvoiceCollection = () => {
    invoicesAPI.index().then((collection) => setInvoiceCollection(collection));
  };

  return { invoiceCollection, loadInvoiceCollection };
};

export const InvoicesContainer: React.FC = () => {
  const { invoiceCollection, loadInvoiceCollection } = useInvoicesCollection();

  React.useEffect(() => {
    loadInvoiceCollection();
  }, []);

  return <Invoices invoices={invoiceCollection as Invoice[]} />;
};