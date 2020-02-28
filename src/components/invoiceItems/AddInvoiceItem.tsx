import React, { createRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProductOptionsContainer } from '../../containers/ProductsOptionsContainer';
import { AddInvoiceItemProps } from './types/AddInvoiceItemProps';

export const AddInvoiceItem = (props: AddInvoiceItemProps) => {
  const { invoiceId, setInvoiceItem } = props;
  const newProduct = createRef<any>();

  const onClick = () => {
    const productId = newProduct.current.value;
    const quantity = 1;
    setInvoiceItem({ invoiceId, productId, quantity });
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form.Group controlId="productId">
            <Form.Label column={false}>Add product</Form.Label>
            <Form.Control name="productId" type="select" as="select" ref={newProduct}>
              <option value="">Select...</option>
              <ProductOptionsContainer />
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Button variant="outline-secondary" type="button" size="sm" onClick={onClick}>
            Add
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
