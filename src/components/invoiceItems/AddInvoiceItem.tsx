import React, { createRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import { ProductOptionsContainer } from '../../containers/ProductsOptionsContainer';
import { AddInvoiceItemProps } from './types/AddInvoiceItemProps';

export const AddInvoiceItem: React.FC<AddInvoiceItemProps> = (props: AddInvoiceItemProps) => {
  const { invoiceId, setInvoiceItem } = props;
  const newProduct = createRef<FormControl<'select'> & HTMLSelectElement>();

  const onClick = () => {
    const productId = newProduct.current && newProduct.current.value ? Number(newProduct.current.value) : 0;
    const quantity = 0;
    setInvoiceItem({ invoiceId, productId, quantity });
  };

  return (
    <Container>
      <Row>
        <Form.Group as={Col} controlId="productId">
          <Form.Label column={false}>Add product</Form.Label>
          <Form.Control name="productId" type="select" as="select" ref={newProduct}>
            <option value="">Select...</option>
            <ProductOptionsContainer />
          </Form.Control>
        </Form.Group>
        <Col>
          <Button variant="outline-secondary" type="button" size="sm" onClick={onClick}>
            Add
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
