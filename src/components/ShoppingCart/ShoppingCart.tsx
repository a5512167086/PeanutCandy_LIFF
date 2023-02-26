import { RootState } from '@/store';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '@/components/CustomButton';
import Table from 'react-bootstrap/Table';
import { clearCart } from '@/store/features/cart';
import EditModal from '../EditModal';
import { useState } from 'react';
import { EditProduct } from '@/types/common';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const currentCart = useSelector((state: RootState) => state.cart.data);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentEditProduct, setCurrentEditProduct] = useState<EditProduct>({
    productIndex: -1,
    productName: '',
    productCount: 0
  });

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleOpenEditModal = ({ productIndex, productName, productCount }: EditProduct) => {
    setCurrentEditProduct({
      productIndex,
      productName,
      productCount
    });
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <>
      <div className="d-flex mb-2 justify-content-around align-items-center">
        <h5>商品總覽</h5>
        <CustomButton buttonText={'清空購物車'} variant="danger" onClick={handleClearCart} />
      </div>
      <Container className="overflow-auto" style={{ maxHeight: '350px' }}>
        <Table className="text-center" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>商品名稱</th>
              <th>數量</th>
              <th>價格</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {currentCart.map((product, index) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.count}</td>
                <td>${product.count * product.price}</td>
                <td>
                  <CustomButton
                    buttonText={'編輯'}
                    onClick={() => {
                      handleOpenEditModal({
                        productIndex: index,
                        productName: product.name,
                        productCount: product.count
                      });
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <EditModal show={isEditModalOpen} handleModalHide={handleCloseEditModal} editProduct={currentEditProduct} />
    </>
  );
};

export default ShoppingCart;
