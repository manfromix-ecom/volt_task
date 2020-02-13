import { Product } from 'MyModels';
import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ButtonModal } from '../ButtonModal';
import { productsAPI } from '../../api/products-api';
import { ProductFormContainer } from '../../containers/ProductFormContainer';
import { deleteProductRequest } from '../../features/products/reducer';

export const Products: React.FC = () => {
  document.title = 'Products';

  const useProductsCollection = () => {
    const [productCollection, setProductCollection] = React.useState<Product[]>([]);

    const loadProductCollection = () => {
      productsAPI.index().then((collection) => setProductCollection(collection));
    };

    return { productCollection, loadProductCollection };
  };

  const { productCollection, loadProductCollection } = useProductsCollection();

  React.useEffect(() => {
    loadProductCollection();
  }, []);

  return (
    <>
      <h1>
        Product List
        <ButtonModal title="Add Product" body={<ProductFormContainer product={{} as Product} />} />
      </h1>
      <Table hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productCollection.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

const ProductRow = ({ product }: { product: Product }) => {
  const { id, name, price } = product;
  const onDelete = () => {
    deleteProductRequest(product);
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <ButtonGroup>
          <ButtonModal title="Edit Product" buttonText="Edit" body={<ProductFormContainer product={product} />} />
          <Button variant="outline-secondary" onClick={onDelete}>
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};
