import { Product } from '@/types/common';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CustomModal from '../CustomModal';
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
    name: '123',
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

const ProductList = () => {
  const [confirmModalShow, setConfirmModalShow] = useState(false);
  const [currentConfirmProduct, setCurrentConfirmProduct] = useState({
    productName: '',
    productPrice: 0
  });

  const handleProductClick = (productName: string, productPrice: number) => {
    setConfirmModalShow(true);
    setCurrentConfirmProduct({
      productName: productName,
      productPrice: productPrice
    });
  };

  const handleConfirmModalHide = () => {
    setConfirmModalShow(false);
  };

  return (
    <Container>
      <Row xs={2} className="g-4 justify-content-center">
        {tmpProduct.map((product) => (
          <Col key={product.id}>
            <ProductCard
              cardTitle={product.name}
              cardDescription={product.description}
              cardPrice={product.price}
              cardSrc={product.productImgSrc}
              buttonText={'購買'}
              handleClick={handleProductClick}
            />
          </Col>
        ))}
      </Row>
      <CustomModal
        show={confirmModalShow}
        handleHide={handleConfirmModalHide}
        modalTtile={`正在將 ${currentConfirmProduct.productName} 加入購物車`}
        modalContent={'請輸入要加到購物車的商品數量'}
        modalPrice={currentConfirmProduct.productPrice}
        buttonText={'確認'}
      />
    </Container>
  );
};

export default ProductList;
