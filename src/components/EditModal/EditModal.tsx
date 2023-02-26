import { ButtonGroup, Modal, ModalProps } from 'react-bootstrap';
import { EditModalProps } from './editModal.type';
import CustomCounter from '@/components/CustomCounter';
import CustomButton from '../CustomButton';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '@/store/features/cart';

const EditModal = ({ editProduct, handleModalHide, ...props }: EditModalProps & ModalProps) => {
  const [productCount, setProductCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setProductCount(editProduct.productCount);
  }, [editProduct.productCount]);

  const handleCountClick = (addOn: number) => {
    setProductCount(productCount + addOn);
  };

  const handleRemoveProduct = () => {
    handleModalHide();
    dispatch(removeCartItem(editProduct.productIndex));
  };

  const handleUpdateProduct = () => {
    handleModalHide();
    dispatch(
      updateCartItem({
        updateProductIndex: editProduct.productIndex,
        newProductCount: productCount
      })
    );
  };

  return (
    <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={handleModalHide} {...props}>
      <Modal.Header closeButton>{`正在編輯 ${editProduct.productName} 的數量`}</Modal.Header>
      <Modal.Body className="d-flex flex-column align-items-center">
        <CustomCounter value={productCount} min={1} max={10} handleClick={handleCountClick} />
      </Modal.Body>
      <Modal.Footer>
        <ButtonGroup>
          <CustomButton buttonText="移除商品" variant="danger" onClick={handleRemoveProduct} />
          <CustomButton buttonText="更新商品" onClick={handleUpdateProduct} />
        </ButtonGroup>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
