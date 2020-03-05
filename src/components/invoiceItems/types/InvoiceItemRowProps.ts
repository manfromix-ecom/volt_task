import React from 'react';
import { InvoiceItem } from '../../../models/InvoiceItem';

export interface InvoiceItemRowProps {
  item: InvoiceItem;
  onChange: (e: React.SyntheticEvent) => void;
}
