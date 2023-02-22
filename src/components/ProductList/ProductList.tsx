import { Product } from '@/types/common';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../ProductCard';

const tmpProduct: Array<Product> = [
  {
    id: 1,
    name: 'Test',
    price: 100,
    description: 'Test description',
    productImgSrc: 'https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg'
  },
  {
    id: 2,
    name: 'Test',
    price: 100,
    description: 'Test description',
    productImgSrc: 'https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg'
  },
  {
    id: 3,
    name: 'Test',
    price: 100,
    description: 'Test description',
    productImgSrc: 'https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg'
  },
  {
    id: 4,
    name: 'Test',
    price: 100,
    description: 'Test description',
    productImgSrc: 'https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg'
  },
  {
    id: 5,
    name: 'Test',
    price: 100,
    description: 'Test description',
    productImgSrc: 'https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg'
  },
  {
    id: 6,
    name: 'Test',
    price: 100,
    description: 'Test description',
    productImgSrc: 'https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg'
  },
  {
    id: 7,
    name: 'Test',
    price: 100,
    description: 'Test description',
    productImgSrc: 'https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg'
  }
];

const ProductList = () => (
  <Container>
    <Row xs={2} className="g-4 justify-content-center">
      {tmpProduct.map((product) => (
        <Col key={product.id}>
          <ProductCard
            cardTitle={product.name}
            cardDescription={product.description}
            cardSrc={product.productImgSrc}
            buttonText={'購買'}
          />
        </Col>
      ))}
    </Row>
  </Container>
);

export default ProductList;
