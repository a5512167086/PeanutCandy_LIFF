import { CurrentProduct, Product } from '@/types/common';
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
    productImgSrc:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAMFBMVEXi4uImJiadnZ2SkpLZ2dlsbGxdXV15eXnGxsaoqKiysrKGhoZNTU3Q0NA7Ozu8vLx+CZkfAAAAtElEQVRoge3T2Q6DIBCF4Tkim0t9/7etS22TWg2a3pj834WTcCKDgGYAAAAAAAC4qVbV+Kyj5PtPLc8L1F7zJEHOPbr6XUvzIkFxmiTLmVWq1lqcF8lpfqVVY5bk1zoomEUNe/m5Jq91RaVxaxTWOo02y4J/539pYuHRhaP8QpPtdmQpH+UXmmwPNnTdcol28jOS8/Ku31zRccmN4n5+8jsmzffPNqidDiLv5QAAAAAAALilJ/frBu723vpKAAAAAElFTkSuQmCC'
  },
  {
    id: 2,
    name: '123',
    price: 100,
    description: 'Test description',
    productImgSrc:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAMFBMVEXi4uImJiadnZ2SkpLZ2dlsbGxdXV15eXnGxsaoqKiysrKGhoZNTU3Q0NA7Ozu8vLx+CZkfAAAAtElEQVRoge3T2Q6DIBCF4Tkim0t9/7etS22TWg2a3pj834WTcCKDgGYAAAAAAAC4qVbV+Kyj5PtPLc8L1F7zJEHOPbr6XUvzIkFxmiTLmVWq1lqcF8lpfqVVY5bk1zoomEUNe/m5Jq91RaVxaxTWOo02y4J/539pYuHRhaP8QpPtdmQpH+UXmmwPNnTdcol28jOS8/Ku31zRccmN4n5+8jsmzffPNqidDiLv5QAAAAAAALilJ/frBu723vpKAAAAAElFTkSuQmCC'
  },
  {
    id: 3,
    name: 'Test',
    price: 100,
    description: 'Test description',
    productImgSrc:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAMFBMVEXi4uImJiadnZ2SkpLZ2dlsbGxdXV15eXnGxsaoqKiysrKGhoZNTU3Q0NA7Ozu8vLx+CZkfAAAAtElEQVRoge3T2Q6DIBCF4Tkim0t9/7etS22TWg2a3pj834WTcCKDgGYAAAAAAAC4qVbV+Kyj5PtPLc8L1F7zJEHOPbr6XUvzIkFxmiTLmVWq1lqcF8lpfqVVY5bk1zoomEUNe/m5Jq91RaVxaxTWOo02y4J/539pYuHRhaP8QpPtdmQpH+UXmmwPNnTdcol28jOS8/Ku31zRccmN4n5+8jsmzffPNqidDiLv5QAAAAAAALilJ/frBu723vpKAAAAAElFTkSuQmCC'
  },
  {
    id: 4,
    name: 'Test',
    price: 100,
    description: 'Test description',
    productImgSrc:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAMFBMVEXi4uImJiadnZ2SkpLZ2dlsbGxdXV15eXnGxsaoqKiysrKGhoZNTU3Q0NA7Ozu8vLx+CZkfAAAAtElEQVRoge3T2Q6DIBCF4Tkim0t9/7etS22TWg2a3pj834WTcCKDgGYAAAAAAAC4qVbV+Kyj5PtPLc8L1F7zJEHOPbr6XUvzIkFxmiTLmVWq1lqcF8lpfqVVY5bk1zoomEUNe/m5Jq91RaVxaxTWOo02y4J/539pYuHRhaP8QpPtdmQpH+UXmmwPNnTdcol28jOS8/Ku31zRccmN4n5+8jsmzffPNqidDiLv5QAAAAAAALilJ/frBu723vpKAAAAAElFTkSuQmCC'
  },
  {
    id: 5,
    name: 'Test',
    price: 100,
    description: 'Test description',
    productImgSrc:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAMFBMVEXi4uImJiadnZ2SkpLZ2dlsbGxdXV15eXnGxsaoqKiysrKGhoZNTU3Q0NA7Ozu8vLx+CZkfAAAAtElEQVRoge3T2Q6DIBCF4Tkim0t9/7etS22TWg2a3pj834WTcCKDgGYAAAAAAAC4qVbV+Kyj5PtPLc8L1F7zJEHOPbr6XUvzIkFxmiTLmVWq1lqcF8lpfqVVY5bk1zoomEUNe/m5Jq91RaVxaxTWOo02y4J/539pYuHRhaP8QpPtdmQpH+UXmmwPNnTdcol28jOS8/Ku31zRccmN4n5+8jsmzffPNqidDiLv5QAAAAAAALilJ/frBu723vpKAAAAAElFTkSuQmCC'
  },
  {
    id: 6,
    name: 'Test',
    price: 100,
    description: 'Test description',
    productImgSrc:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAMFBMVEXi4uImJiadnZ2SkpLZ2dlsbGxdXV15eXnGxsaoqKiysrKGhoZNTU3Q0NA7Ozu8vLx+CZkfAAAAtElEQVRoge3T2Q6DIBCF4Tkim0t9/7etS22TWg2a3pj834WTcCKDgGYAAAAAAAC4qVbV+Kyj5PtPLc8L1F7zJEHOPbr6XUvzIkFxmiTLmVWq1lqcF8lpfqVVY5bk1zoomEUNe/m5Jq91RaVxaxTWOo02y4J/539pYuHRhaP8QpPtdmQpH+UXmmwPNnTdcol28jOS8/Ku31zRccmN4n5+8jsmzffPNqidDiLv5QAAAAAAALilJ/frBu723vpKAAAAAElFTkSuQmCC'
  },
  {
    id: 7,
    name: 'Test',
    price: 100,
    description: 'Test description',
    productImgSrc:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAMFBMVEXi4uImJiadnZ2SkpLZ2dlsbGxdXV15eXnGxsaoqKiysrKGhoZNTU3Q0NA7Ozu8vLx+CZkfAAAAtElEQVRoge3T2Q6DIBCF4Tkim0t9/7etS22TWg2a3pj834WTcCKDgGYAAAAAAAC4qVbV+Kyj5PtPLc8L1F7zJEHOPbr6XUvzIkFxmiTLmVWq1lqcF8lpfqVVY5bk1zoomEUNe/m5Jq91RaVxaxTWOo02y4J/539pYuHRhaP8QpPtdmQpH+UXmmwPNnTdcol28jOS8/Ku31zRccmN4n5+8jsmzffPNqidDiLv5QAAAAAAALilJ/frBu723vpKAAAAAElFTkSuQmCC'
  }
];

const ProductList = () => {
  const [confirmModalShow, setConfirmModalShow] = useState(false);
  const [currentConfirmProduct, setcurrentConfirmProduct] = useState<CurrentProduct>({
    id: 0,
    name: '',
    price: 0,
    description: ''
  });

  const handleProductClick = (product: Product) => {
    setConfirmModalShow(true);
    setcurrentConfirmProduct(product);
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
              handleClick={() => {
                handleProductClick(product);
              }}
            />
          </Col>
        ))}
      </Row>
      <CustomModal
        show={confirmModalShow}
        handleHide={handleConfirmModalHide}
        productId={currentConfirmProduct.id}
        productName={currentConfirmProduct.name}
        productPrice={currentConfirmProduct.price}
        productDesc={currentConfirmProduct.description}
        buttonText={'確認'}
      />
    </Container>
  );
};

export default ProductList;
